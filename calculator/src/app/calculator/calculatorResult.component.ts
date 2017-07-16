import { Component, Input } from '@angular/core';

@Component({
  selector: 'calculator-result',
  template: `
    <div>Result = {{textToShow}}</div>
  `
})
export class CalculatorResultComponent {
    @Input()
    textToShow : any = 'No result';
}