import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitalclock',
  templateUrl: './digitalclock.component.html',
  styleUrls: ['./digitalclock.component.scss'],
})
export class DigitalclockComponent implements OnInit, OnDestroy {
  hours!: number;
  hours0!: number;
  hours1!: number;
  minutes!: number;
  minutes0!: number;
  minutes1!: number;
  secs!: number;
  secs0!: number;
  secs1!: number;
  intervalID!: number;

  updateTime(): void {
    this.hours = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.secs = new Date().getSeconds();
    this.hours0 = this.hours >= 10 ? Math.floor(this.hours / 10) : this.hours;
    this.hours1 = this.hours % 10;
    this.minutes0 = this.minutes >= 10 ? Math.floor(this.minutes / 10) : 0;
    this.minutes1 = this.minutes % 10;
    this.secs0 = this.secs >= 10 ? Math.floor(this.secs / 10) : 0;
    this.secs1 = this.secs % 10;
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
