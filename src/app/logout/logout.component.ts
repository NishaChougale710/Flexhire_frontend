import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { privateDecrypt } from 'crypto';

@Component({
  selector: 'app-logout',
  standalone: true,
  template: `
    <h2>Logout Page</h2>
    <button (click)="logout()">Logout</button>
  `,
})
export class LogoutComponent {
  constructor(private router: Router) {}

  logout() {
    //Simulate logout and redirect to login
    this.router.navigate(['/login']);
  }
}
