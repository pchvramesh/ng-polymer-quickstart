import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import {FullLayoutsComponent} from './components/layouts/full-layouts/full-layouts.component';
import {SimpleLayoutsComponent} from './components/layouts/simple-layouts/simple-layouts.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutsComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './components/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: '',
    component: SimpleLayoutsComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'login',
        loadChildren: './components/login/login.module#LoginModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
