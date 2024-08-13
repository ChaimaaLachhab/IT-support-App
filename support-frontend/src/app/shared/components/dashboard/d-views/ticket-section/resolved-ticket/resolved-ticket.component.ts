import { Component } from '@angular/core';
import {
    TicketListComponent
} from "../../../../../../features/support-ticket-management/ticket-list/ticket-list.component";

@Component({
  selector: 'app-resolved-ticket',
  standalone: true,
    imports: [
        TicketListComponent
    ],
  templateUrl: './resolved-ticket.component.html',
  styleUrl: './resolved-ticket.component.css'
})
export class ResolvedTicketComponent {

}
