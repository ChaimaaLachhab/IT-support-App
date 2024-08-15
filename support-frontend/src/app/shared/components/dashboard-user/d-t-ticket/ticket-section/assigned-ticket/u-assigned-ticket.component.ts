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
import {SupportTicket} from "../../../../../../core/models/support-ticket.model";
import {TicketStatus} from "../../../../../../core/enums/ticket-status";
import {SupportTicketService} from "../../../../../../core/services/support-ticket.service";
import {UpdateTicketStatusDto} from "../../../../../../core/dtos/update-ticket-status-dto.dto";

@Component({
  selector: 'app-u-assigned-ticket',
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
  templateUrl: './u-assigned-ticket.component.html',
  styleUrls: ['./u-assigned-ticket.component.css']
})
export class UAssignedTicketComponent implements OnInit {
  @ViewChild('dt') dt!: Table;

  tickets: SupportTicket[] = [];
  statuses = Object.values(TicketStatus);
  clonedEquipment: { [s: string]: SupportTicket } = {};

  constructor(
    private supportTicketService: SupportTicketService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  onNumber() : number{
    return this.tickets.length;
  }

  loadTickets(): void {
    this.supportTicketService.getTicketsByUser().subscribe({
      next: tickets => this.tickets = tickets.filter(ticket => ticket.status === TicketStatus.ASSIGNED),
      error: () => this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Ticket load with success' })

    });
  }

  getSeverity(status: TicketStatus): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | undefined {
    switch (status) {
      case TicketStatus.RESOLVED:
        return 'success';
      case TicketStatus.IN_PROGRESS:
        return 'secondary';
      case TicketStatus.ASSIGNED:
        return 'warning';
      case TicketStatus.OPEN:
        return 'info';
      case TicketStatus.CLOSED:
        return 'danger';
      default:
        return undefined;
    }
  }
}
