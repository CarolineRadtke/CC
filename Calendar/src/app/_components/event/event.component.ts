import { Component, Input, OnInit } from '@angular/core';
import { ICollision } from 'src/app/_interfaces/ICollision';
import { IEvent } from '../../_interfaces/IEvent';

const W = 610;
const padding = 10;

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  @Input() eventData: IEvent;
  @Input() collisons: number[];
  @Input() eventCollisions: ICollision[];

  public duration: number;
  public position: number;
  public width: number;
  public event: IEvent;
  public mycollisions: number[];
  public leftpos: number;

  constructor() {
    this.duration = 0;
    this.position = 0;
    this.leftpos = 0;
    this.width = W;
  }

  ngOnInit(): void {
    this.duration = this.getDuration(this.eventData);
    this.position = this.eventData.start;
    this.width = this.getWidth();
    this.leftpos = this.getLeft(this.eventData);
  }

  public getDuration = (event: IEvent): number => {
    const start = event.start;
    const end = event.end;
    const duration = end - start;
    return duration;
  };

  public getWidth = (): number => {
    if (this.collisons.length > 0) {
      return W / 2 - padding;
    }
    return W;
  };

  public getLeft = (event: IEvent): number => {
    for (let coll = 0; coll < this.eventCollisions.length; coll++) {
      if (event.id == this.eventCollisions[coll].eventID) {
        switch (this.eventCollisions[coll].position) {
          case 'even':
            return W / 2 + padding;
          case 'second_even':
            return padding;
          case 'before':
            return W / 2 + padding;
          case 'after_before':
            return padding;
          case 'after':
            return W / 2 + padding;
        }
      }
    }
  };
}
