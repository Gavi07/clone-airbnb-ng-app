import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.scss']
})
export class FormReservationComponent implements OnInit {

  public formGroup: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.formInit();
  }

  private formInit() {
    this.formGroup = this.formBuilder.group({
      date_start: ['', [Validators.required, this.validateDate]],
      date_exit: ['', [Validators.required, this.validateDate]]
    }, {validator: this.validateDateExit});
  }

  public reservation() {
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

  private validateDateExit( form: FormGroup ) {
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
