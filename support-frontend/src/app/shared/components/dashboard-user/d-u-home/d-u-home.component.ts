import { Component } from '@angular/core';
import {UStatisticsDashboardComponent} from "./u-statistics-dashboard/u-statistics-dashboard.component";
import {NotificationPanelComponent} from "../../dashboard/d-home/notification-panel/notification-panel.component";
import {StatisticsDashboardComponent} from "../../dashboard/d-home/statistics-dashboard/statistics-dashboard.component";

@Component({
  selector: 'app-d-u-home',
  standalone: true,
  imports: [
    NotificationPanelComponent,
    UStatisticsDashboardComponent,
    NotificationPanelComponent,
    StatisticsDashboardComponent
  ],
  templateUrl: './d-u-home.component.html',
  styleUrl: './d-u-home.component.css'
})
export class DUHomeComponent {

}
