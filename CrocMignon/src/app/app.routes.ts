import { Routes } from '@angular/router';
import { ContactComponent } from '../Contact/contact/contact.component';
import { PresentationComponent } from '../Presentation/presentation/presentation.component';

export const routes: Routes = [
    { path: 'presentation', loadComponent: () => import('../Presentation/presentation/presentation.component').then(m => m.PresentationComponent) },
    { path: 'contact', loadComponent: () => import('../Contact/contact/contact.component').then(m => m.ContactComponent) },
    { path: '**', redirectTo: '' }
];
