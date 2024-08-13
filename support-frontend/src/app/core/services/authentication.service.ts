// src/app/core/services/authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoginUserDto} from "../dtos/login-user-dto.dto";
import {LoginResponse} from "../models/login-response.model";
import {RegisterUserDto} from "../dtos/register-user-dto.dto";
import {environment} from "../../../environments/environment";
import {JwtService} from "./jwt.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private jwtService: JwtService, private router: Router) { }


  registerUser(userType: string, registerUserDto: RegisterUserDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/${userType}`, registerUserDto);
  }

  authenticate(loginUserDto: LoginUserDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginUserDto);
  }

  getCurrentUserRole(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtService.decodeToken(token);
      return decodedToken?.roles || null;
    }
    return null;
  }

  private currentUserSubject = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem('token') || 'null')
  );
  currentUser$ = this.currentUserSubject.asObservable();

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  hasRole(role: string): boolean {
    const currentUser = this.currentUserSubject.value;

    if (currentUser && currentUser.roles) {
      return currentUser.roles.some((r: any) => r.authority === role);
    }
    return false;
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
