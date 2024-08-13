import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";

export const authGuard: CanActivateFn = (_route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  router.navigate([''], { queryParams: { returnUrl: state.url } });
  return false;
};
