import { Component, input } from '@angular/core';
import { GalleryItem, GalleryModule } from 'ng-gallery';

@Component({
  selector: 'utilities-gallery',
  imports: [GalleryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class UtilitiesGalleryComponent {
  media = input<GalleryItem[]>([])
}
