import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from '../component/checkbox/checkbox.module';
import { DemopageComponent } from './demopage.component';
import { DropdownModule } from '../component/dropdown/dropdown.module';
import { TextboxModule } from '../component/textbox/textbox.module';
import { DemopageRoutingModule } from './demopage.routing.module';
import { CheckboxComponent } from '../component/checkbox/checkbox.component';
import { DropdownComponent } from '../component/dropdown/dropdown.component';
import { TextboxComponent } from '../component/textbox/textbox.component';
import { DemoDirective } from './demopage.directive';



@NgModule({
  declarations: [DemopageComponent, CheckboxComponent, DropdownComponent, TextboxComponent, DemoDirective],
  imports: [
    CommonModule,
    // CheckboxModule,
    // DropdownModule,
    // TextboxModule,
    DemopageRoutingModule
  ],
  entryComponents: [
    CheckboxComponent,
    DropdownComponent,
    TextboxComponent
  ]
})
export class DemopageModule { }
