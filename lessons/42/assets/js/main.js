//************Animals********************/
/*
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`${this.name} say hi!`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    sayHi() {
        console.log(`${this.name} say meow!`);
    }

    get color() {
        return this._color;
    }
    set color(new_color) {
        this._color = new_color;
    }
}

class BlackCat extends Cat {
    constructor(name) {
        super(name, 'black');
    }
}

const cat = new Cat('Sara', 'Ginger');
const cat2 = new Cat('Lisa');
const cat3 = new Animal('Missi');
const catBob = new BlackCat('Bob');
console.log(cat);
console.log(catBob);
cat.sayHi();
// cat2.sayHi();
// cat3.sayHi();

console.log(cat.color);
cat.color = 'White';
console.log(cat.color);

// const cat2 = {
//     name: 'Lisa',
//     sayHi: function() {
//         console.log(`${this.name} say hi!!!!!!`);
//     }
// }

// const cat3 = {
//     name: 'Missi',
//     sayHi: function() {
//         console.log(`${this.name} say hi!!!!!!`);
//     }
// }

// cat.sayHi();
// cat2.sayHi();
// cat3.sayHi();

*/

//**************Figures******************/

const rect = new Figure(300, 150, 'tomato', 100, 60);
rect.show();

const rectBlue = new Figure(100, 100, 'blue', 300, 160);
rectBlue.show();

const rectGrey = new Square(170, 'grey', 100, 240);
rectGrey.show();

const circ = new Circle(250, 'yellow', 500, 80);
circ.show();

const circ2 = new Circle(170, 'green', 670, 220);
circ2.show();