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
  errorMessage = ''

  inventory$ = this.hiuiService.inventory$.pipe(
    map((inventory) =>
    inventory.map(
      (inv) =>
        ({
          ...inv,
        } as Inventory)
    )
  ),
    catchError(err => {
      this.errorMessage = err;
      return EMPTY
    })

  );

  constructor(private hiuiService: HiuiServiceService ) {}


}


