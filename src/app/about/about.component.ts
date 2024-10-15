import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about-section">
      <h2>About Us</h2>
      <p>We are a team of a enthusiastic developers working together on exciting projects.</p>
    </section>
  `,
  styles: [
      `.about-section {
          padding: 20px;
          text-align: center;
          background-color: #f5f5f5;
          border-radius: 8px;
      }
      h2 {
            color: #007bff;
            margin-bottom: 20px;
      }
      p {
          color: #666;
          font-size: 18px;
      }`
  ]
})
export class AboutComponent {}
