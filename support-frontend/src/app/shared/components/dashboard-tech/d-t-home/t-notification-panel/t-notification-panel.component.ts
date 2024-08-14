import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-t-notification-panel',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './t-notification-panel.component.html',
  styleUrl: './t-notification-panel.component.css'
})
export class TNotificationPanelComponent {

}
