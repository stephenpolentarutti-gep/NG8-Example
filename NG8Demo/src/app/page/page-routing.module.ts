import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxComponent } from '../plugins/checkbox/component/checkbox.component';
import { TableComponent } from '../plugins/table/component/table.component';
import { TextboxComponent } from '../plugins/textbox/component/textbox.component';


const routes: Routes = [
  { path : 'table', component: TableComponent },
  { path : 'textbox', component: TextboxComponent},
  { path : 'checkbox', component: CheckboxComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
