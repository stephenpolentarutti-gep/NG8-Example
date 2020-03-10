import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemopageComponent } from './demopage.component';


const routes: Routes = [
    { path:'', component:DemopageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemopageRoutingModule { }
