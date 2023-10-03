import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlComponent } from './form-control/form-control.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NavgComponent } from './navg/navg.component';
import { ArrayformComponent } from './arrayform/arrayform.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    ReactiveformComponent,
    NavgComponent,
    ArrayformComponent,
    FormbuilderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
