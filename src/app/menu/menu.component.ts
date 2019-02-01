import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private authService: AuthService) { }

  public isSignedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  public signOut(): void {
    this.authService.signOut();
  }

}

