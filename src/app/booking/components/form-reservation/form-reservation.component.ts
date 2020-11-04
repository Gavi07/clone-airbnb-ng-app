import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking/booking.service';
import { IReservation } from 'src/app/shared/models/reservation.model';

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.scss']
})
export class FormReservationComponent implements OnInit {

  public formGroup: FormGroup;
  public id: string;
  public iReservation: IReservation;
  public response: boolean;

  constructor( private formBuilder: FormBuilder, private route: ActivatedRoute,
               private bookingService: BookingService, private router: Router ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.response = false;
    this.formInit();
  }

  private formInit() {
    this.formGroup = this.formBuilder.group({
      date_start: ['', [Validators.required, this.validateDate]],
      date_exit: ['', [Validators.required, this.validateDate]],
      comments: ['', Validators.required]
    }, {validator: this.validateDates});
  }

  public reservation() {
    console.log('Llego');
    this.iReservation = {
      booking_date_start: this.formGroup.controls.date_start.value,
      booking_date_end: this.formGroup.controls.date_exit.value,
      experience_id: this.id,
      comments: this.formGroup.controls.comments.value
    };
    console.log(this.iReservation);

    this.bookingService.reservation(this.iReservation).subscribe( data => {
      if (data.status === 1) {
        this.response = true;
        console.log(data);
        setTimeout (() => {
          this.router.navigate(['/home']);
       }, 5000);
      } else {
        this.response = false;
      }
    });
  }

  private validateDate( control: AbstractControl ) {
    const date = control.value;

    if (date && typeof date === 'string') {
      const match = date.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
      if (!match) {
        return { dateInvalid: true };
      } else if (match && match[0] !== date) {
        return { dateInvalid: true };
      }
    }
    return null;
  }

  private validateDates( form: FormGroup ) {
    if (form.controls.date_start.value > form.controls.date_exit.value) {
      return { notValid: true };
    }
    return null;
  }

  public getError( controlName: string ): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = this.errorMapping(control.errors);
    }
    return error;
  }

  private errorMapping( errors: any): string {
    let errorsMessage = '';
    if (errors.required) {
      errorsMessage += 'Campo obligatorio. ';
    }
    if (errors.dateInvalid) {
      errorsMessage += 'Formato de fecha erroneo. ';
    }
    return errorsMessage;
  }

}
