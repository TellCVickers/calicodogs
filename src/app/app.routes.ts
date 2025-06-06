import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'press-kit' },
    { path: 'epk', pathMatch: 'full', redirectTo: 'press-kit' },
    { path: 'press-kit', title: 'Press Kit', loadComponent: () => import('./press-kit/press-kit.component').then(mod => mod.PressKitComponent)}
];
