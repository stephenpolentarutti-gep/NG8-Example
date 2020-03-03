import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxcomponentComponent } from './checkboxcomponent/checkboxcomponent.component';


@NgModule({
  declarations: [CheckboxcomponentComponent],
  imports: [
    CommonModule,
    CheckboxRoutingModule
  ]
})
export class CheckboxModule { }
