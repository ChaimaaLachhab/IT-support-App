import { Component } from '@angular/core';
import {
    TicketListComponent
} from "../../../../../../features/support-ticket-management/ticket-list/ticket-list.component";

@Component({
  selector: 'app-closed-ticket',
  standalone: true,
    imports: [
        TicketListComponent
    ],
  templateUrl: './closed-ticket.component.html',
  styleUrl: './closed-ticket.component.css'
})
export class ClosedTicketComponent {

}
