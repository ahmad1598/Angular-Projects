import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import {FilterTextboxComponent} from './customers-list/filter-textbox.component';
import { CustomersRoutingModule } from './customers.routing.module';
@NgModule({
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  imports: [CommonModule,SharedModule,FormsModule, CustomersRoutingModule],
  exports:[CustomersComponent]
})
export class CustomersModule { }


//CommonModule has directive includes ngFor, ngIf, ngClass
//SharedModule has CapitilizePipe