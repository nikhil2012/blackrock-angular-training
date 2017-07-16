export class CalculatorModel {
    result : number = 0;
    num1 : number = 0;
    num2 : number = 0;

    add() {
        this.result = this.num1 + this.num2;
        this.clear();
    }
    subtract() {
        this.result = this.num1 - this.num2;
        this.clear();
    }
    multiply() {
        this.result = this.num1 * this.num2;
    }
    divide() {
        this.result = this.num1 / this.num2;
    }
    clear() {
      //  this.num1 = 0;
       // this.num2 = 0;
    }
}