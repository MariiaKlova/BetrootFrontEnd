"use strict";

function hello() {
  var name = prompt('Введіть своє ім\'я');
  alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(name, "!"));
}

function year() {
  var year = parseInt(prompt('Введіть рік народження'));
  var rez = 2022 - year;
  alert("\u0412\u0430\u0448 \u0432\u0456\u043A: ".concat(rez, " \u0440\u043E\u043A\u0456\u0432"));
}

function perimeterSquare() {
  var a = parseInt(prompt('Введіть довжину сторони квадрату'));
  var x = a * 4;
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(x));
}

function circleArea() {
  var a = parseInt(prompt('Введіть радіус кола'));
  var x = 3.14 * Math.pow(a, 2);
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(x));
}

function velocity() {
  var s = parseInt(prompt('Введіть відстань між двома містами'));
  var t = parseInt(prompt('Введіть час на подорож'));
  var v = s / t;
  alert("\u041D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0430 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C: ".concat(v, "\u043A\u043C/\u0433\u043E\u0434"));
}

function exchangeRate() {
  var a = parseInt(prompt('Введіть сумму в $'));
  var exc = 0.95;
  var x = a * exc;
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u0435\u0432\u0440\u043E: ".concat(x));
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