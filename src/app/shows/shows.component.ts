import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface IShow {
  endTime?: string;
  date: Date;
  doorTime?: string;
  location?: string;
  otherBands?: string;
  startTime: string;
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
  shows: IShow[] = [{
    venue: 'Millvale Music Festival at the Double L Bar',
    date: new Date(2024, 4, 18),
    startTime: '1pm',
  }];
}
