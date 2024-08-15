import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-u-view-panel',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './u-view-panel.component.html',
  styleUrl: './u-view-panel.component.css'
})
export class UViewPanelComponent {

}
