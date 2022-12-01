import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Timer } from 'src/app/Models/timer';
import { HiuiServiceService } from 'src/app/Services/hiui-service.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit  {

  display: any;
  public timerInterval: any;
  timer$: Observable<Timer[]> | undefined;
  public timerLength?: number;
  errorMessage = '';


  constructor(private hiuiService: HiuiServiceService) {

  }

  ngOnInit(): void {
    this.timer$ = this.hiuiService.getTimer(15).pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY
      } )
    )
 // console.log ("timer in component ", JSON.stringify(this.timer$))
 console.log ("timer in component ", this.timer$)




  }

  start() {
    this.timer(4);
  }
  stop() {
    clearInterval(this.timerInterval);
  }


    timer(s: number) {

    let seconds = s;
    let textSec: any = '0';


    this.timerInterval = setInterval(() => {

     if (seconds != 0) seconds--;
      if (seconds < 10) {
        textSec = '0' + seconds;
      } else textSec = seconds;

     this.display = `${textSec} seconds`;


      if (seconds == 0) {
        console.log('finished');
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }



}
