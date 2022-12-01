import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inventory } from '../Models/inventory.model';
import { Observable, tap } from 'rxjs';
import { Timer } from '../Models/timer';

@Injectable({
  providedIn: 'root'
})
export class HiuiServiceService {

  constructor(private http: HttpClient) { }
  private apiBase = 'https://localhost:7025/api/'

  /* inventory$ = this.http.get<Inventory[]>(this.apiBase + 'Atest')
  .pipe(
    tap(inventory => console.log('inventory', JSON.stringify(inventory)))
  ) */

  getInventory(): Observable<Inventory[]>{
    return this.http.get<Inventory[]>(this.apiBase + 'Atest')
    .pipe(
      tap(inventory => console.log('inventory', JSON.stringify(inventory)))
    )
  }

  getTimer(timerLength: number): Observable<Timer[]>{
    console.log("timer url = " + this.apiBase + 'Timer('+ timerLength )
    return this.http.get<Timer[]>(this.apiBase + 'Timer?timerLength='+ timerLength  )
    .pipe(
      tap(timer => console.log('timer', JSON.stringify(timer)))
    )
  }
}
