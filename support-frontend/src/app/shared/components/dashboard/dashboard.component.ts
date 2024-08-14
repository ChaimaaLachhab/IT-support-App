import { Component } from '@angular/core';
import {Route, Router, RouterOutlet} from "@angular/router";
import {TicketListComponent} from "../../../features/support-ticket-management/ticket-list/ticket-list.component";
import {DHomeComponent} from "./d-home/d-home.component";
import {DViewsComponent} from "./d-views/d-views.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {DUserComponent} from "./d-user/d-user.component";
import {DEquipmentComponent} from "./d-equipment/d-equipment.component";
import {DDefectComponent} from "./d-defect/d-defect.component";


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
    DViewsComponent,
    DUserComponent,
    DEquipmentComponent,
    DEquipmentComponent,
    DDefectComponent,

  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router:Router) {}

  register(){
    this.router.navigate(['/register'])
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
