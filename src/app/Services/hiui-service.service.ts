import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HiuiServiceService {

  constructor() { }

  test(): string {
    return "testing";
  }
}
