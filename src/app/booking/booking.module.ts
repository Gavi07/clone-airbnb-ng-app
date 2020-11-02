import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { FormReservationComponent } from './components/form-reservation/form-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';


@NgModule({
  declarations: [BookingComponent, FormReservationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
