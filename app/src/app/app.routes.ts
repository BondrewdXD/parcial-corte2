import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cliente',
    loadComponent: () => import('./cliente/cliente.page').then( m => m.ClientePage)
  },
  {
    path: 'fecha',
    loadComponent: () => import('./fecha/fecha.page').then( m => m.FechaPage)
  },
  {
    path:'mesa',
    loadComponent: () => import('./mesa/mesa.page').then( m => m.MesaPage)
  }
];
