import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'show', loadChildren: () => import('./lazyloading/lazyloading.module').then(m=> m.LazyloadingModule)},
  {path:'add', loadChildren: () => import('./add/add.module').then(m=> m.AddModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
