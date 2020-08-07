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

  constructor() {
    this.duration = 0;
    this.position = 0;

    this.W = 300;
  }

  ngOnInit(): void {
    this.duration = this.getDuration(this.eventData);
    this.position = this.eventData.start;
    this.W = this.getWidth();
    console.log('git', this.renderEvents);
    console.log('coll', this.collisons);
  }

  public getDuration = (event: IEvent): number => {
    const start = event.start;
    const end = event.end;
    const duration = end - start;
    return duration;
  };

  public getWidth = (): number => {
    console.log('collisions', this.collisons);

    if (this.collisons !== undefined) {
      if (this.collisons.length !== 0) {
        console.log('300');
        return 300;
      }
      console.log('600');
      return 600;
    }
    return 600;
  };
}
