import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './component/dropdown.component';
import { DropdownService } from './dropdown.service';


@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    DropdownRoutingModule
  ],
  providers: [
    DropdownService
  ],
  exports: [
    DropdownComponent
  ]
})
export class DropdownModule { }
