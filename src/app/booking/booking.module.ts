import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { FormReservationComponent } from './components/form-reservation/form-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BookingComponent, FormReservationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
