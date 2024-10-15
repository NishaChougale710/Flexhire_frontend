import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <h1>My Application</h1>
      <nav>
        <a routerLink="/">Home</a> |
        <a routerLink="/about">About Us</a>
      </nav>
    </header>`,
  styles: [
    `header {
      background-color: #007bff;
      color: white;
      padding: 10px;
      text-align: center;
    }
    nav a {
      color: white;
      margin: 0, 15px;
      text-decoration: none;
    }
    nav a:hover {
      text-decoration: underline;
    }`
  ]
})  
export class HeaderComponent {}
