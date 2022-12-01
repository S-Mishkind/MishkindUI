import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent  {

  display: any;
  public timerInterval: any;

  constructor() {
    // this.timer(2);
  }

  start() {
    this.timer(20);
  }
  stop() {
    clearInterval(this.timerInterval);
  }

 // timer(minute: number) {
    timer(s: number) {
    // let minute = 1;
    //let seconds: number = minute * 60;
    let seconds = s;
    let textSec: any = '0';
   // let statSec: number = 60;
   let statSec = s;

    //const prefix = minute < 10 ? '0' : '';

    this.timerInterval = setInterval(() => {
      seconds--;
     if (statSec != 0) statSec--;
     // else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;




     // this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
     // this.display = `${Math.floor(seconds / 60)}:${textSec}`;
     this.display = `${textSec} seconds`;


      if (seconds == 0) {
        console.log('finished');
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }



}
