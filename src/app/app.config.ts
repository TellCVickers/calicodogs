import { ApplicationConfig } from '@angular/core';
// import { GalleryModule } from 'ng-gallery';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    // importProvidersFrom(GalleryModule),
    provideHttpClient(),
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy},
  ]
};
