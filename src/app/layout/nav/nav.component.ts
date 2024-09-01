import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ActivatedRoute, RouterModule } from '@angular/router';

interface INavLink {
  linkId: string;
  linkText: string;
};

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  currentRoute: string | null = '';
  navLinks: INavLink[] = [
    { linkId: 'home', linkText: 'Home' },
    { linkId: 'music', linkText: 'Music' },
    { linkId: 'bio', linkText: 'Bio' },
    { linkId: 'shows', linkText: 'Shows' },
    { linkId: 'media', linkText: 'Media' },
    { linkId: 'contact', linkText: 'Contact' },
  ];

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.fragment
      .pipe(
        takeUntilDestroyed()
      ).subscribe(fragment => { 
        // TODO | doesn't work on initial page load w/o setTimeout because document.querySelector is null. Maybe because elements aren't fully rendered yet? idk i h8 javascript
        setTimeout(() => {
          if (fragment && document.querySelector(`#${fragment}`)) {
            this.currentRoute = fragment;

            document.querySelector(`#${fragment}`)!.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
  }

  navigate(): void {
    document.querySelector('#navbarSupportedContent')?.classList.remove('show');
  }
}
