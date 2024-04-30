import { Component } from '@angular/core';
import { BIO_CONTENT } from './bio-content.constants';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {
  content = BIO_CONTENT;
}
