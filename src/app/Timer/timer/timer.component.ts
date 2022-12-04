import {
  Component,
  OnInit,
} from '@angular/core';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { Timer } from 'src/app/Models/timer';
import { HiuiServiceService } from 'src/app/Services/hiui-service.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit{
  display: any;
  timerInterval: any;
  errorMessage = '';

  timers$ = this.hiuiService.timer$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  constructor(private hiuiService: HiuiServiceService) {}

  ngOnInit(): void {
      this.start(10);
  }
  start(timerLength: number) {
    this.timer(timerLength);
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
        clearInterval(this.timerInterval);
        this.hiuiService.timerComplete(true).subscribe();
        this.hiuiService.saveFile();
      }
    }, 1000);

  }
}
