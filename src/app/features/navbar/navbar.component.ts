import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { AuthService } from '../../core/services/auth.service'; // Import AuthService

@Component({
  selector: 'app-navbar',
  standalone: true, // This makes the component standalone
  imports: [CommonModule, RouterModule], // Import CommonModule and RouterModule
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false;
  isAuthenticated = false;

  constructor(private authService: AuthService) {
    this.authService.authStatus.subscribe(status => {
      this.isAuthenticated = status;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
  }
}
