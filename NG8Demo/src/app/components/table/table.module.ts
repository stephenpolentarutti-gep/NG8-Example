import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablecomponentComponent } from './tablecomponent/tablecomponent.component';
import { TableRoutingModule } from './table-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableRoutingModule
  ],
  exports:[]
})
export class TableModule { }
