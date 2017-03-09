
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServicesComponent} from './services.component';
import {DescriptionComponent} from './description.component';
import {AppComponent} from './app.component';

const routes=[
  {path:'',pathMatch='full',redirectTo:'AppComponent'},
  {path:'products',component:'ServicesComponent'},
  {path:'description',component:'DescriptionComponent'}];

  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports;[RouterModlule]
  })
  export class RoutingModule{}

  export const routingComponents=[ServicesComponent,DescriptionComponent]
