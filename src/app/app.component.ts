import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { Inventory } from './Models/inventory.model';
import { HiuiServiceService } from './Services/hiui-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UIHI';
  inventoryData: any;
  displayedColumns: string[]= ['description']

/*   id: number,
  description: string,
  count: number */
/*   inventory$ = this.hiuiService.inventory$.pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY
    })

  ); */

  inventory$ = this.hiuiService.inventory$.pipe(
    map((inventory) =>
    inventory.map(
      (inv) =>
        ({
          ...inv,
        } as Inventory)
    )
  ),
  tap(inv => console.log("inv = " + inv)),
  tap(inv => this.inventoryData = inv),
    catchError(err => {
      this.errorMessage = err;
      return EMPTY
    })

  );
  errorMessage = ''


  constructor(private hiuiService: HiuiServiceService ) {}



}


