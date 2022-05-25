"use strict";

//// Array methods 
var arr = ['foo', 'hello', 'Ipsumdolor', 'bar', 'lorem', 'Audi'];
console.log('arr', arr); ////////////////////////////////////

console.log('=== Вивід строками metod .forEach: +index+ +el+ ===');
var opts = '';
arr.forEach(function (el, index) {
  opts += '<option value = "' + index + '">' + el + '</option>' + "\n";
});
console.log('opts:\n', opts); /////////////////////////////////////

console.log('=== Перетворення масиву на масив обєктів metod .forEach + .push  ===');
var arrObj = [];
arr.forEach(function (el, index) {
  arrObj.push({
    key: index,
    value: el
  });
});
console.log('arrObj:', arrObj); /////////////////////////////////////

console.log('=== Створення нового масиву обєктів metod .map .map((el, index) => (index + 1) + - + el)  ===');
var arr2 = arr.map(function (el, index) {
  return index + 1 + '-' + el;
});
console.log('arr2', arr2); ////////////////////////////////////

console.log('=== Вивід обєктів, коротших за 4. metod .forEach + .push ===');
var arrObj2 = [];
arr.forEach(function (el, index) {
  if (el.length <= 4) {
    arrObj2.push({
      key: index,
      value: el
    });
  }
});
console.log('arrObj2:', arrObj2); //////////////////////////////////////

console.log('=== Виводимо тільки елемент. metod .forEach + .push ===');
var arrShort = [];
var arrObj3 = [];
arr.forEach(function (el, index) {
  arrObj3.push({
    key: index,
    value: el
  });

  if (el.length <= 4) {
    arrShort.push(el);
  }
});
console.log('arrShort:', arrShort); // АЛЬТЕРНАТИВА:

console.log('=== Альтернативно виводимо тільки елемент . metod .filter ===');
var arrShort2 = arr.filter(function (el) {
  return el.length <= 4;
});
console.log('arrShort2:', arrShort2); // //// Замикання:
// function workWithCard() {
//     let CARD = [];
//     return {
//         addToCard: function (name = '', qty = 1) {
//             CARD.push({
//                 name: name,
//                 qty: qty
//             })
//         },
//         viewCard: function () {
//             return CARD;
//         }
//     }
// }
// const cardActions = workWithCard();
// cardActions.addToCard('qwe', 2);
// console.log(cardActions.viewCard());
//////////////////////////////////////////////////////////////////////////////////////////////////

console.log('///////////////////////////////////////////////////////////////////////////////////////');
console.log('=== Новий масив обєктів ===');
var personal = [{
  name: 'Bob',
  lvl: 'user',
  age: 35
}, {
  name: 'Ann',
  lvl: 'manager',
  age: 25
}, {
  name: 'John',
  lvl: 'admin',
  age: 33
}];
console.log('personal:', personal); ///////////////////////////////////////

console.log('=== Створення нового масиву з балансами на основі personal. metod .map ==='); // Невірне рішення, створить обєкт тільки з одним значенням
// personal.map(el => {
//     return el.age * 100;
// });
// console.log('personal', personal);

var balArr = personal.map(function (el) {
  return el.age * 100;
});
console.log('balArr - Виведе тільки строки балансів', balArr);
console.log('personal - не змінний', personal); //////////////////////////////////////////////

console.log('=== Створення нового обєкту на базі обєкту personal. metod .map ===');
var balArr2 = personal.map(function (el) {
  return {
    name: el.name,
    lvl: el.lvl,
    age: el.age,
    balance: el.age * 100
  };
});
console.log('personal - не змінений :', personal);
console.log('balArr2 - новий масив:', balArr2); ////////////////////////////////
// console.log('=== Додавання балансів до обєкту personal. metod .forEach ===');
// const balArr3 = personal.forEach(el => {
//     el.balance = el.age * 100;
// });
// console.log('personal - ВЖЕ БУДЕ змінений :', personal);

console.log('=== Ддодавання балансу всім кому за 30 в обєкту personal. metod .filter, map, sort==='); // const balSort = balArr2.filter(el => el.age >= 30).forEach(el => el.balance += 500)

var balSort = balArr2.filter(function (el) {
  return el.age >= 30;
}).map(function (el) {
  return el.balance += 500;
}); // .sort((a, b) => a.age - b.age)  // не прицює врядок

balArr2.sort(function (a, b) {
  return a.age - b.age;
});
console.log('balArr2 - відсортований', balArr2);