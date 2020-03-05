import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextboxComponent } from './component/textbox.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class TextboxRoutingModule { }
