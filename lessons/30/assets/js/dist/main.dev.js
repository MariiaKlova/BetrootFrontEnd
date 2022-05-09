"use strict";

//1 Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
function checkTen() {
  var dodatni = 0,
      videmni = 0,
      nuli = 0,
      parni = 0,
      neparni = 0;
  result = '', number = 0, allNumbers = '', i = 0;
  var limit = 10;

  while (i < limit) {
    number = parseInt(prompt('Enter number'));

    if (!isNaN(number)) {
      allNumbers += number + ', ';

      if (number === 0) {
        nuli++;
      } else {
        if (number > 0) {
          dodatni++;
        } else {
          videmni++;
        }
      }
    }

    if (number % 2 === 0) {
      parni++;
    } else {
      neparni++;
    }

    i++;
  }

  result = "\u0414\u043E\u0434\u0430\u0442\u043D\u0456: ".concat(dodatni, ", \u0412\u0456\u0434'\u0454\u043C\u043D\u0456: ").concat(videmni, " , \u041D\u0443\u043B\u0456: ").concat(nuli, " , \u041F\u0430\u0440\u043D\u0456: ").concat(parni, " , \u041D\u0435\u043F\u0430\u0440\u043D\u0456: ").concat(neparni, " ");
  document.getElementById('task_1_result').innerHTML = allNumbers + '<br>' + result;
} //2 якщо ми тиснемо Ок, цикл працює.


function ask() {
  var answer = true;

  while (answer) {
    answer = confirm('Question?');
  }

  alert('End');
} //3 Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


var r = '<div style="display:flex; flex-wrap:wrap; gap:30px;"> ';

for (var _i = 2; _i <= 9; _i++) {
  r += '<ul>';

  for (var j = 1; j <= 10; j++) {
    r += '<li>' + _i + ' * ' + j + ' = ' + _i * j + '</li>';
  }

  r += '</ul>';
}

r += '</div>';
document.getElementById('task_3_result').innerHTML = r; // ФУНКЦІЇ

function sum(a, b) {
  var c = a + b;
  return c;
}

var number1 = sum(5, 7);
var number2 = sum(5, 7);
var summa = sum(number1, number2); //

function sum2(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var c = a + b;
  return c;
}

var summa2 = sum2(number1); //

function sum3(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  function resultText(s) {
    return 'Summ = ' + s; // погана практика
  }

  var c = a + b;
  return resultText(c);
} // resultText(123); - Буде вертати помилку, бо ми не можемо звертатися до елементів всередені функції
// Калькулятор


function calc() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '+';

  if (action === "+") {
    return a + b;
  } else if (action === '-') {
    return a - b;
  } else if (action === '*') {
    return a * b;
  } else if (action === '/') {
    return a / b;
  }
} // Калькулятор №2


function calc2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '+';
  var r = 0;

  if (action === "+") {
    r = a + b;
  } else if (action === '-') {
    r = a - b;
  } else if (action === '*') {
    r = a * b;
  } else if (action === '/') {
    r = a / b;
  }

  return r;
} // const sum3 = function(a,b){  
//     return a  + b;
// }
// console.log(sum3(1,2));
// Стрілочна (спрощена) функція пропускаються function {} return.


var sum4 = function sum4(a, b) {
  return a + b;
};

console.log(sum4(1, 2)); // Дві однакові функції, друга с спрощеним записом.
//1 Додає до числа менше 9 попереду 0

function addZero(n) {
  var r = '';

  if (n < 10) {
    r = '0' + n;
  } else {
    r = '' + n;
  } // return r;


  document.getElementById('task_10_result').innerText = r;
} //2


var addZero2 = function addZero2() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return n < 10 ? '0' + n : '' + n;
};
/** ЧИСТА ФУНКЦІЯ:
 1. Приймає аргументи
 2. При тих самих аргументах завжди однаковий результат
 3. Не повинна мати побічних ефектів.

 ФНКЦІЇ ВИИЩОГО ПОРЯДКУ:
 1. Функція приймає а якості аргументу іншу функцію
 2. Функція повертає а якості виконання іншу функцію

 */


function foo(a, b, qwe) {
  if (a === b) {
    qwe(a + b);
  } else {
    return a * b;
  }
} // function fooCallback(x){
//     alert('Lorem'+x)
// }
// foo(1, 2, fooCallback);


foo(1, 2, function (x) {
  alert('Lorem' + x);
});

function sumAny(number) {
  return function (a) {
    return number + a;
  };
}

var sumTen = sumAny(10);
var sum100 = sumAny(100);
var sum20 = sumAny(20);
console.log(sumTen(2)); // = 10 + 2 

console.log(sum100(35)); // = 100 + 35

console.log(sum20(20)); // = 20 +20

function getAndCheck() {
  var inputId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var number = document.getElementById(inputId).ariaValueMax;

  if (inputId != '') {
    inputId = parseInt(number);

    if (!isNaN(number)) {
      return false;
    }
  } else {
    return false;
  }
}