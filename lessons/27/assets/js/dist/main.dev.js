"use strict";

// // Застарілі функціі, не стилізуються:
// // alert ('Hello world');
// // console.log('qwerttqw');
// // alert ('Hello world 2');
// // const answer = confirm('Delete Item?');
// // console.log(answer);
// // if(answer) {
// //     alert('Select YES')
// //  } else {
// //      alert('Select No')
// //  }
// // const userName = prompt('What is your name?');
// // console.log(userName);
// // if(userName = null) {
// //     if(userName = '') {
// //         alert('Wrong name')
// //     }
// // }
// const a = 1;
// // a = 5;
// console.log(a);
// let b = 2;
// b = 6;
// console.log(b);
// console.log(c);
// var c = 3;
// hoisting
// console.log(c);
// const integer = 12;
// const float = 12.34;
// const text = 'Lorem ipsum';
// const text2 = "I'am";
// const text3 = 'I\'am';
// const company = 'OOO "Роги і копита"';
// const company3 = "OOO \"Роги і копита\"";
// const isTrue = false;
// const undef = undefined;
// const Null = null;
// const NotANomber = NaN;
// const arr = [1, 2, 3, 4];
// const obj = {'a':1, 'b':2};
// const func = function(){alert('1')}
// console.log(integer, typeof(integer));
// console.log(float, typeof float);
// console.log(float, typeof float);
// console.log(text, typeof text);
// console.log(text2, typeof text2);
// console.log(text3, typeof text3);
// console.log(company, typeof company);
// console.log(company3, typeof company3);
// console.log(isTrue, typeof isTrue);
// console.log(undef, typeof undef);
// console.log(Null, typeof Null);
// console.log(NotANomber, typeof NotANomber);
// console.log(arr, typeof arr);
// console.log(obj, typeof obj);
// console.log(func, typeof func);
function myPow() {
  // debugger
  var num = parseInt(prompt('Введіть перше число'));
  var num2 = parseInt(prompt('Введіть друге число'));
  var rez = Math.pow(num, num2); // або const rez = Math.pow(num, num2)

  alert('Результат першого числа взведеного в ступінь другого числа = ' + rez);
}

function avgNum() {
  var num = parseInt(prompt('Введіть перше число'));
  var num2 = parseInt(prompt('Введіть друге число'));
  var rez = (num + num2) / 2;
  alert("\u0421\u0435\u0440\u0435\u0434\u043D\u0435 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u043D\u0435 \u0446\u0438\u0445 \u0447\u0438\u0441\u0435\u043B = ".concat(rez));
}

function square() {
  var num = parseInt(prompt('Введіть сторону квадрату'));
  var rez = num * 2;
  alert('Площа квадрату = ' + rez);
}

function km2oml() {
  var km = parseInt(prompt('Введіть відстань в км'));
  var K = 0.621371;
  var ml = km * K;
  alert("\u0412 \u043C\u0438\u043B\u044F\u0445 \u0446\u0435 ".concat(ml, " ml"));
}

function calc() {
  var num = parseInt(prompt('Вкажіть перше число'));
  var num2 = parseInt(prompt('Вкажіть друге число'));
  var action = prompt('Вкажіть дію');
  var rez;

  if (action === '+') {
    rez = num + num2;
  } else if (action === '-') {
    rez = num - num2;
  } else if (action === '*') {
    rez = num * num2;
  } else if (action === '/') {
    rez = num / num2;
  } else {
    alert('Недопустимий символ');
  }

  if (rez != undefined) alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 = ".concat(rez));
}

function findX() {
  var a = parseInt(prompt('Вкажіть число a'));
  var b = parseInt(prompt('Вкажіть число b'));
  var x = b * -1 / a;
  alert(" x = ".concat(x));
}

function timeToDayEnd() {
  var hour = parseInt(prompt('Вкажіть котра година зараз'));
  var minutes = parseInt(prompt('Вкажіть котра хвилина'));
  var minutesTotalLeft = 24 * 60 - (hour * 60 + minutes);
  var hoursLeft = parseInt(minutesTotalLeft / 60);
  var minutesLeft = minutesTotalLeft - hoursLeft * 60;
  alert("\u0414\u043E \u043A\u0456\u043D\u0446\u044F \u0434\u043D\u044F \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044F ".concat(hoursLeft, " \u0433\u043E\u0434\u0438\u043D, ").concat(minutesLeft, " \u0445\u0432\u0438\u043B\u0438\u043D"));
}

function digit2() {
  var abc = +prompt('Введіть трьохзначне число');
  var rez = parseInt(abc % 100 / 10);
  alert("\u0414\u0440\u0443\u0433\u0430 \u0446\u0438\u0444\u0440\u0430: ".concat(rez));
}

function digit3() {
  var abc = parseInt(prompt('Введіть пятизначне число'));
  var x = abc % 10;
  var y = (abc - x) / 10;
  var z = x * 10000 + y;
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(z));
}

function myZp() {
  var sumProd = +prompt('Введіть загальну суму продажів за миулий місяць');
  var rez = parseInt(sumProd / 10 + 250);
  alert("\u041D\u0430\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0443: ".concat(rez, "$"));
}