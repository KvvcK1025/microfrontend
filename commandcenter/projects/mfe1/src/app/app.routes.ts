import { Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/dashboardpage/dashboardpage.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    {  path: 'dashboard',component : DashboardPageComponent,pathMatch: 'full'}
];
