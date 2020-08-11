import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
interface ICollision {
  collisions: number[];
}

@Injectable({
  providedIn: 'root',
})
export class CollisionService {
  public globalCollision: Subject<ICollision[]> = new Subject<ICollision[]>();

  constructor() {}

  public addToCollision = (event: number, data: number) => {
    // this.globalCollision = [
    //   ..this.globalCollision,
    //   {collisions: [event, data]  }
    // ]
  };

  public getCollision = () => {
    return this.globalCollision.next();
  };
}
// https://dev.to/avatsaev/simple-state-management-in-angular-with-only-services-and-rxjs-41p8
// https://stackoverflow.com/questions/50067218/where-to-store-global-data-in-angular
