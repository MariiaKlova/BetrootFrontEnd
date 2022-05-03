"use strict";

// 1
function hello1(name) {
  if (name == '') {
    return false;
  }

  alert('hello, ' + name);
} // 2


function hello2(name) {
  if (name != '') {
    alert('hello, ' + name);
  } else {
    alert('Enter your name');
  }
} // 3


function numCheck(num) {
  if (num < 0) {
    alert('-');
  } else if (num > 0) {
    alert('+');
  } else if (num == 0) {
    alert('0');
  } else {
    alert('Enter number');
  }
} // 4


function emailCheck(email) {
  if (email != '') {
    if (isValidEmail(email)) {
      return true;
    } else {
      alert('Email is not valid');
    }
  } else {
    alert('Enter your email');
  }
} // 5


var numb = 4;
var y = 0;

if (numb <= 12) {
  y = 1;
} else if (numb >= 12 && num < 18 && num != 16) {
  y = 2;
} else if (numb == 16 || num == 25 || num == 27) {
  y = 3;
}

console.log(y); // 6. Високосный год
// год, номер которого кратен 400, — високосный;
// остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
// остальные годы, номер которых кратен 4, — високосные.
// Итого: Либо кратен 400, либо кратен 4 и при єтом не кратен 100

function isLeapYear(year) {
  if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    return true;
  } else {
    return false;
  }
} // 7 Скіліки днів у місяці 30 чи 31


var s = '';
var num = 2;

switch (num) {
  case '1':
    s = '!';
    break;

  case 2:
    s = '@';
    break;
}