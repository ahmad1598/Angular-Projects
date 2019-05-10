import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CoreModule} from './core/core.module'
import {CustomersModule} from './customers/customers.module'
import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
