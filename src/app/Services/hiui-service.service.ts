import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inventory } from '../Models/inventory.model';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { Timer } from '../Models/timer';
import * as saveAs from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class HiuiServiceService {
  constructor(private http: HttpClient) {}
  private apiBase = 'https://localhost:7025/api/';
  private textToSave = '';

  inventory$ = this.http.get<Inventory[]>(`${this.apiBase}Inventory`).pipe(
    tap((inventory) => console.log('inventory', JSON.stringify(inventory))),
    tap((inventory) => this.textToSave = JSON.stringify(inventory)),
    catchError(this.handleError)
  );


  timer$ = this.http.get<Timer[]>(`${this.apiBase}Timer`).pipe(
    tap((timer) => console.log('timer', JSON.stringify(timer))),
    catchError(this.handleError)
  );

  timerComplete(tComplete: boolean): Observable<any> {
    const body = '';
    return this.http.post(`${this.apiBase}Timer?tComplete=true`, body);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    errorMessage = `An error occured - is Local Api Running ? : ${err.status}: ${err.message}`;
    console.error(err);
    return throwError(() => errorMessage);
  }

  saveFile() {
    const blob = new Blob([this.textToSave], {type: "text/plain;charset=utf-8"});
     saveAs(blob, "inventory.txt");
  }
}
