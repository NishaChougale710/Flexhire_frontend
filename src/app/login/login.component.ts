import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h2>Login Page</h2>
    <button (click)="login()"></button>
    `,
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    //Simulate login and redirect to home
    this.router.navigate(['/']);
  }
}
