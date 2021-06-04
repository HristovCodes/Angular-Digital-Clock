import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitalclock',
  templateUrl: './digitalclock.component.html',
  styleUrls: ['./digitalclock.component.scss'],
})
export class DigitalclockComponent implements OnInit {
  hours!: number;
  hours0!: number;
  hours1!: number;
  minutes!: number;
  minutes0!: number;
  minutes1!: number;

  constructor() {}

  ngOnInit(): void {
    this.hours = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.hours0 = this.hours >= 10 ? Math.floor(this.hours / 10) : this.hours;
    this.hours1 = this.hours % 10;
    this.minutes0 =
      this.minutes >= 10 ? Math.floor(this.minutes / 10) : this.minutes;
    this.minutes1 = this.minutes % 10;
  }
}
