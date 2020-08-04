import { Component, OnInit } from '@angular/core';

interface IEvent {
  title: String;
  location: String;
  start: number;
  end: number;
}
@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css'],
})
export class EventContainerComponent implements OnInit {
  public dayEvents: IEvent[];

  constructor() {
    this.dayEvents = [
      {
        title: `Brunch`,
        location: `Einstein Café`,
        start: 30,
        end: 150,
      },
      {
        title: `Lunch`,
        location: `Einstein Café`,
        start: 540,
        end: 600,
      },
      {
        title: `Snack`,
        location: `Einstein Café`,
        start: 560,
        end: 620,
      },
      {
        title: `Dinner`,
        location: `Einstein Café`,
        start: 610,
        end: 670,
      },
    ];
  }

  ngOnInit(): void {}

  public detectCollision = () => {
    // wenn sich zwei überschneiden, bekommen sie diesen werd mitgegeben
    // id auch mit übergeben
  };
}
