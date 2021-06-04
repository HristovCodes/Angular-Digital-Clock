import { Component, OnInit, Input } from '@angular/core';
import { Digit } from './digit';
import { DigitTemplates } from './digittemplates';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss'],
})
export class DigitComponent implements OnInit {
  @Input() n!: number;
  digit: Digit = DigitTemplates[this.n];

  constructor() {}

  ngOnInit(): void {
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
