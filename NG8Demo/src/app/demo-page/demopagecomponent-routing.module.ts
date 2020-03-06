import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemopagecomponentComponent } from './demopagecomponent/demopagecomponent.component';

const routes: Routes = [{ path: '', component: DemopagecomponentComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class DemoPageRoutingModule { }
