import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { GALLERY_CONFIG, GalleryConfig, GalleryModule } from 'ng-gallery';
import { LIGHTBOX_CONFIG, LightboxConfig } from 'ng-gallery/lightbox';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    importProvidersFrom(GalleryModule),
    provideHttpClient(),
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    },
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false,
        exitAnimationTime: 1000
      } as LightboxConfig
    }
  ]
};
