import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboardDataUrl=environment.getData;
  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    let errMsg: string = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.message;
    }
    return Observable.throw(err);
  }

  async getDashboardList(input) {
  return this._http.post(this.dashboardDataUrl,input).pipe(

    catchError(this.handleError)
  );
}
}
