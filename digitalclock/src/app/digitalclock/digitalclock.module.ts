import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { DigitComponent } from '../digit/digit.component';
import { DigitalclockComponent } from './digitalclock.component';
import { HristovDigitalClockModule } from 'hristov-digital-clock';

@NgModule({
  declarations: [DigitComponent, DigitalclockComponent],
  imports: [CommonModule, BrowserModule, HristovDigitalClockModule],
  exports: [DigitComponent],
  bootstrap: [DigitalclockComponent],
})
export class DigitalclockModule {}
