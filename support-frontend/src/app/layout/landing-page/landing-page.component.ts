import { Component } from '@angular/core';
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    FooterComponent,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  constructor(private router: Router) {}
}
