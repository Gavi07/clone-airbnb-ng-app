import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private httpClient: HttpClient ) { }

  private handlerError(error: HttpErrorResponse) {
    console.error(`Http error: ${error}`);
    return throwError(`Error calling api ${error.message}`);
  }

  public signup(register: IUser): Observable<any> {
    const url = `${environment.urlBase}/users/signup`;
    return this.httpClient.post<any>(url, register).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public login(userLogin: IUser): Observable<any> {
    const url = `${environment.urlBase}/users/login`;
    return this.httpClient.post<any>(url, userLogin).pipe(
      retry(2), catchError(this.handlerError)
    );
  }


}
