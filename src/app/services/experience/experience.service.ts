import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IExperience } from 'src/app/shared/models/experience.model';
import { IExperienceResponse } from 'src/app/shared/models/experiencesResponse.model';
import { IExperienceTop5 } from 'src/app/shared/models/top5.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor( private httpClient: HttpClient ) { }

  private handlerError(error: HttpErrorResponse) {
    console.error(`Http error: ${error}`);
    return throwError(`Error calling api ${error.message}`);
  }

  public getExperiences(): Observable<IExperienceResponse> {
    const url = `${environment.urlBase}/experiences`;
    return this.httpClient.get<IExperienceResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getExperienceById( id: string): Observable<any> {
    // return this.experiences.find( item => item.id === id);
    const url = `${environment.urlBase}/experiences/detail/${id}`;
    return this.httpClient.get<IExperience>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getTop5(): Observable<IExperienceTop5> {
    const url = `${environment.urlBase}/experiences/top5`;
    return this.httpClient.get<IExperienceTop5>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }
}
