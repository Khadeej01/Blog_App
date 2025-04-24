import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { NavbarComponent } from './features/navbar/navbar.component';  // Import your NavbarComponent

@Component({
  selector: 'app-root',
  standalone: true,  // This makes it a standalone component
  imports: [NavbarComponent, RouterModule],  // Add RouterModule here
  template: `
    <app-navbar></app-navbar>  <!-- Add Navbar -->
    <router-outlet></router-outlet>  <!-- This is where routed components will be displayed -->
  `,
  styleUrls: ['./app.component.css'],  // Link your CSS styles if needed
})
export class AppComponent {
  // Your component logic goes here (if any)
}
