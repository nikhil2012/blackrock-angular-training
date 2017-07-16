console.log('Welcome!');
for(var x=10; x < 10; x++) {}
console.log(x);
const pi = 3.14;

function sum(x=11,y=11) {
    return x+y;
}

// array destructuring
let numbers = [1,2,3,4,5,6];
let firstNum = numbers[0];
let [first, second, ...remaining] = numbers;

// object destructuring 
let emp = {
    id : 100,
    ename : 'Nikhil'
};
let {ename, id} = emp;
console.log(ename,id);

// arrow functions
let add = (x,y) => x + y;

// class
class Product {
    // public id:number;
    // public name:string;
    // public cost:number;
    // constructor(id,name,cost) {
    //     console.log('New instance of Product');
    //     this.id = id;
    //     this.cost = cost;
    //     this.name = name;
    // }
    constructor(public id, public name, public cost){}
    display() {
        console.log('Id=' + this.id);
        console.log('Name=' + this.name);
        console.log('Cost=' + this.cost);
    }
}

let p1 = new Product(101,'Prod1', 100);
console.log(p1);
p1.display();


// Inheritence
class Stationary extends Product {
    constructor(private id, public name, public cost) {
        super(id, name, cost);
        this.category = 'Stationary';
    }
}
let pencil = new Stationary(201, 'Pencil', 10);
console.log(pencil);
pencil.display();

// template strings
let multiLines = `This is line1
This is second line`;
console.log(multiLines);
let formatstring = `All lines: ${multiLines}`;
console.log(formatstring);