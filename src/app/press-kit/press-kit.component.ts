import { BIO_CONTENT } from '../bio/bio-content.constants';
import { Component } from '@angular/core';
import { ShowsComponent } from '../shows/shows.component';
import { BioComponent } from '../bio/bio.component';
import { ContactComponent } from '../contact/contact.component';
import { GalleryItem } from 'ng-gallery';
import { GALLERY_IMAGES } from '../common/gallery-images.contants';
import { UtilitiesGalleryComponent } from '../utilities/gallery/gallery.component';

@Component({
    selector: 'app-press-kit',
    imports: [
        BioComponent,
        ContactComponent,
        ShowsComponent,
        UtilitiesGalleryComponent
    ],
    templateUrl: './press-kit.component.html',
    styleUrl: './press-kit.component.scss'
})
export class PressKitComponent {
  bioContent = BIO_CONTENT;
  images: GalleryItem[] = GALLERY_IMAGES;
}
