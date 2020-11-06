import { Component, Inject, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TripsService } from 'src/app/@facades/trips.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  viewDate = new Date();
  view: CalendarView = CalendarView.Month;

  events$: Observable<CalendarEvent[]>;

  constructor(@Inject(TripsService) private tripService: TripsService) { }

  ngOnInit(): void {
    this.events$ = this.tripService.getTrips().pipe(
      map(x => {
        const y: CalendarEvent[] = [];
        x.forEach(trip => {

          const obj: CalendarEvent = {
            title: trip.destination,
            color: {
              primary: trip.color,
              secondary: trip.color
            },
            start: new Date(trip.start),
          };
          y.push(obj);
        });
        return y;
      }),
      tap(x => {
        if (x.length > 0) {
          this.viewDate = x[0].start;
        }
      })
    );
  }

}
