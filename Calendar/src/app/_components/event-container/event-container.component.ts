import { Component, OnInit } from '@angular/core';
import { IData } from '../../_interfaces/IData';
import { IEvent } from '../../_interfaces/IEvent';
import { IRenderEvent } from '../../_interfaces/IRenderEvent';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css'],
})
export class EventContainerComponent implements OnInit {
  public dayEvents: IEvent[];
  public renderEvents: IRenderEvent[];
  public collisions: number[];

  constructor(public _dataService: DataService) {
    this.dayEvents = [];
    this.renderEvents = [];
    this.collisions = [];
  }

  ngOnInit(): void {

    this.registerCollisions();
  }



  public registerCollisions = () => {
    this._dataService.getData().subscribe(
      (data: IData) => {
        const dayEvents = data.events;
        dayEvents.map((event) => {
          this.checkCollision(event, dayEvents);
        });
    
        console.log('register', this.renderEvents);
      },
      (error) => {
        console.error('Could not load data', error);
      }
    );


  };

  public checkCollision = (event: IEvent, dayEvents: IEvent[]) => {
    const eventCollisions = [];

    for (let i = 0; i < dayEvents.length; i++) {
      if (event.end > dayEvents[i].start && event.start < dayEvents[i].start) {
        eventCollisions.push(dayEvents[i].id);
      }
      if (event.start == dayEvents[i].start && event.id !== dayEvents[i].id) {
        eventCollisions.push(dayEvents[i].id);

      }
      if (dayEvents[i].end > event.start && dayEvents[i].start < event.start) {
        eventCollisions.push(dayEvents[i].id);

      }
    }
    this.renderEvents.push({
      event: event,
      collisons: eventCollisions,
    });

  };
}
