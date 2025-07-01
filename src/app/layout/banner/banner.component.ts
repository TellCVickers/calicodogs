import { BIO_BANNER, CONTACT_BANNER, MEDIA_BANNER, SHOWS_BANNER } from './banner.constants';
import { Component, OnInit } from '@angular/core';
import { IBannerData } from './banner';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-banner',
    imports: [],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
  activeBanner: IBannerData = {};

  constructor(
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setBannerData();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setBannerData();
      }
    });
  }

  setBannerData(): void {
    switch(this.location.path()) {
      case '/bio':
        this.activeBanner = BIO_BANNER;
          break;
      case '/contact':
        this.activeBanner = CONTACT_BANNER;
          break;
      case '/media':
        this.activeBanner = MEDIA_BANNER;
          break;
      case '/shows':
        this.activeBanner = SHOWS_BANNER;
          break;
    }
  }
}
