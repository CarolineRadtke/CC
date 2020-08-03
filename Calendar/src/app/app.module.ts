import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DayContainerComponent } from './day-container/day-container.component';
import { EventComponent } from './_components/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    DayContainerComponent,
    EventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
