import { Component } from '@angular/core';
import {TicketListComponent} from "../../../../../features/support-ticket-management/ticket-list/ticket-list.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-ticket-section',
  standalone: true,
  imports: [
    TicketListComponent,
    RouterOutlet
  ],
  templateUrl: './ticket-section.component.html',
  styleUrl: './ticket-section.component.css'
})
export class TicketSectionComponent {

}
