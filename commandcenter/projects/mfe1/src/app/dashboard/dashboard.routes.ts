import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashboardPageComponent } from './dashboardpage/dashboardpage.component';

export const DASHBOARD_ROUTES: Routes = [
    {
      path: 'dashboardpage',
      component: DashboardPageComponent
    },
    {
      path: '',component: HomeComponent
    }
];
