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
  selector: 'app-d-u-equipment',
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
  templateUrl: './d-u-equipment.component.html',
  styleUrls: ['./d-u-equipment.component.css']
})
export class DUEquipmentComponent implements OnInit {
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
    this.equipmentService.getAllEquipmentsByUser().subscribe({
      next: equipments => this.equipments = equipments,
      error: () => this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Failed to load equipments' })

    });
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

}
