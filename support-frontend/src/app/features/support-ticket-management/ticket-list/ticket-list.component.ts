import {SupportTicket} from "../../../core/models/support-ticket.model";
import {SupportTicketService} from "../../../core/services/support-ticket.service";
import {Component, OnInit} from "@angular/core";
import {TicketStatus} from "../../../core/enums/ticket-status";
import {TableModule} from "primeng/table";
import { MessageService, SelectItem } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {CommonModule, DatePipe, NgIf} from '@angular/common';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import {ButtonDirective, ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {PaginatorModule} from "primeng/paginator";
import {ChipsModule} from "primeng/chips";
import {Ripple} from "primeng/ripple";

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  imports: [
    ToastModule,
    TableModule,
    DatePipe,
    PaginatorModule,
    ChipsModule,
    NgIf,
    ButtonDirective,
    Ripple,
    TagModule
  ],
  providers: [MessageService]
})
export class TicketListComponent implements OnInit {
  tickets: SupportTicket[] = [];

  statuses = [
    { label: 'Open', value: TicketStatus.OPEN },
    { label: 'Assigned', value: TicketStatus.ASSIGNED },
    { label: 'In Progress', value: TicketStatus.IN_PROGRESS },
    { label: 'Resolved', value: TicketStatus.RESOLVED },
    { label: 'Closed', value: TicketStatus.CLOSED }
  ];

  clonedTickets: { [s: string]: SupportTicket } = {};

  constructor(private ticketService: SupportTicketService, private messageService: MessageService) {}

  getTicketsCount(): number {
    return this.tickets.filter(ticket => ticket.status === TicketStatus.OPEN).length;
  }


  ngOnInit() {
    this.ticketService.getTicketsByUser().subscribe((data) => {
      this.tickets = data;
    });
  }

  onRowEditInit(ticket: SupportTicket) {
    this.clonedTickets[ticket.id] = { ...ticket };
  }

  onRowEditSave(ticket: SupportTicket) {
    delete this.clonedTickets[ticket.id];
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Ticket is updated' });
  }

  onRowEditCancel(ticket: SupportTicket, index: number) {
    this.tickets[index] = this.clonedTickets[ticket.id];
    delete this.clonedTickets[ticket.id];
  }

  getSeverity(status: TicketStatus): 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast' | undefined {
    switch (status) {
      case TicketStatus.OPEN:
        return 'info';
      case TicketStatus.ASSIGNED:
        return 'secondary';
      case TicketStatus.IN_PROGRESS:
        return 'warning';
      case TicketStatus.RESOLVED:
        return 'success';
      case TicketStatus.CLOSED:
        return 'danger';
      default:
        return undefined;
    }
  }

}
