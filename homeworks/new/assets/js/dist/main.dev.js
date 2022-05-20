"use strict";

/*
Норма
Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передане кількість секунд.
Зміни часу на передане кількість хвилин.
Зміни часу на передане кількість годин.
Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:30:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
*/
var date = {
  hh: new Date().getHours(),
  mm: new Date().getMinutes(),
  ss: new Date().getSeconds()
};

function viewData() {
  var hours = addZero(date.hh),
      minutes = addZero(date.mm),
      sec = addZero(date.ss);
  html = "\n        <h1>".concat(hours, " : ").concat(minutes, " : ").concat(sec, " </h1>\n        ");
  document.getElementById('one').innerHTML = html;
}

var addZero = function addZero() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return n < 10 ? '0' + n : '' + n;
};

function checkValue(value) {
  if (value === '') {
    alert('Введіть години');
    return false;
  }

  if (isNaN(value)) {
    alert('Введіть години цифрами');
    return false;
  }

  return true;
}

function addHours() {
  var addHh = parseInt(document.getElementById('addHours').value);

  if (checkValue(addHh) !== true) {
    return false;
  }

  var newHours = date.hh + addHh;

  if (newHours > 24) {
    date.hh = newHours % 24;
  } else {
    date.hh += addHh;
  }

  viewData(date.hh);
}

function addMinutes() {
  var addMin = parseInt(document.getElementById('addMinutes').value);

  if (checkValue(addMin) !== true) {
    return false;
  }

  var newMin = date.mm + addMin;

  if (newMin > 60) {
    date.mm = newMin % 60;
    date.hh = (date.hh + Math.floor(newMin / 60)) % 24;
  } else {
    date.mm += addMin;
  }

  viewData(date.hh, date.mm);
}

function addSeconds() {
  var addSec = parseInt(document.getElementById('addSeconds').value);

  if (checkValue(addSec) !== true) {
    return false;
  }

  var newSec = date.ss + addSec;
  var newMin = date.mm + Math.floor(newSec / 60);

  if (newSec > 60) {
    date.ss = newSec % 60;
    date.mm = newMin % 60;
    date.hh = (date.hh + Math.floor(newMin / 60)) % 24;
  } else {
    date.ss += addSec;
  }

  viewData(date.hh, date.mm, date.ss);
}