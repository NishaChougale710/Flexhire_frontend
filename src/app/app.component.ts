import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header *ngIf="showHeaderFooter"></app-header>
    <router-outlet></router-outlet>
    <app-footer *ngIf="showHeaderFooter"></app-footer>
  `,
  imports: [RouterModule, HeaderComponent, FooterComponent, CommonModule],
})
export class AppComponent {
  constructor(private router: Router) {}

  get showHeaderFooter(): boolean {
    return this.router.url !== '/login' && this.router.url !== '/logout';
  }
}
