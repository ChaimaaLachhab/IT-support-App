import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { Router } from '@angular/router';
import { LoginUserDto } from '../../../core/dtos/login-user-dto.dto';
import {jwtDecode} from "jwt-decode";
import {JwtService} from "../../../core/services/jwt.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private jwtService : JwtService
  ) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;
      const loginUser: LoginUserDto = {
        userName: formValues.userName,
        password: formValues.password
      };

      this.authService.authenticate(loginUser).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          localStorage.setItem('token', response.token);
          console.log('Token expires in:', response.expiresIn);

          const token = this.jwtService.decodeToken(response.token);
          const role = this.jwtService.getUserRole(token);

          if (role === 'ADMIN') {
            this.router.navigate(['/dashboard']);
          } else if (role === 'TECH') {
            this.router.navigate(['/home']);
          } else if (role === 'USER') {
            this.router.navigate(['/home']);
          } else {
            console.error('Unknown role:', role);
          }
        },
        error: (err) => {
          console.error('Login failed:', err);
        },
        complete: () => {
          console.log('Login process complete.');
        }
      });
    }
  }
}
