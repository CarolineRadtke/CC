import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayOutTestService {
  constructor(public given: string) {
    this.layOutDayService(given);
  }

  layOutDayService = (given: string): string => {
    const ret = 'true ' + given;
  
    return ret;
  };
}
