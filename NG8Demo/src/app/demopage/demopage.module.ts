import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from '../component/checkbox/checkbox.module';
import { DemopageComponent } from './demopage.component';
import { DropdownModule } from '../component/dropdown/dropdown.module';
import { TextboxModule } from '../component/textbox/textbox.module';
import { DemopageRoutingModule } from './demopage.routing.module';



@NgModule({
  declarations: [DemopageComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    DropdownModule,
    TextboxModule,
    DemopageRoutingModule
  ]
})
export class DemopageModule { }
