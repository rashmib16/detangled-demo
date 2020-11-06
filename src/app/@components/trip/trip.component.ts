import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TripsService } from 'src/app/@facades/trips.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('trip') trip: any;

  edit = false;

  tripForm = this.fb.group({
    id : this.fb.control(['']),
    destination : this.fb.control(['']),
    start : this.fb.control(['']),
    duration : this.fb.control(['']),
    comment : this.fb.control(['']),
    color : this.fb.control([''])
  });

  constructor( private fb: FormBuilder,
               private confirmationService: ConfirmationService,
               @Inject(TripsService) private tripService: TripsService) { }

  ngOnInit(): void {
    this.tripForm.setValue(this.trip);
  }

  save(): void {
    this.edit = !this.edit;
    this.tripService.editTrip(this.tripForm.value);
  }

  deleteTrip(): void {

    this.confirmationService.confirm({
      header: 'Delete Confirmation',
      message: 'Are you sure that you want to delete this trip?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.tripService.deleteTrip(this.tripForm.get('id').value);
      }
    });
  }

}
