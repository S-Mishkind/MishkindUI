import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Inventory } from './Models/inventory.model';
import { HiuiServiceService } from './Services/hiui-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UIHI';
  inventory$ = this.hiuiService.inventory$.pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY
    })

  );
  errorMessage = ''


  constructor(private hiuiService: HiuiServiceService ) {}



}
