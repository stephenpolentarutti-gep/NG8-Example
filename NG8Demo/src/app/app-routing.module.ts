import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'demopage', pathMatch: 'full' },
  {
    path: 'demopage',
    loadChildren: () => import('./demopage/demopage.module').then(m => m.DemopageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
