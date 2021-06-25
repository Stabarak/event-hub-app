import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventModel } from '../model/event.model';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss'],
})
export class SpecialEventsComponent implements OnInit {
  specialEvents: EventModel[] = [];

  constructor(private _eventService: EventService, private _router: Router) {}

  ngOnInit(): void {
    this._eventService.getSpecialEvents().subscribe(
      (response: EventModel[]) => {
        console.log(response);
        this.specialEvents = response;
      },
      (error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }
}
