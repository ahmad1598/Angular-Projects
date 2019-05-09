import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CustomersModule} from './customers/customers.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
