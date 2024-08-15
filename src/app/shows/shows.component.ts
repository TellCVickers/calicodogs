import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IShow } from './shows';
import { SHOWS } from './shows.constants';

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss'
})
export class ShowsComponent {
  shows: IShow[] = SHOWS;

  ngOnInit(): void {
    this.shows.forEach((show) => {
      if (!show.imageUrl) {
        show.imageUrl = '/assets/calicoDogsLogo.jpg';
      }
    });
  }
}
