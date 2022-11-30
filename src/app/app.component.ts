import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from './Models/inventory.model';
import { HiuiServiceService } from './Services/hiui-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'UIHI';
  inventory$: Observable<Inventory[]> | undefined;


  constructor(private hiuiService: HiuiServiceService ) {}

  ngOnInit(): void {
    this.inventory$ = this.hiuiService.getInventory()

  }



}
