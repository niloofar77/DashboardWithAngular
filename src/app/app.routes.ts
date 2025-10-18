import { Routes } from '@angular/router';
import { LoginComponent } from '../features/auth/login/component/login.component';
import { DashboardComponent } from '../features/dashboard/components/dashboard.component';
import { MainLayoutComponent } from './layouts/main/components/main';

import { RoleGuard } from './core/guards/authGuard';
import { UserComponent } from '../features/settings/components/users.component';
import { SettingsComponent } from '../features/settings2/components/settings.component';
const lang=localStorage.getItem("lang")

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: { breadcrumb: 'home' },
    canActivate: [RoleGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'dashboard' } },
      { path: 'users', component: UserComponent, data: { breadcrumb: 'users' } },
      { path: 'settings', component: SettingsComponent, data: { breadcrumb: 'settings' } }
    ]
  },
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'login' } }
];