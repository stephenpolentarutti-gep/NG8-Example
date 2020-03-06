import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',redirectTo:'demopage', pathMatch:'full'},
  {
    path: 'entrypoint',
    loadChildren: () => import('./entery-point/entery-point.module').then(m => m.EnteryPointModule)
  },
  { path: 'demopage', loadChildren: () => import('./demo-page/demopagecomponent.module').then(m => m.DemoPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
