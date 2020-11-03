import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IReservation } from 'src/app/shared/models/reservation.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor( private httpClient: HttpClient ) { }

  private handlerError(error: HttpErrorResponse) {
    console.error(`Http error: ${error}`);
    return throwError(`Error calling api ${error.message}`);
  }

  public reservation(data: IReservation): Observable<any> {
    const url = `${environment.urlBase}/booking`;
    return this.httpClient.post<any>(url, data).pipe(
      retry(2), catchError(this.handlerError)
    );
  }
}
