import { loadRemoteModule } from '@angular-architects/module-federation';

import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/auth.guard';

import { TicketComponent } from './ticket/ticket.component';
import { UserComponent } from './user/user.component';
import { BodyComponent } from './body/body.component';
import { DashboardMenuComponent } from './dashboardmenu/dashboardmenu.component';
import { WidgetComponent } from './widget/widget.component';


const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // canActivateChild: [AuthGuard],
    children:[
      {
        path: 'dashboard',
        // canActivate: [AuthGuard],
        loadChildren: () =>
             loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                exposedModule: './Module'
            })
            .then(m => m.DashboardModule)
    },
    {
      path:'widget',
      component: WidgetComponent
    },
   
    //   {
    //   path:'ticket',
    //   component:TicketComponent,
      
    // },
    {
      path: 'dashboardmenu',
      component: DashboardMenuComponent,
    },
    {
      path: 'ticket',
      component: TicketComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
   ]
  },
{
  path:'',
  component:LoginComponent,
  pathMatch:'full' 
},

{
  path:'user',
  component:UserComponent,
 // canActivateChild: [AuthGuard],
  children:[
    {
      path:'ticket',
      component:TicketComponent,
     
  }]
},
{
  path:'login',
  component:LoginComponent, 
},


  // {
  //   path: 'react',
  //   component: WebComponentWrapper,
  //   data: {
  //     type: 'script',
  //     remoteEntry:
  //       'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
  //     remoteName: 'react',
  //     exposedModule: './web-components',
  //     elementName: 'react-element',
  //   } as WebComponentWrapperOptions,
  // },

  

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
