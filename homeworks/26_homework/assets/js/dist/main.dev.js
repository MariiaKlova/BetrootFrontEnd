"use strict";

// 1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”
function hello() {
  var name = prompt('Введіть своє ім\'я');
  alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(name, "!"));
} // Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;


function year() {
  var year = parseInt(prompt('Введіть рік народження'));
  var rez = 2022 - year;
  alert("\u0412\u0430\u0448 \u0432\u0456\u043A: ".concat(rez, " \u0440\u043E\u043A\u0456\u0432"));
} // Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата


function perimeterSquare() {
  var a = parseInt(prompt('Введіть довжину сторони квадрату'));
  var x = a * 4;
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(x));
} // Запитай у користувача радіус кола і виведи площу такої окружності


function circleArea() {
  var a = parseInt(prompt('Введіть радіус кола'));
  var x = 3.14 * Math.pow(a, 2);
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(x));
} // Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.


function velocity() {
  var s = parseInt(prompt('Введіть відстань між двома містами'));
  var t = parseInt(prompt('Введіть час на подорож'));
  var v = s / t;
  alert("\u041D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0430 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C: ".concat(v, "\u043A\u043C/\u0433\u043E\u0434"));
} // Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.


function exchangeRate() {
  var a = parseInt(prompt('Введіть сумму в $'));
  var exc = 0.95;
  var x = a * exc;
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u0435\u0432\u0440\u043E: ".concat(x));
} // 1) Запросите у пользователя первое число и второе число, возведите первое число в степень второго числа и выведите на экран


function myPow() {
  // debugger
  var num = parseInt(prompt('Введіть перше число'));
  var num2 = parseInt(prompt('Введіть друге число'));
  var rez = Math.pow(num, num2); // або const rez = Math.pow(num, num2)

  alert('Результат першого числа взведеного в ступінь другого числа = ' + rez);
} //2) Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел


function avgNum() {
  var num = parseInt(prompt('Введіть перше число'));
  var num2 = parseInt(prompt('Введіть друге число'));
  var rez = (num + num2) / 2;
  alert("\u0421\u0435\u0440\u0435\u0434\u043D\u0435 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u043D\u0435 \u0446\u0438\u0445 \u0447\u0438\u0441\u0435\u043B = ".concat(rez));
} // 3) Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.


function square() {
  var num = parseInt(prompt('Введіть сторону квадрату'));
  var rez = num * 2;
  alert('Площа квадрату = ' + rez);
} // 4) Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.


function km2oml() {
  var km = parseInt(prompt('Введіть відстань в км'));
  var K = 0.621371;
  var ml = km * K;
  alert("\u0412 \u043C\u0438\u043B\u044F\u0445 \u0446\u0435 ".concat(ml, " ml"));
} // 5) Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.


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
} // 6) Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.


function findX() {
  var a = parseInt(prompt('Вкажіть число a'));
  var b = parseInt(prompt('Вкажіть число b'));
  var x = b * -1 / a;
  alert(" x = ".concat(x));
} // 7) Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.


function timeToDayEnd() {
  var hour = parseInt(prompt('Вкажіть котра година зараз'));
  var minutes = parseInt(prompt('Вкажіть котра хвилина'));
  var minutesTotalLeft = 24 * 60 - (hour * 60 + minutes);
  var hoursLeft = parseInt(minutesTotalLeft / 60);
  var minutesLeft = minutesTotalLeft - hoursLeft * 60;
  alert("\u0414\u043E \u043A\u0456\u043D\u0446\u044F \u0434\u043D\u044F \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044F ".concat(hoursLeft, " \u0433\u043E\u0434\u0438\u043D, ").concat(minutesLeft, " \u0445\u0432\u0438\u043B\u0438\u043D"));
} // 8) Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).


function digit2() {
  var abc = +prompt('Введіть трьохзначне число');
  var rez = parseInt(abc % 100 / 10);
  alert("\u0414\u0440\u0443\u0433\u0430 \u0446\u0438\u0444\u0440\u0430: ".concat(rez));
} //9) Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).


function digit3() {
  var abc = parseInt(prompt('Введіть пятизначне число'));
  var x = abc % 10;
  var y = (abc - x) / 10;
  var z = x * 10000 + y;
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(z));
} //10) Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.


function myZp() {
  var sumProd = +prompt('Введіть загальну суму продажів за миулий місяць');
  var rez = parseInt(sumProd / 10 + 250);
  alert("\u041D\u0430\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0443: ".concat(rez, "$"));
}