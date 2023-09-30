import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdddetailsComponent
  ],
  imports: [
    CommonModule,
    AddRoutingModule,
    FormsModule
  ]
})
export class AddModule { }
