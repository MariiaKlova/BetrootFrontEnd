"use strict";

// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     satHi(){
//         console.log(`${this.name} say hi!`);
//     }
// }
// class Cat extends Animal {
//     constructor(name, color){
//         super(name);
//         this.color = color;
//     }
// }
// class BlackCat extends Cat {
//     constructor(name, color ='Black'){
//         super(name, color);
//     }
// }
// const cat = new Cat('Sara', 'Ginger');
// console.log(cat);
//********************************/
var rect = new Figure(300, 150, 'tomato', 100, 60);
rect.show();
var rectBlue = new Square(120, 'blue', 300, 160);
rectBlue.show();
var circ = new Circle(250, 'yellow', 500, 200);
circ.show();
var circ2 = new Circle(170, 'green', 470, 20);
circ2.show();