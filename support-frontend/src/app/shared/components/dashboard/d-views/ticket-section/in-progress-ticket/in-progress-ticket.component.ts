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
  selector: 'app-in-progress-ticket',
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
  templateUrl: './in-progress-ticket.component.html',
  styleUrls: ['./in-progress-ticket.component.css']
})
export class InProgressTicketComponent implements OnInit {
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
    this.supportTicketService.getAllTickets().subscribe({
      next: tickets => this.tickets = tickets.filter(ticket => ticket.status === TicketStatus.IN_PROGRESS),
      error: () => this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Tickets load with success' })

    });
  }

  onRowEditInit(ticket: SupportTicket) {
    this.clonedEquipment[ticket.id] = { ...ticket };
  }

  onRowEditSave(ticket: SupportTicket) {
    if (ticket.id > 0) {
      const dto: UpdateTicketStatusDto = {
        id: ticket.id,
        status: ticket.status
      };

      this.supportTicketService.updateTicketStatus(dto).subscribe({
        next: (updatedEquipment) => {
          this.tickets[this.tickets.findIndex(e => e.id === ticket
            .id)] = updatedEquipment;
          delete this.clonedEquipment[ticket.id];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Ticket is updated' });
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update ticket' });
          this.onRowEditCancel(ticket, this.tickets.findIndex(e => e.id === ticket.id));
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Equipment' });
    }
  }

  onRowEditCancel(ticket: SupportTicket, index: number) {
    this.tickets[index] = this.clonedEquipment[ticket.id];
    delete this.clonedEquipment[ticket.id];
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
