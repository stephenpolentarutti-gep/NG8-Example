import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoPageRoutingModule } from './demopagecomponent-routing.module';
import { DemopagecomponentComponent } from './demopagecomponent/demopagecomponent.component';
import { TextboxModule } from '../components/textbox/textbox.module';
import { TableModule } from '../components/table/table.module';
import {TextboxcomponentComponent} from '../components/textbox/textboxcomponent/textboxcomponent.component';
import {TablecomponentComponent} from '../components/table/tablecomponent/tablecomponent.component';


@NgModule({
  declarations: [DemopagecomponentComponent,TextboxcomponentComponent,TablecomponentComponent],
  imports: [
    CommonModule,
    DemoPageRoutingModule,
    TextboxModule,
    TableModule
  ],
  entryComponents: [TextboxcomponentComponent,TablecomponentComponent]
})
export class DemoPageModule { }
