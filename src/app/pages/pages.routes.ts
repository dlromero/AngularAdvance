import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuarg } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';

const pageRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuarg],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { titulo: 'Progress' }
      },
      {
        path: 'graficas1',
        component: Graficas1Component,
        data: { titulo: 'Gráficas' }
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { titulo: 'Ajustes del tema' }
      },
      {
        path: 'promesas',
        component: PromesasComponent,
        data: { titulo: 'Promesas' }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { titulo: 'Perfil de usuario' }
      },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJS' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pageRoutes);
