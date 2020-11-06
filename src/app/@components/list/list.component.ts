import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TripsService } from 'src/app/@facades/trips.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  $trips: Observable<any>;

  constructor(@Inject(TripsService) private tripsFacade: TripsService) { }

  ngOnInit(): void {
    this.tripsFacade.callTrips();
    this.$trips = this.tripsFacade.getTrips();
  }

}
