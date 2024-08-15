import {Component, OnInit, ViewChild} from '@angular/core';
import {ButtonDirective, ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {NgForOf, NgIf} from "@angular/common";
import {ConfirmationService, MessageService, PrimeTemplate} from "primeng/api";
import {Ripple} from "primeng/ripple";
import {Table, TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import {ToastModule} from "primeng/toast";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Defect} from "../../../../core/models/defect.model";
import {DefectType} from "../../../../core/enums/defect-type";
import {DefectPriority} from "../../../../core/enums/defect-priority";
import {DefectService} from "../../../../core/services/defect.service";
import {UpdateDefectDto} from "../../../../core/dtos/update-defect-dto.dto";
import {CreateDefectDto} from "../../../../core/dtos/create-defect-dto.dto";
import {DialogModule} from "primeng/dialog";

@Component({
  selector: 'app-d-defect',
  standalone: true,
  imports: [
    ButtonDirective,
    ConfirmDialogModule,
    DropdownModule,
    InputTextModule,
    NgIf,
    PrimeTemplate,
    Ripple,
    TableModule,
    TagModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    NgForOf
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './d-defect.component.html',
  styleUrl: './d-defect.component.css'
})
export class DDefectComponent  implements  OnInit{
  @ViewChild('dt') dt!: Table;
  visible: boolean = false;
  createDefectForm!: FormGroup;
  defects: Defect[] = [];
  defectTypes = Object.values(DefectType);
  defectPriorities = Object.values(DefectPriority);
  clonedDefect: { [s: string]: Defect } = {};

  constructor(
    private fb: FormBuilder,
    private defectService: DefectService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createDefectForm = this.fb.group({
      description: ['', Validators.required],
      type: ['', Validators.required],
      priority: ['', Validators.required]
    });
    this.loadDefects();
  }

  onNumber() : number{
    return this.defects.length;
  }

  loadDefects(): void {
    this.defectService.getAllDefects().subscribe({
      next: defects => this.defects = defects,
      error: () => this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Failed to load defects' })
    });
  }

  onRowEditInit(defect: Defect) {
    this.clonedDefect[defect.id] = { ...defect };
  }

  onRowEditSave(defect: Defect) {
    if (defect.id > 0) {
      const dto: UpdateDefectDto = {
        id: defect.id,
        priority: defect.priority,
        type: defect.type,
        description: defect.description
      };

      this.defectService.updateDefect(dto).subscribe({
        next: (updatedDefect) => {
          this.defects[this.defects.findIndex(e => e.id === defect.id)] = updatedDefect;
          delete this.clonedDefect[defect.id];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Defect is updated' });
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update defect' });
          this.onRowEditCancel(defect, this.defects.findIndex(e => e.id === defect.id));
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Defect' });
    }
  }

  onRowEditCancel(defect: Defect, index: number) {
    this.defects[index] = this.clonedDefect[defect.id];
    delete this.clonedDefect[defect.id];
  }

  getPriorities(priority: DefectPriority): 'success' | 'secondary' | 'warning' | 'danger' | undefined {
    switch (priority) {
      case DefectPriority.LOW:
        return 'success';
      case DefectPriority.NORMAL:
        return 'secondary';
      case DefectPriority.CRITICAL:
        return 'warning';
      case DefectPriority.HIGH:
        return 'danger';
      default:
        return undefined;
    }
  }

  getSeverity(type: DefectType): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | undefined {
    switch (type) {
      case DefectType.HARDWARE:
        return 'success';
      case DefectType.NETWORK:
        return 'secondary';
      case DefectType.SOFTWARE:
        return 'warning';
      case DefectType.USER_ERROR:
        return 'info';
      case DefectType.OTHER:
        return 'danger';
      default:
        return undefined;
    }
  }

  onSubmit() {
    if (this.createDefectForm.valid) {
      const formValues = this.createDefectForm.value;

      const newDefect: CreateDefectDto = {
        description: formValues.description,
        type: formValues.type,
        priority: formValues.priority
      };

      this.defectService.addDefect(newDefect).subscribe(
        (response: Defect) => {
          console.log('Defect added successfully:', response);
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Defect added successfully'});
          this.visible = false;
          this.loadDefects()
        },
        (error) => {
          console.error('Error adding defect:', error);
        }
      );
    }
  }

  showDialog() {
    this.visible = true;
  }

  navigateToCreate(): void {
    this.router.navigate(['/add-defect']);
  }

  confirmDelete(defect: Defect): void {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete the defect ${defect.type}?`,
      accept: () => {
        this.defectService.deleteDefect(defect.id!).subscribe({
          next: () => {
            this.loadDefects();
            this.showSuccess('Defect deleted successfully');
          },
          error: () => this.showError('Failed to delete defect')
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
