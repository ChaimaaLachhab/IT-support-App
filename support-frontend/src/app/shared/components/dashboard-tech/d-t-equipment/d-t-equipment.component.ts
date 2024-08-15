import {Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {UpdateEquipmentStatusDto} from "../../../../core/dtos/update-equipment-status-dto.dto";


@Component({
  selector: 'app-d-t-equipment',
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
    TagModule
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './d-t-equipment.component.html',
  styleUrls: ['./d-t-equipment.component.css']
})
export class DTEquipmentComponent implements OnInit {
  @ViewChild('dt') dt!: Table;

  equipments: Equipment[] = [];
  statuses = Object.values(EquipmentStatus);
  clonedEquipment: { [s: string]: Equipment } = {};

  constructor(
    private equipmentService: EquipmentService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEquipments();
  }

  onNumber() : number{
    return this.equipments.length;
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
      const dto: UpdateEquipmentStatusDto = {
        id: equipment.id,
        status: equipment.status
      };

      this.equipmentService.updateEquipment(dto).subscribe({
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
