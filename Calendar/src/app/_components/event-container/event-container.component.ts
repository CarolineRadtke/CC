import { Component, OnInit } from '@angular/core';
import { IData } from '../../_interfaces/IData';
import { IEvent } from '../../_interfaces/IEvent';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css'],
})
export class EventContainerComponent implements OnInit {
  public dayEvents: IEvent[];

  constructor(public _dataService: DataService) {
    this.dayEvents = [];
    this.loadData();
  }

  ngOnInit(): void {}

  public loadData = () => {
    this.dayEvents = [];
    this._dataService.getData().subscribe(
      (data: IData) => {
        this.dayEvents = data.events;
      },
      (error) => {
        console.error('Could not load data', `color:red`);
      }
    );
  };
}
