import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DDLRoutingModule } from './ddl-routing.module';
import { DdlcomponentComponent } from './ddlcomponent/ddlcomponent.component';


@NgModule({
  declarations: [DdlcomponentComponent],
  imports: [
    CommonModule,
    DDLRoutingModule
  ]
})
export class DDLModule { }
