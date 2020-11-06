import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TripApiService } from '../@services/@apis/trip-api.service';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private trips: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(@Inject(TripApiService) private tripsAPI: TripApiService) { }

  getTrips(): Observable<any> {
    return this.trips.asObservable();
  }

  private setTrips(tripsList: Array<any>): void {
    this.trips.next(tripsList);
  }

  callTrips(): void {
    this.tripsAPI.getTrips().subscribe(trips => {
      this.setTrips(trips);
    });
  }

  editTrip(obj): void {
    const oldTrips: Array<any> = this.trips.value;
    const index = oldTrips.findIndex(x => x.id === obj.id);
    if (index >= 0) {
      oldTrips[index] = obj;
    }
    this.tripsAPI.putTrip(obj).subscribe();
    this.setTrips(oldTrips);
  }

  deleteTrip(id): void {
    const oldTrips: Array<any> = this.trips.value;
    const index = oldTrips.findIndex(x => x.id === id);
    if (index >= 0) {
      oldTrips.splice(index, 1);
    }
    this.tripsAPI.deleteTrip(id).subscribe();
    this.setTrips(oldTrips);
  }

}
