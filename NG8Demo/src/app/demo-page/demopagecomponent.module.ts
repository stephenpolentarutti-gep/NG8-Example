import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoPageRoutingModule } from './demopagecomponent-routing.module';
import { DemopagecomponentComponent } from './demopagecomponent/demopagecomponent.component';


@NgModule({
  declarations: [DemopagecomponentComponent],
  imports: [
    CommonModule,
    DemoPageRoutingModule
  ]
})
export class DemoPageModule { }
