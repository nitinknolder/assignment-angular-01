import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {routes} from './login/login.routes';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {YoutubeComponent} from './youtube/youtube.component';

export const route: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent,
  children: [{
    path: 'home',
    component: HomeComponent
  }, {
    path: 'youtube/:id',
    component: YoutubeComponent
  }]
}];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
