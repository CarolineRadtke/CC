import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DayContainerComponent } from './day-container/day-container.component';
import { EventContainerComponent } from './_components/event-container/event-container.component';
import { EventComponent } from './_components/event/event.component';
import { HeaderComponent } from './_components/header/header.component';
import { ScaleComponent } from './_components/scale/scale.component';
import { TestDirDirective } from './_directives/test-dir.directive';
import { CollisionService } from './_services/collision.service';
import { DataService } from './_services/data.service';
import { layOutDayService } from './_services/lay-out-day.service';
import { LayOutTestService } from './_services/lay-out-test.service';
import { thisTest } from './_services/testit';

@NgModule({
  declarations: [
    AppComponent,
    DayContainerComponent,
    EventComponent,
    HeaderComponent,
    EventContainerComponent,
    ScaleComponent,
    TestDirDirective,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [DataService, CollisionService],
  bootstrap: [AppComponent],
})
export class AppModule {}

window['layOutDay'] = layOutDayService;
window['test'] = LayOutTestService;
window['test2'] = thisTest;
