import { Component } from '@angular/core';
import {
    TicketListComponent
} from "../../../../../../features/support-ticket-management/ticket-list/ticket-list.component";

@Component({
  selector: 'app-assigned-ticket',
  standalone: true,
    imports: [
        TicketListComponent
    ],
  templateUrl: './assigned-ticket.component.html',
  styleUrl: './assigned-ticket.component.css'
})
export class AssignedTicketComponent {

}
