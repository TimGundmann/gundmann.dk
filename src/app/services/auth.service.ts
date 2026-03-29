import { environment } from './../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authTokenName = environment.authTokenName;

  constructor(private jwtService: JwtHelperService) { }

  public isAuthenticated(): boolean {
    if (this.getToken()) {
      return !this.jwtService.isTokenExpired(this.getToken());
    }
    return false;
  }

  public getToken(): string | null {
    return localStorage.getItem(this.authTokenName);
  }

  public setToken(token: string | null): void {
    if (!token) {
      return;
    }
    localStorage.setItem(this.authTokenName, token);
  }

  public signOut(): void {
    localStorage.removeItem(this.authTokenName);
  }

}
