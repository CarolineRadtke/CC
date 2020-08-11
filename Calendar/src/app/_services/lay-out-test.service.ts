import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class LayOutTestService {
  public servie: DataService;

  constructor(public given: string, public service: DataService) {
    this.layOutDayService(given);
    this.servie = service;

    console.log(this.service.getData());
  }

  layOutDayService = (given: string): string => {
    const ret = 'true ' + given;

    return ret;
  };
}
