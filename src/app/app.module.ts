import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { App } from './app.component';
import { HristovDigitalClockModule } from 'hristov-digital-clock';

@NgModule({
  declarations: [App],
  imports: [CommonModule, BrowserModule, HristovDigitalClockModule],
  exports: [],
  bootstrap: [App],
})
export class AppModule {}
