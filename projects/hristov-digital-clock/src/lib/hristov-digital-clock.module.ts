import { NgModule } from '@angular/core';

import { DigitComponent } from './digit/digit.component';
import { HristovDigitalClockComponent } from './hristov-digital-clock.component';

@NgModule({
  declarations: [DigitComponent, HristovDigitalClockComponent],
  imports: [],
  exports: [DigitComponent, HristovDigitalClockComponent],
  bootstrap: [HristovDigitalClockComponent],
})
export class HristovDigitalClockModule {}
