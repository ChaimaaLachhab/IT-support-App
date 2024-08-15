import { Component } from '@angular/core';
import {TicketListComponent} from "../../../../../features/support-ticket-management/ticket-list/ticket-list.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-t-ticket-section',
  standalone: true,
  imports: [
    TicketListComponent,
    RouterOutlet
  ],
  templateUrl: './t-ticket-section.component.html',
  styleUrl: './t-ticket-section.component.css'
})
export class TTicketSectionComponent {

}
