import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'press-kit' },
    { path: 'epk', pathMatch: 'full', redirectTo: 'press-kit' },
    { path: 'bio', title: 'Bio', loadComponent: () => import('./bio/bio.component').then(mod => mod.BioComponent) },
    { path: 'contact', title: 'Contact', loadComponent: () => import('./contact/contact.component').then(mod => mod.ContactComponent) },
    { path: 'shows', title: 'Shows', loadComponent: () => import('./shows/shows.component').then(mod => mod.ShowsComponent) },
    { path: 'press-kit', title: 'Press Kit', loadComponent: () => import('./press-kit/press-kit.component').then(mod => mod.PressKitComponent)}
];
