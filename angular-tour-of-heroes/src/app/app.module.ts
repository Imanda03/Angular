import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { JokesComponent } from './jokes/jokes.component';
import { LoopEachForComponent } from './loop-each-for/loop-each-for.component';
import { IfElseComponent } from './if-else/if-else.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Task2Component } from './task2/task2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    JokesComponent,
    LoopEachForComponent,
    Task2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    IfElseComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
