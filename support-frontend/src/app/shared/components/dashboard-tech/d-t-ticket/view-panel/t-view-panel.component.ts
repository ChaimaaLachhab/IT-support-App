import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-t-view-panel',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './t-view-panel.component.html',
  styleUrl: './t-view-panel.component.css'
})
export class TViewPanelComponent {

}
