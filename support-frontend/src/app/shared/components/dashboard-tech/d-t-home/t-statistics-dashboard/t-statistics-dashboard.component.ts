import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TicketListComponent} from "../../../../../features/support-ticket-management/ticket-list/ticket-list.component";
import {TSidebarComponent} from "../../t-sidebar/t-sidebar.component";

@Component({
  selector: 'app-t-statistics-dashboard',
  standalone: true,
  imports: [
    TSidebarComponent,
    RouterOutlet,
    TicketListComponent
  ],
  templateUrl: './t-statistics-dashboard.component.html',
  styleUrl: './t-statistics-dashboard.component.css'
})
export class TStatisticsDashboardComponent {

}
