import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { DropdownModule } from '../plugins/dropdown/dropdown.module';
import { LandingComponent } from './landing.component';
import { CheckboxModule } from '../plugins/checkbox/checkbox.module';
import { TableModule } from '../plugins/table/table.module';
import { TextboxModule } from '../plugins/textbox/textbox.module';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    DropdownModule,
    CheckboxModule,
    TableModule,
    TextboxModule,
    CommonModule,
    PageRoutingModule
  ],
  exports: [
    LandingComponent
  ]
})
export class PageModule { }
