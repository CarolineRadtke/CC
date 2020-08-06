import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IData } from '../_interfaces/IData';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private serverUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) {
    console.log('your entries: ');
  }

  // GET
  public getData(): Observable<IData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.get<IData>(`${this.serverUrl}/data`, httpOptions);
  }

  // PUT
  public deleteEvents(): Observable<IData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        events: [],
      },
    };
    return this._http.put<IData>(`${this.serverUrl}/data`, httpOptions);
  }
}
