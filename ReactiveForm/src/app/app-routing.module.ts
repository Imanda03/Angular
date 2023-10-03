import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavgComponent } from './navg/navg.component';

const routes: Routes = [{ path: 'test', component: NavgComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
