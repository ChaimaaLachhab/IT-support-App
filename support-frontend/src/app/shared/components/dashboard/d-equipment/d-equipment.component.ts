import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TableModule, Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import {Ripple} from "primeng/ripple";
import {PaginatorModule} from "primeng/paginator";
import {TagModule} from "primeng/tag";
import {EquipmentService} from "../../../../core/services/equipment.service";
import {Equipment} from "../../../../core/models/equipment.model";
import {EquipmentStatus} from "../../../../core/enums/equipment-status";
import {EquipmentType} from "../../../../core/enums/equipment-type";
import {User} from "../../../../core/models/user.model";
import {UserService} from "../../../../core/services/user.service";
import {UpdateEquipmentDto} from "../../../../core/dtos/update-equipment-dto.dto";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CreateEquipmentDto} from "../../../../core/dtos/create-equipment-dto.dto";
import { Location } from '@angular/common';
import {DialogModule} from "primeng/dialog";

@Component({
  selector: 'app-d-equipment',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    Ripple,
    PaginatorModule,
    TagModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    NgForOf
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './d-equipment.component.html',
  styleUrls: ['./d-equipment.component.css']
})
export class DEquipmentComponent implements OnInit {
  @ViewChild('dt') dt!: Table;
  visible: boolean = false;
  createEquipmentForm!: FormGroup;
  users: User[] = [];
  equipments: Equipment[] = [];
  statuses = Object.values(EquipmentStatus);
  types = Object.values(EquipmentType);
  clonedEquipment: { [s: string]: Equipment } = {};

  constructor(
    private fb: FormBuilder,
    private equipmentService: EquipmentService,
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.createEquipmentForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      status: [{ value: EquipmentStatus.ACTIVE, disabled: true }],
      userId: ['', Validators.required]
    });
    this.loadEquipments();
    this.loadUsers();
  }

  onNumber() : number{
    return this.equipments.length;
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  loadEquipments(): void {
    this.equipmentService.getAllEquipments().subscribe({
      next: equipments => this.equipments = equipments,
      error: () => this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Failed to load equipments' })

    });
  }

  onRowEditInit(equipment: Equipment) {
    this.clonedEquipment[equipment.id] = { ...equipment };
  }

  onRowEditSave(equipment: Equipment) {
    if (equipment.id > 0) {
      const dto: UpdateEquipmentDto = {
        id: equipment.id,
        name: equipment.name,
        type: equipment.type,
        status: equipment.status,
        userId: equipment.user.id
      };

      this.equipmentService.updateEquipmentall(dto).subscribe({
        next: (updatedEquipment) => {
          this.equipments[this.equipments.findIndex(e => e.id === equipment.id)] = updatedEquipment;
          delete this.clonedEquipment[equipment.id];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Equipment is updated' });
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update equipment' });
          this.onRowEditCancel(equipment, this.equipments.findIndex(e => e.id === equipment.id));
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Equipment' });
    }
  }

  onRowEditCancel(equipment: Equipment, index: number) {
    this.equipments[index] = this.clonedEquipment[equipment.id];
    delete this.clonedEquipment[equipment.id];
  }

  getSeverity(status: EquipmentStatus): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | undefined {
    switch (status) {
      case EquipmentStatus.ACTIVE:
        return 'success';
      case EquipmentStatus.INACTIVE:
        return 'secondary';
      case EquipmentStatus.UNDER_MAINTENANCE:
        return 'warning';
      case EquipmentStatus.RETIRED:
        return 'info';
      case EquipmentStatus.BROKEN:
        return 'danger';
      default:
        return undefined;
    }
  }

  getTypes(status: EquipmentType): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | undefined {
    switch (status) {
      case EquipmentType.COMPUTER:
        return 'success';
      case EquipmentType.MOBILE_DEVICE:
        return 'secondary';
      case EquipmentType.PRINTER:
        return 'warning';
      case EquipmentType.SERVER:
        return 'info';
      case EquipmentType.ROUTER:
        return 'danger';
      case EquipmentType.OTHER:
        return 'danger';
      default:
        return undefined;
    }
  }

  onSubmit() {
    if (this.createEquipmentForm.valid) {
      const formValues = this.createEquipmentForm.value;

      const newEquipment: CreateEquipmentDto = {
        name: formValues.name,
        type: formValues.type,
        status: EquipmentStatus.ACTIVE,
        userId: formValues.userId
      };

      this.equipmentService.addEquipment(newEquipment).subscribe(
        (response: Equipment) => {
          console.log('Equipment added successfully:', response);
          this.visible = false;
          this.loadEquipments();
        },
        (error) => {
          console.error('Error adding equipment:', error);
        }
      );
    }
  }

  showDialog() {
    this.visible = true;
  }

  navigateToCreate(): void {
    this.router.navigate(['/add-equipment']);
  }

  confirmDelete(equipment: Equipment): void {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete the equipment ${equipment.name}?`,
      accept: () => {
        this.equipmentService.deleteEquipment(equipment.id!).subscribe({
          next: () => {
            this.loadEquipments();
            this.showSuccess('Equipment deleted successfully');
          },
          error: () => this.showError('Failed to delete equipment')
        });
      }
    });
  }

  private showSuccess(message: string): void {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  private showError(message: string): void {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }
}
