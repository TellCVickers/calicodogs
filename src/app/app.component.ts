import { BannerComponent } from './layout/banner/banner.component';
import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavComponent } from './layout/nav/nav.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent, CommonModule, NavComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private location: Location) {}

  currentRoute = this.location.path();
  currentYear = new Date().getFullYear();
  title = 'Calico Dogs';

  ngOnInit(): void {
    this.location.onUrlChange((url) => {
      this.currentRoute = url.substring(1);
    });
  }
}
