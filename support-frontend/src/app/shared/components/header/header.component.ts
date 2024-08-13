import { Component } from '@angular/core';
import {CreateButtonComponent} from "./create-button/create-button.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CreateButtonComponent,
    UserProfileComponent,
    RouterOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}
