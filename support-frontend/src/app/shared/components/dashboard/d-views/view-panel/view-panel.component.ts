import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-view-panel',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './view-panel.component.html',
  styleUrl: './view-panel.component.css'
})
export class ViewPanelComponent {

}
