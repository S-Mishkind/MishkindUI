import { Component, OnInit } from '@angular/core';
import * as saveAs from 'file-saver';
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
  tap(inv => console.log("inv = " + inv)),
  tap(inv => this.inventoryData = inv),
    catchError(err => {
      this.errorMessage = err;
      return EMPTY
    })

  );



  constructor(private hiuiService: HiuiServiceService ) {}

  saveFile() {
    const blob = new Blob(["Please Save Me!"], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "save-me.txt");
    }



}


