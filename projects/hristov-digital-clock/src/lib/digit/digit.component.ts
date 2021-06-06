import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Digit } from './digit';
import { DigitTemplates } from './digit-templates';

@Component({
  selector: 'lib-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss'],
})
export class DigitComponent implements OnInit, OnChanges {
  @Input() n!: number;
  digit!: Digit;

  constructor() {}

  ngOnInit(): void {
    this.digit = DigitTemplates[this.n];
  }

  ngOnChanges(): void {
    this.digit = DigitTemplates[this.n];
  }
}

/*
      Digit	a   b   c   d   e   f   g
      0	    on	on	on	on	on	on	
      1		      on	on
      2	    on	on	    on	on	    on
      3	    on	on	on	on			    on
      4		      on	on			    on	on
      5	    on	  	on	on	  	on	on
      6	    on  		on	on	on	on	on
      7	    on	on	on				
      8	    on	on	on	on	on	on	on
      9	    on	on	on	on		  on	on
*/
