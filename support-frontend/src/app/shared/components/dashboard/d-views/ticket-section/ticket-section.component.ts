import { Component } from '@angular/core';
import {TicketListComponent} from "../../../../../features/support-ticket-management/ticket-list/ticket-list.component";

@Component({
  selector: 'app-ticket-section',
  standalone: true,
  imports: [
    TicketListComponent
  ],
  templateUrl: './ticket-section.component.html',
  styleUrl: './ticket-section.component.css'
})
export class TicketSectionComponent {

}
