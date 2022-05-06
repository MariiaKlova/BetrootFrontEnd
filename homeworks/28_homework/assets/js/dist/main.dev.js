"use strict";

// 1
function adding01And02() {
  console.log((0.1 + 0.2).toFixed(1));
} // 2


function addStringAndNumber() {
  var a = '1';
  var b = 2;
  var rez = parseInt(a) + b;
  console.log(rez);
} // 3


function flashDrive() {
  var flash = parseInt(prompt('Вкжіть обсяг флешки в Гб'));
  var rez = Math.floor(flash * 1024 / 820);
  alert("\u041D\u0430 \u0444\u043B\u0435\u0448\u043A\u0443 \u043F\u043E\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F ".concat(rez, " \u0444\u0430\u0439\u043B\u0456\u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C 820 \u041C\u0431"));
} // 4


function calcChocolate() {
  var cash = parseFloat(prompt('Вкжіть суму грошей в гаманці'));
  var prise = parseFloat(prompt('Вкжіть ціну однієї шоколадки'));
  var chocolate = Math.floor(cash / prise);
  var rez = (cash % prise).toFixed(1);
  alert("\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u0442\u0438 ".concat(chocolate, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A \u0456 \u0443 \u0432\u0430\u0441 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F \u0449\u0435 ").concat(rez, " \u0433\u0440\u043D"));
} // 5


function backwardsNum() {
  var abc = +prompt('Введіть тризначне число'); //123

  var a = abc % 10; //3

  var ab = (abc - a) / 10; //12

  var b = ab % 10; //2

  var c = (ab - b) / 10; //1

  var rez = a * 100 + b * 10 + c;
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(rez));
} // 6


function deposit() {
  var x = parseInt(prompt('Вкжіть суму вкладу')); //100

  var y = parseInt(prompt('Вкжіть на який термін вклад у місяцях')); //2

  var a = x * 0.05; // річні

  var b = a / 12; // відсотки на 1 місяць

  var rez = (b * y).toFixed(2); // нараховані відсотки

  alert("\u0421\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432: ".concat(rez));
} // 7


function task7() {
  var a = 2 && 0 && 3;
  var b = 2 || 0 || 3;
  var c = 2 && 0 || 3;
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(a, ", ").concat(b, ", ").concat(c));
} // 8
// function calc() {
//     console.log();
// }
// 9
// function calc() {
//     console.log();
// }
// 4 Завдання з використанням IF 


function isTimeValid() {
  var hours = prompt('Вкжіть години');
  var minutes = prompt('Вкжіть хвилини');
  var sec = prompt('Вкжіть секунди');
  var errText = '';

  if (hours == '') {
    errText += 'Введіть години. ';
  } else {
    hours = parseInt(hours);
  }

  if (isNaN(hours)) {
    errText += 'Вкажіть години у цифрах. ';
  }

  if (hours < 0 || hours > 24) {
    errText = errText + 'Вкажіть години коректно [0..23]. ';
  }

  if (minutes == '') {
    errText += 'Введіть хвилини. ';
  } else {
    minutes = parseInt(minutes);
  }

  if (isNaN(minutes)) {
    errText += "Вкажіть хвилини у цифрах. ";
  }

  if (minutes < 0 || minutes > 60) {
    errText += +"Вкажіть хвилини коректно [0..60]. ";
  }

  if (sec == '') {
    errText += 'Введіть секунди. ';
  } else {
    sec = parseInt(sec);
  }

  if (isNaN(sec)) {
    errText += "Вкажіть секунди у цифрах. ";
  }

  if (sec < 0 || minutes > 60) {
    errText = errText + "Вкажіть секунди коректно [0..60]. ";
  }

  if (errText !== '') {
    alert(errText);
  } else {
    alert('Час: ' + hours + ':' + minutes + ':' + sec);
  }
}