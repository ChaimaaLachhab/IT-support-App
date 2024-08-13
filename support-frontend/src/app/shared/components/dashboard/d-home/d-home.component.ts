import { Component } from '@angular/core';
import {NotificationPanelComponent} from "./notification-panel/notification-panel.component";
import {StatisticsDashboardComponent} from "./statistics-dashboard/statistics-dashboard.component";

@Component({
  selector: 'app-d-home',
  standalone: true,
  imports: [
    NotificationPanelComponent,
    StatisticsDashboardComponent
  ],
  templateUrl: './d-home.component.html',
  styleUrl: './d-home.component.css'
})
export class DHomeComponent {

}
