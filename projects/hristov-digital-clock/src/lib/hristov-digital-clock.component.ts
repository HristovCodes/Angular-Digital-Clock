import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'lib-hristov-digital-clock',
  templateUrl: './hristov-digital-clock.component.html',
  styleUrls: ['./hristov-digital-clock.component.scss'],
})
export class HristovDigitalClockComponent implements OnInit, OnDestroy {
  @Input() format!: string;
  hourformat!: string;
  minuteformat!: string;
  secsformat!: string;
  ampmbool!: boolean;

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

    this.ampm = 'noshow';
    if (this.hourformat === 'h' || this.hourformat === 'hh') {
      if (this.ampmbool) this.ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours === 0 ? 12 : hours % 12;
    }

    // code below takes care of leading 0s
    this.hours0 = hours >= 10 ? Math.floor(hours / 10) : 0;
    this.hours1 = hours % 10;
    if (this.hourformat === 'h' || this.hourformat === 'H') {
      this.hours0 = hours >= 10 ? Math.floor(hours / 10) : 10;
    }

    this.minutes0 = minutes >= 10 ? Math.floor(minutes / 10) : 0;
    this.minutes1 = minutes % 10;
    if (this.hourformat === 'm') {
      this.minutes0 = minutes >= 10 ? Math.floor(minutes / 10) : 10;
    }

    this.secs0 = secs >= 10 ? Math.floor(secs / 10) : 0;
    this.secs1 = secs % 10;
    if (this.secsformat === 's') {
      this.secs0 = secs >= 10 ? Math.floor(secs / 10) : 10;
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.hourformat = this.format.split(':')[0];
    this.minuteformat = this.format.split(':')[1];
    this.secsformat = this.format.split(':')[2];
    this.ampmbool = this.format.split(':')[3] === 't' ? true : false;
    this.updateTime();
    this.intervalID = window.setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }
}
