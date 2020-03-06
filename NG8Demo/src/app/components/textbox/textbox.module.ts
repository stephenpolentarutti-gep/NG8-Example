import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxcomponentComponent } from './textboxcomponent/textboxcomponent.component';
import { TextBoxRoutingModule } from './textbox-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TextBoxRoutingModule
  ],
  exports:[]
})
export class TextboxModule { }
