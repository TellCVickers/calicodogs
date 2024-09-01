import { BannerComponent } from './layout/banner/banner.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from './layout/nav/nav.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent, CommonModule, NavComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  title = 'Calico Dogs';
}
