import { BIO_CONTENT } from '../bio/bio-content.constants';
import { Component } from '@angular/core';
import { ShowsComponent } from '../shows/shows.component';
import { BioComponent } from '../bio/bio.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
    selector: 'app-press-kit',
    imports: [
    BioComponent,
    ContactComponent,
    ShowsComponent
],
    templateUrl: './press-kit.component.html',
    styleUrl: './press-kit.component.scss'
})
export class PressKitComponent {
  bioContent = BIO_CONTENT;
}
