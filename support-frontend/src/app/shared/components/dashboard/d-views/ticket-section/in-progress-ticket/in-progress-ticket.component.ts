import { Component } from '@angular/core';
import {
    TicketListComponent
} from "../../../../../../features/support-ticket-management/ticket-list/ticket-list.component";

@Component({
  selector: 'app-in-progress-ticket',
  standalone: true,
    imports: [
        TicketListComponent
    ],
  templateUrl: './in-progress-ticket.component.html',
  styleUrl: './in-progress-ticket.component.css'
})
export class InProgressTicketComponent {

}
