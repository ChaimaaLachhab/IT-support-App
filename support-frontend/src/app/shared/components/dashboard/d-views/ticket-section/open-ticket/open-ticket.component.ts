import { Component } from '@angular/core';
import {
    TicketListComponent
} from "../../../../../../features/support-ticket-management/ticket-list/ticket-list.component";

@Component({
  selector: 'app-open-ticket',
  standalone: true,
    imports: [
        TicketListComponent
    ],
  templateUrl: './open-ticket.component.html',
  styleUrl: './open-ticket.component.css'
})
export class OpenTicketComponent {

}
