import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { RegisterUserDto } from '../../../core/dtos/register-user-dto.dto';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    MatCard,
    MatCardContent,
    RouterLink,
    MatLabel,
    MatFormField,
    MatInput,
    MatAnchor,
    MatButton,
    MatSelect,
    MatOption
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(

    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
      const formValues = this.registerForm.value;
      const registerUserDto: RegisterUserDto = {
        userName: formValues.userName,
        email: formValues.email,
        password: formValues.password
      };

      this.authService.registerUser(formValues.userType, registerUserDto).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          // Gérer la navigation ou les messages de succès ici
        },
        error: (err) => {
          console.error('Registration failed:', err);
          // Gérer les erreurs ici
        }
      });
    }
  }
}
