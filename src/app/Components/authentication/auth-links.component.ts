import { Component } from '@angular/core';

import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'auth-links',
  templateUrl: 'auth-links.component.html'
})
export class AuthLinksComponent {
  constructor(private authService: HomeComponent) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isLoggedOut(): boolean {
    return !this.authService.isLoggedIn();
  }

  logOut(): void {
    this.authService.logOut();
  }
}
