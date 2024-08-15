import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-t-sidebar',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './t-sidebar.component.html',
  styleUrl: './t-sidebar.component.css'
})
export class TSidebarComponent {

}
