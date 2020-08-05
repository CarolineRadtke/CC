import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DayContainerComponent } from './day-container/day-container.component';
import { EventContainerComponent } from './_components/event-container/event-container.component';
import { EventComponent } from './_components/event/event.component';
import { HeaderComponent } from './_components/header/header.component';
import { ScaleComponent } from './_components/scale/scale.component';
import { layOutDayService } from './_services/lay-out-day.service';

@NgModule({
  declarations: [
    AppComponent,
    DayContainerComponent,
    EventComponent,
    HeaderComponent,
    EventContainerComponent,
    ScaleComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

window['layOutDay'] = layOutDayService;
