import { ApplicationConfig } from '@angular/core';
import { GalleryModule } from 'ng-gallery';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideAnimations(),
    importProvidersFrom(GalleryModule),
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy},
  ]
};
