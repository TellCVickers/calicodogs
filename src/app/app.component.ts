import { BannerComponent } from './layout/banner/banner.component';
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { NavComponent } from './layout/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { isEqual } from 'lodash-es';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent, CommonModule, NavComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  private hotDogStandCode = ['KeyH', 'KeyO', 'KeyT', 'KeyD', 'KeyO', 'KeyG', 'KeyS', 'KeyT', 'KeyA', 'KeyN', 'KeyD'];

  currentYear = new Date().getFullYear();
  keypressList: string[] = [];
  showHotDogStand = false;
  title = 'Calico Dogs';

  @HostListener('window:keyup', ['$event'])
  onKeyup(event: KeyboardEvent): void {
    const keypressListLength = this.keypressList.push(event.code);

    if (keypressListLength > this.hotDogStandCode.length) {
      this.keypressList.shift();
    }

    if (isEqual(this.keypressList, this.hotDogStandCode)) {
      this.toggleHotDogStand();
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('keyup', this.onKeyup);
  }

  toggleHotDogStand(): void {
    this.showHotDogStand = !this.showHotDogStand;
  }
}
