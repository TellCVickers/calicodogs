import { ApplicationConfig } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routes } from './app.routes';
import { TemplatePageTitleStrategyService } from './utilities/templatePageTitleStrategy.service';
import { TitleStrategy, provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategyService }
  ]
};
