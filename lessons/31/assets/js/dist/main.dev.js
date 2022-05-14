"use strict";

//---------------------------------------
function sum() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
}

sum(10); // return 10 
//---------------------------------------
//Рекурсивна функція викликає сама себе.

var count = 0;

function myFunc() {
  console.log('call');
  console.log(count);
  count++;
  var text = prompt('Question');
  alert(text);

  if (text !== '') {
    myFunc;
  }

  console.log(count); // також порахує count від всіх вкладеностей

  return 1, 2, 3; // поверне тільки останне значення 3
  // return [1,2,3];  // поверне всі значення.
} //---------------------------------------
//IIFE  (Immediately Invoked Function Expression) 


(function () {
  console.log('Hello');
})();

function init() {} //---------------------------------------


var obj = {
  name: 'Вася',
  age: 25
};

if (obj.hasOwnProperty('age')) {
  console.log(obj).age;
} else {
  console.log('Object has no property');
}

Object.freeze(obj); // заморозити обєкт від змін

obj.age = 35; // не перепише заморожений обєкт

Object.isFrozen(obj); // Перевірити чи заморожений обєкт
//---------------------------------------
// Передивитися 20:50
//---------------------------------------
// Функція виводить четні / нечетні числа з діапазону
// Загальні функції

function chekIntValue(value) {
  if (value === '') {
    return false;
  }

  value = parseInt(value);

  if (isNaN(value) || value < 0) {
    return false;
  }

  return value;
}

function showResult(rez, resId) {
  document.getElementById(resId).innerText = rez;
} // Функція на задачу


function filterRangeNumbers() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var isEven = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var result = '';

  for (var i = from; i <= to; i++) {
    if (isEven) {
      if (i % 2 === 0) {
        result += i + ' ';
      }
    } else {
      if (i % 2 !== 0) {
        result += i + ' ';
      }
    }
  }

  return result;
} // console.log(filterRangeNumbers(10,20, false));
// функція на інтерфейс і визов функції на задачу


function task1() {
  var fromValue = chekIntValue(document.getElementById('task1_number1').value),
      toValue = chekIntValue(document.getElementById('task1_number2').value),
      typeValue = document.getElementById('numbers_type').value;
  var rez = '';

  if (fromValue !== false && toValue !== false) {
    if (fromValue < toValue) {
      rez = filterRangeNumbers(fromValue, toValue, Boolean(typeValue));
    } else {
      rez = 'From must be smaller than To';
    }
  } else {
    rez = 'Enter correct values';
  }

  showResult(rez, 'task1_result');
} // factorial


function factorial(n) {
  if (n == 0) {
    return 1;
  }

  return n * factorial(n - 1);
}