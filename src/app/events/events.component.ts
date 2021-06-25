import { Component, OnInit } from '@angular/core';
import { EventModel } from '../model/event.model';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: EventModel[] = [];

  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this._eventService.getEvents().subscribe(
      (response: EventModel[]) => {
        console.log(response);
        this.events = response;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
