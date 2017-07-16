var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Welcome!');
for (var x = 10; x < 10; x++) { }
console.log(x);
var pi = 3.14;
function sum(x, y) {
    if (x === void 0) { x = 11; }
    if (y === void 0) { y = 11; }
    return x + y;
}
// array destructuring
var numbers = [1, 2, 3, 4, 5, 6];
var firstNum = numbers[0];
var first = numbers[0], second = numbers[1], remaining = numbers.slice(2);
// object destructuring 
var emp = {
    id: 100,
    ename: 'Nikhil'
};
var ename = emp.ename, id = emp.id;
console.log(ename, id);
// arrow functions
var add = function (x, y) { return x + y; };
// class
var Product = (function () {
    // public id:number;
    // public name:string;
    // public cost:number;
    // constructor(id,name,cost) {
    //     console.log('New instance of Product');
    //     this.id = id;
    //     this.cost = cost;
    //     this.name = name;
    // }
    function Product(id, name, cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
    Product.prototype.display = function () {
        console.log('Id=' + this.id);
        console.log('Name=' + this.name);
        console.log('Cost=' + this.cost);
    };
    return Product;
}());
var p1 = new Product(101, 'Prod1', 100);
console.log(p1);
p1.display();
// Inheritence
var Stationary = (function (_super) {
    __extends(Stationary, _super);
    function Stationary(id, name, cost) {
        var _this = _super.call(this, id, name, cost) || this;
        _this.id = id;
        _this.name = name;
        _this.cost = cost;
        _this.category = 'Stationary';
        return _this;
    }
    return Stationary;
}(Product));
var pencil = new Stationary(201, 'Pencil', 10);
console.log(pencil);
pencil.display();
// template strings
var multiLines = "This is line1\nThis is second line";
console.log(multiLines);
var formatstring = "All lines: " + multiLines;
console.log(formatstring);
