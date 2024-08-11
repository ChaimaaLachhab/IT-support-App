import { Routes } from '@angular/router';
import {DashboardComponent} from "./shared/components/dashboard/dashboard.component";
import {LoginComponent} from "./features/authentication/login/login.component";
import {LandingPageComponent} from "./layout/landing-page/landing-page.component";
import {RegisterComponent} from "./features/authentication/register/register.component";

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default route (Landing page)
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
