import {Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { EquipmentService } from '../../../core/services/equipment.service';
import { TableModule, Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import {Equipment} from "../../../core/models/equipment.model";
import {Ripple} from "primeng/ripple";

@Component({
  selector: 'app-equipment-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    Ripple
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {
  @ViewChild('dt') dt!: Table;

  equipments: Equipment[] = [];

  constructor(
    private equipmentService: EquipmentService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEquipments();
  }

  loadEquipments(): void {
    this.equipmentService.getAllEquipments().subscribe({
      next: equipments => this.equipments = equipments,
      error: () => this.showError('Failed to load equipments')
    });
  }

  navigateToCreate(): void {
    this.router.navigate(['/equipment/new']);
  }

  editEquipment(equipment: Equipment): void {
    this.router.navigate(['/equipment/edit', equipment.id]);
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
