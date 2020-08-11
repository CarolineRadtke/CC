import { Component, OnInit } from '@angular/core';
import { thisTest } from 'src/app/_services/layOutDay';
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
  public test: string;

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
      (data: IEvent[]) => {
        const dayEvents = data;
        dayEvents.map((event) => {
          this.checkCollision(event, dayEvents);
          this.sortCollisions();
          this.getShortener();
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

  public sortCollisions = () => {
    const coll = [];
    this.renderEvents.map((entry) => {
      coll.push([entry.event.id].concat(entry.collisons).sort((a, b) => a - b));
    });

    this.collisions = coll;
  };

  public getShortener = () => {
    for (let i = 0; i < this.collisions.length; i++) {
      const combo = this.collisions[i];

      if (this.collisions.includes(combo)) {
      }
      // look if collision combo is somewhere else
      // only add coll 1 time to result array
    }
  };
}
