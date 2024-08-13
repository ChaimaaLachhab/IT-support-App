import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../core/services/authentication.service";
import {Router} from "@angular/router";
import {JwtService} from "../../../core/services/jwt.service";

@Component({
  selector: 'app-header-one',
  standalone: true,
  imports: [],
  templateUrl: './header-one.component.html',
  styleUrl: './header-one.component.css'
})
export class HeaderOneComponent {
  constructor(private router: Router) {}

  login(){
    this.router.navigate(['/login'])
  }
}
