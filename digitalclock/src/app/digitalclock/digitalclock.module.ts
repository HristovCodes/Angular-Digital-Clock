import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { DigitComponent } from '../digit/digit.component';
import { DigitalclockComponent } from './digitalclock.component';

@NgModule({
  declarations: [DigitComponent, DigitalclockComponent],
  imports: [CommonModule, BrowserModule],
  exports: [DigitComponent],
  bootstrap: [DigitalclockComponent],
})
export class DigitalclockModule {}
