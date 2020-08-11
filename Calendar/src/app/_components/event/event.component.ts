import { Component, Input, OnInit } from '@angular/core';
import { IRenderEvent } from 'src/app/_interfaces/IRenderEvent';
import { IEvent } from '../../_interfaces/IEvent';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  @Input() eventData: IEvent;
  @Input() collisons: number[];
  @Input() renderEvents: IRenderEvent;

  public duration: number;
  public position: number;
  public W: number;
  public event: IEvent;
  public mycollisions: number[];
  public leftpos: number;

  constructor() {
    this.duration = 0;
    this.position = 0;
    this.leftpos = 0;
    this.W = 300;
  }

  ngOnInit(): void {
    this.duration = this.getDuration(this.eventData);
    this.position = this.eventData.start;
    this.W = this.getWidth();
    this.leftpos = this.getLeft();
  }

  public getDuration = (event: IEvent): number => {
    const start = event.start;
    const end = event.end;
    const duration = end - start;
    return duration;
  };

  public getWidth = (): number => {
    if (this.collisons.length !== 0) {
      return 305;
    }

    return 610;
  };

  public getLeft = (): number => {
    console.log('W', this.W);
    if (this.W == 305 && this.collisons.length >1) {
      return 320;
    }
    return 10;
  };
}
