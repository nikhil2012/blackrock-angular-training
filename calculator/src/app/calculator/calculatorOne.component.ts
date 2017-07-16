import { Component } from '@angular/core';

import { CalculatorModel } from './CalculatorModel';

@Component({
  selector: 'calculator-one',
  templateUrl: 'calculatorOne.component.html'
})
export class CalculatorOneComponent {
  calculator : CalculatorModel = new CalculatorModel();
}