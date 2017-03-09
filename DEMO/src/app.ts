import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule,routingComponents } from './routing.component';

import { ProductsComponent } from './products/products.component';
import { DescriptionComponent } from './description/description.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    routing
  ],
  providers: [ProductsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
