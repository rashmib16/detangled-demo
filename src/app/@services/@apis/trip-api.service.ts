import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripApiService {

  private eventsApiURL = environment.API + '/events';

  constructor(private http: HttpClient) { }

  getTrips(): Observable<any> {
    return this.http.get(this.eventsApiURL);
  }

  putTrip(obj): Observable<any> {
    const url = this.eventsApiURL + `/${obj.id}`;
    return this.http.put(url, obj);
  }

  deleteTrip(id): Observable<any> {
    const url = this.eventsApiURL + `/${id}`;
    return this.http.delete(url);
  }

}
