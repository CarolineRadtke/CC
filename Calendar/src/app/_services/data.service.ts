import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../_interfaces/IEvent';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private serverUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  // GET
  public getData(): Observable<IEvent[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.get<IEvent[]>(`${this.serverUrl}/events`, httpOptions);
  }

  // PUT
  public deleteEvents(): Observable<IEvent[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        events: [],
      },
    };
    return this._http.put<IEvent[]>(`${this.serverUrl}/events`, httpOptions);
  }
}
