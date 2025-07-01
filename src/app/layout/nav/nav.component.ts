import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, Input, OnDestroy, DOCUMENT } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ActivatedRoute, RouterModule } from '@angular/router';
import { isEqual } from 'lodash-es';

interface INavLink {
  linkId: string;
  linkText: string;
};

@Component({
    selector: 'app-nav',
    imports: [CommonModule, RouterModule],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent implements OnDestroy {
  private konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  currentRoute: string | null = '';
  keypressList: string[] = [];
  navLinks: INavLink[] = [
    { linkId: 'home', linkText: 'Home' },
    { linkId: 'music', linkText: 'Music' },
    { linkId: 'bio', linkText: 'Bio' },
    { linkId: 'shows', linkText: 'Shows' },
    { linkId: 'media', linkText: 'Media' },
    { linkId: 'contact', linkText: 'Contact' },
  ];
  showCheatCodePupper = false;

  @Input() showHotDogStand = false;

  @HostListener('window:keyup', ['$event'])
  onKeyup(event: KeyboardEvent): void {
    const keypressListLength = this.keypressList.push(event.code);

    if (keypressListLength > this.konamiCode.length) {
      this.keypressList.shift();
    }

    if (!this.showCheatCodePupper && isEqual(this.keypressList, this.konamiCode)) {
      this.activateKonamiCode();
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute
  ) {
    this.route.fragment
      .pipe(
        takeUntilDestroyed()
      ).subscribe(fragment => { 
        // TODO | doesn't work on initial page load w/o setTimeout because document.querySelector is null. Maybe because elements aren't fully rendered yet? idk
        setTimeout(() => {
          if (fragment) {
            this.currentRoute = fragment;

            this.document.querySelector(`#${fragment}`)!.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
  }

  ngOnDestroy(): void {
    window.removeEventListener('keyup', this.onKeyup);
  }

  activateKonamiCode(): void {
    this.showCheatCodePupper = true;

    new Audio('assets/levelup.mp3').play();
  }

  navigate(): void {
    document.querySelector('#navbarSupportedContent')?.classList.remove('show');
  }
}
