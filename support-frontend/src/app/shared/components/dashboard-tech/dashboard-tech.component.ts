import {Component} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../dashboard/sidebar/sidebar.component";
import {EquipmentListComponent} from "../../../features/equipment-management/equipment-list/equipment-list.component";
import {TSidebarComponent} from "./t-sidebar/t-sidebar.component";

@Component({
  selector: 'app-dashboard-tech',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    EquipmentListComponent,
    TSidebarComponent
  ],
  templateUrl: './dashboard-tech.component.html',
  styleUrl: './dashboard-tech.component.css'
})
export class DashboardTechComponent {

  constructor(private router:Router) {}

  addTeckit(){
    this.router.navigate(['/api/support-tickets/add'])
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
