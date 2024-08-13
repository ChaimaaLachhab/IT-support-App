import { Component } from '@angular/core';
import {SidebarComponent} from "../../../sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";
import {TicketListComponent} from "../../../../../features/support-ticket-management/ticket-list/ticket-list.component";

@Component({
  selector: 'app-statistics-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet,
    TicketListComponent
  ],
  templateUrl: './statistics-dashboard.component.html',
  styleUrl: './statistics-dashboard.component.css'
})
export class StatisticsDashboardComponent {

}
