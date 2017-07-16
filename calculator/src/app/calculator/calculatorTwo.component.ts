import { Component } from '@angular/core';

import { CalculatorModel } from './CalculatorModel';

@Component({
  selector: 'calculator-two',
  templateUrl: 'calculatorTwo.component.html'
})
export class CalculatorTwoComponent {
  calculator : CalculatorModel = new CalculatorModel();
  operator : string = 'Add';
  calculate() {
      console.log(this.operator);
    // if(this.operator === 'add') {
    //     this.calculator.add();
    // } else if(this.operator === 'subtract') {
    //     this.calculator.subtract();
    // } else if(this.operator === 'multiply') {
    //     this.calculator.multiply();
    // } else if(this.operator === 'divide') {
    //     this.calculator.divide();
    // }
    this.calculator[this.operator]();
  }
}