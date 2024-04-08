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
    venue: 'The Rose Bowl',
    otherBands: 'with Outside Eliza, No Jane, and Worse!',
    date: new Date(2024, 3, 12),
    doorTime: '6:15pm',
    startTime: '7pm',
  }];
}
