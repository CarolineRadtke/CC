import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DayContainerComponent } from './day-container/day-container.component';
import { EventComponent } from './_components/event/event.component';
import { HeaderComponent } from './_components/header/header.component';
import { EventContainerComponent } from './_components/event-container/event-container.component';
import { ScaleComponent } from './_components/scale/scale.component';

@NgModule({
  declarations: [
    AppComponent,
    DayContainerComponent,
    EventComponent,
    HeaderComponent,
    EventContainerComponent,
    ScaleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
