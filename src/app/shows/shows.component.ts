import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SHOWS } from './shows.constants';

interface IShow {
  endTime?: string;
  date: Date;
  doorTime?: string;
  imageUrl?: string;
  location?: string;
  otherBands?: string;
  startTime: string;
  ticketLink?: string;
  venue: string;
}

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
