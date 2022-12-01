import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inventory } from '../Models/inventory.model';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Timer } from '../Models/timer';

@Injectable({
  providedIn: 'root'
})
export class HiuiServiceService {

  constructor(private http: HttpClient) { }
  private apiBase = 'https://localhost:7025/api/'

  inventory$ = this.http.get<Inventory[]>(this.apiBase + 'Atest')
  .pipe(
    tap(inventory => console.log('inventory', JSON.stringify(inventory))),
    catchError(this.handleError)
  )



  timer$ = this.http.get<Timer[]>(this.apiBase + 'Timer?timerLength=15' )
  .pipe(
    tap(timer => console.log('timer', JSON.stringify(timer))),
    catchError(this.handleError)
  )

/*   getTimer(timerLength: number): Observable<Timer[]>{
    return this.http.get<Timer[]>(this.apiBase + 'Timer?timerLength='+ timerLength  )
    .pipe(
      tap(timer => console.log('timer', JSON.stringify(timer))),
      catchError(this.handleError)
    )
  } */

  private handleError(err: HttpErrorResponse): Observable<never>{
    let errorMessage: string;
    errorMessage = `an error occured - is Local Api Running ? : ${err.status}: ${err.message}`;
    console.error(err);
    return throwError(() => errorMessage);
  }
}
