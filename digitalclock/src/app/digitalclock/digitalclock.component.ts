import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitalclock',
  templateUrl: './digitalclock.component.html',
  styleUrls: ['./digitalclock.component.scss'],
})
export class DigitalclockComponent implements OnInit, OnDestroy {
  format: string = 'H:mm:ss:t';
  hourformat: string = this.format.split(':')[0];
  minuteformat: string = this.format.split(':')[1];
  secsformat: string = this.format.split(':')[2];
  ampmbool: string = this.format.split(':')[3];

  hours0!: number;
  hours1!: number;
  minutes0!: number;
  minutes1!: number;
  secs0!: number;
  secs1!: number;
  ampm!: string;
  intervalID!: number;

  updateTime(): void {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let secs = new Date().getSeconds();

    this.ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours === 0 ? 12 : hours % 12;

    if (this.hourformat === 'h' || this.hourformat === 'H') {
      this.hours0 = hours >= 10 ? Math.floor(hours / 10) : 10;
      this.hours1 = hours % 10;
    } else {
      this.hours0 = hours >= 10 ? Math.floor(hours / 10) : 0;
      this.hours1 = hours % 10;
    }

    if (this.hourformat === 'm') {
      this.minutes0 = minutes >= 10 ? Math.floor(minutes / 10) : 10;
      this.minutes1 = minutes % 10;
    } else {
      this.minutes0 = minutes >= 10 ? Math.floor(minutes / 10) : 0;
      this.minutes1 = minutes % 10;
    }

    if (this.secsformat === 's') {
      this.secs0 = secs >= 10 ? Math.floor(secs / 10) : 10;
      this.secs1 = secs % 10;
    } else {
      this.secs0 = secs >= 10 ? Math.floor(secs / 10) : 0;
      this.secs1 = secs % 10;
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.updateTime();
    this.intervalID = window.setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }
}
