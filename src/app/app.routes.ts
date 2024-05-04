import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'cover-page',
    loadComponent: () => import('./cover-page/cover-page.page').then( m => m.CoverPagePage)
  },
];
