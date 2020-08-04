import { Component, Input, OnInit } from '@angular/core';

interface IEvent {
  title: String;
  location: String;
  start: number;
  end: number;
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  @Input() eventData: IEvent;
  public duration: number;
  public position: number;

  constructor() {
    this.duration = 0;
    this.position = 0;
  }

  ngOnInit(): void {
    this.duration = this.getDuration(this.eventData);
    this.position = this.eventData.start;
    console.log('event duration', this.duration);
    console.log('event position', this.position);
  }

  public getDuration = (event: IEvent): number => {
    const start = event.start;
    const end = event.end;

    const duration = end - start;

    return duration;
  };
}
