import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GreetComponent } from './greet.component';

@NgModule({
  declarations: [
    GreetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GreetComponent]
})
export class GreetModule { }