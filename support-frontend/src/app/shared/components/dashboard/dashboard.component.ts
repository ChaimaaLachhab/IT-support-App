import { Component } from '@angular/core';
import {Route, RouterOutlet} from "@angular/router";
import {TicketListComponent} from "../../../features/support-ticket-management/ticket-list/ticket-list.component";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {DHomeComponent} from "./d-home/d-home.component";
import {DViewsComponent} from "./d-views/d-views.component";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    TicketListComponent,
    TicketListComponent,
    SidebarComponent,
    DHomeComponent,
    DViewsComponent
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
