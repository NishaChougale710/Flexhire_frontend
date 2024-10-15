import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<footer><p>Footer © 2024</p></footer>`,
  styles: [
    `footer {
      background-color: #333;
      color: white;
      padding: 10px;
      text-align: center;
    }`
  ]
})
export class FooterComponent {}
