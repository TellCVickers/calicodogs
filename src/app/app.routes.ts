import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';
import { ShowsComponent } from './shows/shows.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'bio' },
    { path: 'bio', title: 'Bio', component: BioComponent },
    { path: 'contact', title: 'Contact', component: ContactComponent },
    { path: 'shows', title: 'Shows', component: ShowsComponent }
];
