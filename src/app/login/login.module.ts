import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {routes} from './login.routes';
import {LoginComponent} from './login.component';
import {AppComponent} from '../app.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    HomeComponent, FormsModule],
  providers: [],
  bootstrap: []
})
export class LoginModule {
}
