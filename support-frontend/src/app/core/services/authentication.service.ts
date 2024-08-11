// src/app/core/services/authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginUserDto} from "../dtos/login-user-dto.dto";
import {LoginResponse} from "../models/login-response.model";
import {RegisterUserDto} from "../dtos/register-user-dto.dto";
import {environment} from "../../../environments/environment";
import {JwtService} from "./jwt.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private jwtService: JwtService) { }


  registerUser(userType: string, registerUserDto: RegisterUserDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/${userType}`, registerUserDto);
  }

  authenticate(loginUserDto: LoginUserDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginUserDto);
  }

  getCurrentUserRole(): string | null {
    const token = localStorage.getItem('jwt');
    if (token) {
      const decodedToken = this.jwtService.decodeToken(token);
      return decodedToken?.roles || null; // Use 'roles' directly
    }
    return null;
  }
}
