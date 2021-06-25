import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../model/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private _eventUrl = `http://localhost:3000/api/events`;
  private _specialEvents = `http://localhost:3000/api/specials`;

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this._eventUrl);
  }

  getSpecialEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this._specialEvents);
  }
}
