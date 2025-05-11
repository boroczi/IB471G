import {Routes} from '@angular/router';
import { adminGuard, authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent),
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
    pathMatch: 'full',
    canActivate: [adminGuard]
  },
  {
    path: 'checkout',
    loadComponent: () => import('./checkout/checkout.component').then(m => m.CheckoutComponent),
    pathMatch: 'full',
    canActivate: [authGuard]
  },
  {
    path: 'events',
    loadComponent: () => import('./events/events.component').then(m => m.EventsComponent),
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent),
    pathMatch: 'full',
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  },
];
