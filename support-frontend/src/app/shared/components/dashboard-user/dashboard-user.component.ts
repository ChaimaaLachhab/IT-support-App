import { Component } from '@angular/core';
import {EquipmentListComponent} from "../../../features/equipment-management/equipment-list/equipment-list.component";
import {Router, RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../dashboard/sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard-user',
  standalone: true,
    imports: [
        EquipmentListComponent,
        RouterOutlet,
        SidebarComponent
    ],
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.css'
})
export class DashboardUserComponent {

  constructor(private router:Router) {}


  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
