import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitalclock',
  templateUrl: './digitalclock.component.html',
  styleUrls: ['./digitalclock.component.scss'],
})
export class DigitalclockComponent implements OnInit, OnDestroy {
  format: string = 'hh:mm:ss:f';
  hourformat: string = this.format.split(':')[0];
  minuteformat: string = this.format.split(':')[1];
  secsformat: string = this.format.split(':')[2];
  ampmbool: string = this.format.split(':')[3];

  hours!: number;
  hours0!: number;
  hours1!: number;
  minutes!: number;
  minutes0!: number;
  minutes1!: number;
  secs!: number;
  secs0!: number;
  secs1!: number;
  ampm!: string;
  intervalID!: number;

  updateTime(): void {
    this.hours = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.secs = new Date().getSeconds();

    if (this.ampmbool === 't') {
      this.ampm = 'am';
      if (this.hours > 12) {
        this.hours -= 12;
        this.ampm = 'pm';
      }
    }

    if (this.hourformat === 'h' || this.hourformat === 'H') {
      this.hours0 = this.hours >= 10 ? Math.floor(this.hours / 10) : 10;
      this.hours1 = this.hours % 10;
    } else {
      this.hours0 = this.hours >= 10 ? Math.floor(this.hours / 10) : 0;
      this.hours1 = this.hours % 10;
    }

    if (this.hourformat === 'm') {
      this.minutes0 = this.minutes >= 10 ? Math.floor(this.minutes / 10) : 10;
      this.minutes1 = this.minutes % 10;
    } else {
      this.minutes0 = this.minutes >= 10 ? Math.floor(this.minutes / 10) : 0;
      this.minutes1 = this.minutes % 10;
    }

    if (this.secsformat === 's') {
      this.secs0 = this.secs >= 10 ? Math.floor(this.secs / 10) : 10;
      this.secs1 = this.secs % 10;
    } else {
      this.secs0 = this.secs >= 10 ? Math.floor(this.secs / 10) : 0;
      this.secs1 = this.secs % 10;
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
