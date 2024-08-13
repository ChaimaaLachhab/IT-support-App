import {Component, ViewChild} from '@angular/core';
import {Table, TableModule} from "primeng/table";
import {ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";
import {Equipment} from "../../../core/models/equipment.model";
import {EquipmentService} from "../../../core/services/equipment.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {SupportTicket} from "../../../core/models/support-ticket.model";
import {SupportTicketService} from "../../../core/services/support-ticket.service";

@Component({
  selector: 'app-ticket-list-search',
  standalone: true,
  imports: [
    TableModule,
    ButtonDirective,
    Ripple,
    ConfirmDialogModule,
    ToastModule
  ],
  templateUrl: './ticket-list-search.component.html',
  styleUrl: './ticket-list-search.component.css'
})
export class TicketListSearchComponent {
  @ViewChild('dt') dt!: Table;

  tickets: SupportTicket[] = [];

  constructor(
    private ticketService: SupportTicketService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEquipments();
  }

  loadEquipments(): void {
    this.ticketService.getTicketsByUser().subscribe({
      next: tickets => this.tickets = tickets,
      error: () => this.showError('Failed to load equipments')
    });
  }

  navigateToCreate(): void {
    this.router.navigate(['/equipment/new']);
  }

  editEquipment(equipment: Equipment): void {
    this.router.navigate(['/equipment/edit', equipment.id]);
  }
  
  private showSuccess(message: string): void {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  private showError(message: string): void {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }
}
