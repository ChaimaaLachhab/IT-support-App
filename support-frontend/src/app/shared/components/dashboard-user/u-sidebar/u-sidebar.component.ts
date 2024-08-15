import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-u-sidebar',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './u-sidebar.component.html',
  styleUrl: './u-sidebar.component.css'
})
export class USidebarComponent {

}
