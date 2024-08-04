import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { CommonModule } from '@angular/common';
import { BIO_CONTENT } from '../bio/bio-content.constants';
import { Component } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ShowsComponent } from '../shows/shows.component';

@Component({
  selector: 'app-press-kit',
  standalone: true,
  imports: [
    Angular2ImageGalleryModule,
    CommonModule,
    HammerModule,
    HttpClientModule,
    ShowsComponent
  ],
  templateUrl: './press-kit.component.html',
  styleUrl: './press-kit.component.scss'
})
export class PressKitComponent {
  bioContent = BIO_CONTENT;
}
