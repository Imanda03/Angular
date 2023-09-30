import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddetailsComponent } from './adddetails/adddetails.component';

const routes: Routes = [
  {path:'addDetails', component:AdddetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
