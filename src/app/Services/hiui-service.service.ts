import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inventory } from '../Models/inventory.model';
import { Observable, tap } from 'rxjs';

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
}
