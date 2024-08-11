import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  decodeToken(token: string): any {
    return jwtDecode(token);

  }

  getUsernameFromToken(token: string) {
    const decodedToken = this.decodeToken(token);
    return decodedToken?.sub || null;
  }

  getUserRole(token: string) {
    const decodedToken = this.decodeToken(token);
    return decodedToken?.role ;
  }
}
