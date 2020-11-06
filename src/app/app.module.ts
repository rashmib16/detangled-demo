import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './@components/list/list.component';
import { TripComponent } from './@components/trip/trip.component';
import { CalendarComponent } from './@components/calendar/calendar.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmationService } from 'primeng/api';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TripSkeletonComponent } from './@components/trip-skeleton/trip-skeleton.component';

const PrimeModules = [
  ButtonModule,
  InputTextModule,
  ConfirmDialogModule,
  InputTextareaModule
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TripComponent,
    CalendarComponent,
    TripSkeletonComponent
  ],
  imports: [
    ...PrimeModules,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgxSkeletonLoaderModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
