"use strict";

// 1 Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді
function adding01And02() {
  console.log((0.1 + 0.2).toFixed(1));
} // 2 Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді


function addStringAndNumber() {
  var a = '1';
  var b = 2;
  var rez = parseInt(a) + b;
  console.log(rez);
} // 3 Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.


function flashDrive() {
  var flash = parseInt(prompt('Вкжіть обсяг флешки в Гб'));
  var rez = Math.floor(flash * 1024 / 820);
  alert("\u041D\u0430 \u0444\u043B\u0435\u0448\u043A\u0443 \u043F\u043E\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F ".concat(rez, " \u0444\u0430\u0439\u043B\u0456\u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C 820 \u041C\u0431"));
} // 4 Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.


function calcChocolate() {
  var cash = parseFloat(prompt('Вкжіть суму грошей в гаманці'));
  var prise = parseFloat(prompt('Вкжіть ціну однієї шоколадки'));
  var chocolate = Math.floor(cash / prise);
  var rez = (cash % prise).toFixed(1);
  alert("\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u0442\u0438 ".concat(chocolate, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A \u0456 \u0443 \u0432\u0430\u0441 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F \u0449\u0435 ").concat(rez, " \u0433\u0440\u043D"));
} // 5  Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення)


function backwardsNum() {
  var abc = +prompt('Введіть тризначне число'); //123

  var a = abc % 10; //3

  var ab = (abc - a) / 10; //12

  var b = ab % 10; //2

  var c = (ab - b) / 10; //1

  var rez = a * 100 + b * 10 + c;
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(rez));
} // 6 Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.


function deposit() {
  var x = parseInt(prompt('Вкжіть суму вкладу')); //100

  var y = parseInt(prompt('Вкжіть на який термін вклад у місяцях')); //2

  var a = x * 0.05; // річні

  var b = a / 12; // відсотки на 1 місяць

  var rez = (b * y).toFixed(2); // нараховані відсотки

  alert("\u0421\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432: ".concat(rez));
} // 7 Що повернуть вираження:


function returnExpression() {
  var a = 2 && 0 && 3;
  var b = 2 || 0 || 3;
  var c = 2 && 0 || 3;
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(a, ", ").concat(b, ", ").concat(c));
} // Завдання з використанням IF
// 1 Запитати у користувача число та визначити чи воно позитивне, негативне або нуль


function task1() {
  var num = document.getElementById('task_1_number').value;

  if (num > 0) {
    rez = 'Позитивне';
  }

  if (num < 0) {
    rez = 'Негативне';
  }

  if (num == 0) {
    rez = '0';
  }

  document.getElementById('task_1_result').innerText = rez;
} //2 Запитати у користувача його вік та перевірити вірність вказаних даних (0-120 років)


function task2() {
  var num = document.getElementById('task_2_number').value;
  var rez = num;

  if (num > 120 || num <= 0) {
    rez = 'Неможливий вік';
  }

  document.getElementById('task_2_result').innerText = rez;
} // 3 Запитати у користувача число та вивести його модуль (|7| = 7, |-7| = 7)


function task3() {
  var num = document.getElementById('task_3_number').value;

  if (num >= 0) {
    rez = num;
  }

  if (num < 0) {
    rez = num * -1;
  }

  document.getElementById('task_3_result').innerText = rez;
} // 4 Запитати у користувача час (години, хвилини, секунди) та перевірити коректність вказаних даних


function isTimeValid() {
  var hours = document.getElementById('task_4_number1').value;
  var minutes = document.getElementById('task_4_number2').value;
  var sec = document.getElementById('task_4_number3').value;
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

  if (sec < 0 || sec > 60) {
    errText = errText + "Вкажіть секунди коректно [0..60]. ";
  }

  if (errText !== '') {
    document.getElementById('task_4_result').innerText = errText;
  } else {
    document.getElementById('task_4_result').innerText = 'Час: ' + hours + ':' + minutes + ':' + sec;
  }
} // 5 Запитати координати крапки (x, y) та визначити номер чверті, в яку потрапила крапка. Треба врахувати випадки, коли крапка втрапита на осі або в початок координат.


function task5() {
  var x = document.getElementById('task_5_number1').value;
  var y = document.getElementById('task_5_number2').value;
  var rez = '';

  if (x == 0) {
    if (y > 0) {
      rez += 'Точка лежить на осі координат Y між 1 і 2 чвертю';
    }

    if (y <= 0) {
      rez += 'Точка лежить на осі координат Y між 3 і 4 чвертю';
    }
  }

  if (x > 0) {
    if (y > 0) {
      rez += 'Точка лежить в 1 чверті осі координат';
    }

    if (y < 0) {
      rez += 'Точка лежить в 4 чверті осі координат';
    }

    if (y == 0) {
      rez += 'Точка лежить осі координат X між 1 і 4 чвертю';
    }
  }

  if (x < 0) {
    if (y > 0) {
      rez += 'Точка лежить в 2 чверті осі координат';
    }

    if (y < 0) {
      rez += 'Точка лежить в 3 чверті осі координат';
    }

    if (y == 0) {
      rez += 'Точка лежить осі координат X між 2 і 3 чвертю';
    }
  }

  if (x == 0 && y == 0) {
    rez = 'Точка лежить на початку осі координат';
  }

  if (x == '' || y == '') {
    rez = 'Введіть координати у цифрах';
  }

  document.getElementById('task_5_result').innerText = rez;
} // Завдання з використанням SWITCH
// 1 Запитати у користувача номер місяця та вивести його назву


function task_6() {
  var num = document.getElementById('task_6_number').value;
  var rez;

  switch (num) {
    case '1':
      rez = 'Січень';
      break;

    case '2':
      rez = 'Лютий';
      break;

    case '3':
      rez = 'Березень';
      break;

    case '4':
      rez = 'Квітень';
      break;

    case '5':
      rez = 'Травень';
      break;

    case '6':
      rez = 'Червень';
      break;

    case '7':
      rez = 'Липень';
      break;

    case '8':
      rez = 'Серпень';
      break;

    case '9':
      rez = 'Вересень';
      break;

    case '10':
      rez = 'Жовтень';
      break;

    case '11':
      rez = 'Листопад';
      break;

    case '12':
      rez = 'Грудень';
      break;

    default:
      rez = 'Невірне значення';
      break;
  }

  document.getElementById('task_6_result').innerText = rez;
} // Реалізувати калькулятор. Користувач вказує 2 числа та знак (+ - * /)


function task_7() {
  var num1 = parseInt(document.getElementById('task_7_number1').value);
  var num2 = parseInt(document.getElementById('task_7_number2').value);
  var num3 = document.getElementById('task_7_number3').value;
  var rez;

  switch (num3) {
    case '+':
      rez = num1 + num2;
      break;

    case '-':
      rez = num1 - num2;
      break;

    case '*':
      rez = num1 * num2;
      break;

    case '/':
      rez = num1 / num2;
      break;

    default:
      rez = 'Невірне значення';
      break;
  }

  document.getElementById('task_7_result').innerText = rez;
} // Завдання з використанням тернарного оператору
// 1 Запитати 2 числа та вивести більше з них


function task_8() {
  var x = parseInt(document.getElementById('task_8_number1').value);
  var y = parseInt(document.getElementById('task_8_number2').value);
  var rez = x > y ? x : y;
  document.getElementById('task_8_result').innerText = rez;
} // 2 Запитати одне число та перевірити чи воно кратне 5 або ні


function task_9() {
  var x = parseInt(document.getElementById('task_9_number').value);
  var rez = x % 5 == 0 ? 'Кратне 5' : 'Не кратне 5';
  document.getElementById('task_9_result').innerText = rez;
} //3 Запитати у користувача назву планети. Якщо користувач вказав "Земля" або "земля", вивести "Привіт, землянин!", в інших випадках вивести "Привіт, іншопланетянин!"


function task_10() {
  var x = document.getElementById('task_10').value;
  var rez = x == 'Земля' || x == 'земля' ? 'Привіт, землянин!' : 'Привіт, іншопланетянин';
  document.getElementById('task_10_result').innerText = rez;
} // ------------------------- Додаткові
//1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...)


function func1() {
  var x = parseInt(document.getElementById('func1_number').value);
  var rez;

  if (x <= 0 || x == '') {
    rez = 'Невірно';
  }

  if (x >= 0 && x < 12) {
    rez = 'Дитина';
  }

  if (x >= 12 && x < 18) {
    rez = 'Підліток';
  }

  if (x >= 18 && x < 60) {
    rez = 'Дорослий';
  }

  if (x >= 60) {
    rez = 'Пенсіонер';
  }

  document.getElementById('func1_result').innerText = rez;
} // 2 Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).


function func2() {
  var num = document.getElementById('func2_number').value;
  var rez;

  switch (num) {
    case '1':
      rez = '!';
      break;

    case '2':
      rez = '@';
      break;

    case '3':
      rez = '#';
      break;

    case '4':
      rez = '$';
      break;

    case '5':
      rez = '%';
      break;

    case '6':
      rez = '^';
      break;

    case '7':
      rez = '&';
      break;

    case '8':
      rez = 'Сер*пень';
      break;

    case '9':
      rez = '(';
      break;

    case '0':
      rez = ')';
      break;

    default:
      rez = 'Невірне значення';
      break;
  }

  document.getElementById('func2_result').innerText = rez;
} // 3 Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.


function func3() {
  var abc = document.getElementById('func3_number').value; //123

  var a = abc % 10; //3

  var ab = (abc - a) / 10; //12

  var b = ab % 10; //2

  var c = (ab - b) / 10; //1

  var rez = a == b || a == c || b == c ? 'Число містить однакові числа' : 'Число НЕ містить однакові числа';
  document.getElementById('func3_result').innerText = rez;
} // 4 Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100


function func4() {
  var x = document.getElementById('func4_number').value;
  var rez = x % 400 == 0 || x % 4 == 0 && x % 100 !== 0 ? 'Високісний рік' : 'Не високісний рік';
  document.getElementById('func4_result').innerText = rez;
} // 5 Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.


function func5() {
  var abcde = document.getElementById('func5_number').value; //12345

  var e = abcde % 10; // 5

  var abcd = (abcde - e) / 10; //1234

  var d = abcd % 10; //4

  var a = Math.floor(abcde / 10000); //1

  var b = Math.floor(abcde / 1000 % 10); //2

  var rez = a == e && b == d ? 'Поліндром' : 'Не поліндром';
  document.getElementById('func5_result').innerText = rez;
} // 6 Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.


function func6() {
  var x = document.getElementById('func6_number1').value;
  var y = document.getElementById('func6_number2').value;
  debugger;
  var rez;
  var EUR = 0.95;
  var UAN = 29.25;
  var AZN = 1.7;

  switch (y) {
    case 'EUR':
      rez = x * EUR;
      break;

    case 'UAN':
      rez = x * UAN;
      break;

    case 'AZN':
      rez = x * AZN;
      break;

    default:
      rez = 'Невірне значення';
      break;
  }

  document.getElementById('func6_result').innerText = rez;
} // 7 Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%


function func7() {
  var x = document.getElementById('func7_number').value;
  var rez;

  if (x < 200) {
    rez = "\u0417\u043D\u0438\u0436\u043A\u0438 \u043D\u0435\u043C\u0430, \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438: ".concat(x);
  }

  if (x >= 200 && x < 300) {
    rez = x - x * 0.02;
  }

  if (x >= 300 && x < 500) {
    rez = x - x * 0.05;
  }

  if (x >= 500) {
    rez = x - x * 0.07;
  }

  document.getElementById('func7_result').innerText = "\u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0437\u043D\u0438\u0436\u043A\u0438: ".concat(rez);
} // 8 Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат


function func8() {
  var a = document.getElementById('func8_number1').value;
  var b = document.getElementById('func8_number2').value;
  var rez = a / 2 / 3.14 <= b / 4 / 2 ? 'Таке коло поміститься в квадрат' : 'Таке коло НЕ поміститься в квадрат';
  document.getElementById('func8_result').innerText = rez;
} // 9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.


function func9() {
  alert('Дайте відповіді на 3 наступні питання:');
  var quest_1 = prompt('Що було першим: курка чи яйце? \r\n Варіанти відповіді:\r\n а) Курка \r\n b) Яйце \r\n c) Обидві відповіді вірні');
  var quest_2 = prompt('Волк волку волк? \r\n Варіанти відповіді:\r\n а) Волк \r\n b) Не волк \r\n c) Все что не волк - не волк');
  var quest_3 = prompt('А ви знаєте звідки на Білорусь готувалося нападеніє? \r\n Варіанти відповіді:\r\n а) А я вам сейчас покажу \r\n b) А я карту приніс  \r\n c) Я знаю того, хто знає ');
  rez = 0;

  if (quest_1 == 'a') {
    rez += 2;
  }

  if (quest_2 == 'a') {
    rez += 2;
  }

  if (quest_3 == 'c') {
    rez += 2;
  }

  alert("\u0412\u0438 \u043D\u0430\u0431\u0440\u0430\u043B\u0438: ".concat(rez, " \u0431\u0430\u043B\u0456\u0432"));
  document.getElementById('func9_result').innerText = rez;
} // 0 Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.


function func10() {
  var day = parseInt(document.getElementById('func10_number1').value); // день

  var mounth = parseInt(document.getElementById('func10_number2').value); // місяць

  var year = parseInt(document.getElementById('func10_number3').value); // рік

  var d, m, y;

  switch (mounth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      d = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      d = 30;
      break;

    case 2:
      d = year % 400 == 0 || year % 4 == 0 && year % 100 !== 0 ? 29 : 28; // високісний

      break;

    default:
      d = 'Invalid value';
      break;
  }

  if (mounth == 12 && day == 31) {
    day = 1;
    mounth = 1;
    year += 1;
  } else {
    if (d == day) {
      day = 1;
      mounth += 1;
    } else {
      day += 1;
    }
  }

  document.getElementById('func10_result').innerText = " \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C: ".concat(day, ".").concat(mounth, ".").concat(year, " ");
}