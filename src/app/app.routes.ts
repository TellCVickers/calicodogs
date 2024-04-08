import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';
import { ShowsComponent } from './shows/shows.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'bio' },
    { path: 'bio', component: BioComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'shows', component: ShowsComponent }
];
