import { Component, OnInit } from '@angular/core';
import { ICollision } from '../../_interfaces/ICollision';
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
  public eventCollisions: ICollision[];

  constructor(public _dataService: DataService) {
    this.dayEvents = [];
    this.renderEvents = [];
    this.collisions = [];
    this.eventCollisions = [];
  }

  ngOnInit(): void {
    this.registerCollisions();
  }

  public registerCollisions = () => {
    this._dataService.getData().subscribe(
      (data: IEvent[]) => {
        const dayEvents = data;
        dayEvents.map((event) => {
          this.checkCollision(event, dayEvents);
        });
        this.positionCollision(dayEvents);
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

  public positionCollision = (dayEvents: IEvent[]) => {
    let comparearray = dayEvents;

    for (let shift = 0; shift < dayEvents.length; shift++) {
      let event = dayEvents[shift];

      for (let compare = 0; compare < comparearray.length; compare++) {
        if (
          event.end > comparearray[compare].start &&
          event.start < comparearray[compare].start
        ) {
          this.eventCollisions.push({
            eventID: event.id,
            position: 'before',
            collisionWith: comparearray[compare].id,
          });
          this.eventCollisions.push({
            eventID: comparearray[compare].id,
            position: 'after_before',
            collisionWith: event.id,
          });
        } else if (
          event.start == comparearray[compare].start &&
          event.id !== comparearray[compare].id
        ) {
          this.eventCollisions.push({
            eventID: event.id,
            position: 'even',
            collisionWith: comparearray[compare].id,
          });
          this.eventCollisions.push({
            eventID: comparearray[compare].id,
            position: 'second_even',
            collisionWith: event.id,
          });
        } else if (
          comparearray[compare].end > event.start &&
          comparearray[compare].start < event.start
        ) {
          this.eventCollisions.push({
            eventID: event.id,
            position: 'after',
            collisionWith: comparearray[compare].id,
          });
        }
      }
      comparearray.shift();
    }
  };
}
