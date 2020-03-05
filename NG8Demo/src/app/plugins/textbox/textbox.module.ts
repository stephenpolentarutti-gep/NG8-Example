import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextboxRoutingModule } from './textbox-routing.module';
import { TextboxComponent } from './component/textbox.component';


@NgModule({
  declarations: [TextboxComponent],
  imports: [
    CommonModule,
    TextboxRoutingModule
  ]
})
export class TextboxModule { }
