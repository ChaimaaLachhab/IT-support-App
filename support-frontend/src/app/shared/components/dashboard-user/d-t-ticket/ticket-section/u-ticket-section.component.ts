import { Component } from '@angular/core';
import {TicketListComponent} from "../../../../../features/support-ticket-management/ticket-list/ticket-list.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-u-ticket-section',
  standalone: true,
  imports: [
    TicketListComponent,
    RouterOutlet
  ],
  templateUrl: './u-ticket-section.component.html',
  styleUrl: './u-ticket-section.component.css'
})
export class UTicketSectionComponent {

}
