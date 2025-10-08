import { Routes } from '@angular/router';
import { LoginComponent } from '../features/auth/login/component/login.component';
import { DashboardComponent } from '../features/dashboard/components/dashboard.component';
import { MainLayoutComponent } from './layouts/main/components/main';

import { RoleGuard } from './core/guards/authGuard';
import { UserComponent } from '../features/settings/components/users.component';


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: { breadcrumb: 'خانه' },

    canActivate:[RoleGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full',    data: { breadcrumb: '' },
    }, 
      { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'داشبورد' }  },
      { path: 'users', component: UserComponent ,data: { breadcrumb: 'کاربران' },
      },
    



    ],
  },
    {component:LoginComponent,path:"login" ,data: { breadcrumb: 'ورود' }} ,
];
