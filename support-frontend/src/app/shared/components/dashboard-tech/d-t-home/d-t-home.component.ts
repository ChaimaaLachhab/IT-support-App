import { Component } from '@angular/core';
import {NotificationPanelComponent} from "../../dashboard/d-home/notification-panel/notification-panel.component";
import {StatisticsDashboardComponent} from "../../dashboard/d-home/statistics-dashboard/statistics-dashboard.component";

@Component({
  selector: 'app-d-t-home',
  standalone: true,
    imports: [
        NotificationPanelComponent,
        StatisticsDashboardComponent
    ],
  templateUrl: './d-t-home.component.html',
  styleUrl: './d-t-home.component.css'
})
export class DTHomeComponent {

}
