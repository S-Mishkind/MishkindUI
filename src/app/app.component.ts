import { Component } from '@angular/core';
import { HiuiServiceService } from './Services/hiui-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UIHI';

  constructor(private hiuiService: HiuiServiceService ) {}

  testVal = this.hiuiService.test();
  
}
