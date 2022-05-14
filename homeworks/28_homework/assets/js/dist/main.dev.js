"use strict";

// 1 Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
function task1() {
  var x = parseInt(document.getElementById('task_1_number').value);
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

  document.getElementById('task_1_result').innerText = rez;
} // 2 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).


function task2() {
  var num = document.getElementById('task_2_number').value;
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

  document.getElementById('task_2_result').innerText = rez;
} // 3 Підрахуй суму всіх чисел в заданому користувачем діапазоні.


function task3() {
  var num1 = parseInt(document.getElementById('task_3_number1').value);
  var num2 = parseInt(document.getElementById('task_3_number2').value);
  var minNum = num1 < num2 ? num1 : num2;
  var maxNum = num1 > num2 ? num1 : num2;
  var rez = 0;
  var i = minNum;

  while (i <= maxNum) {
    rez += i;
    i++;
  }

  document.getElementById('task_3_result').innerText = rez;
} // 4 Запитай у користувача 2 числа і знайди найбільший спільний дільник.


function task4() {
  var num1 = parseInt(document.getElementById('task_4_number1').value);
  var num2 = parseInt(document.getElementById('task_4_number2').value);
  var minNum = num1 < num2 ? num1 : num2;
  var i = minNum;

  while (i > 0) {
    if (num1 % i == 0 && num2 % i == 0) {
      document.getElementById('task_4_result').innerText = i;
      break;
    }

    i--;
  }
} // 5 Запитай у користувача число і виведи всі дільники цього числа.


function task5() {
  var num = parseInt(document.getElementById('task_5_number').value); // debugger

  var i = num;
  var rez = '';

  while (i > 0) {
    if (num % i == 0) {
      rez += i + ', ';
    }

    i--;
  }

  document.getElementById('task_5_result').innerText = rez;
} // 6 Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом


function task6() {
  var abcde = document.getElementById('task_6_number').value; //12345

  var e = abcde % 10; // 5

  var abcd = (abcde - e) / 10; //1234

  var d = abcd % 10; //4

  var a = Math.floor(abcde / 10000); //1

  var b = Math.floor(abcde / 1000 % 10); //2

  var rez = a == e && b == d ? 'Поліндром' : 'Не поліндром';
  document.getElementById('task_6_result').innerText = rez;
} // 7 Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:від 200 до 300 - знижка буде 3%;  від 300 до 500 - 5%; від 500 і вище - 7%.


function task7() {
  var x = document.getElementById('task_7_number').value;
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

  document.getElementById('task_7_result').innerText = "\u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0437\u043D\u0438\u0436\u043A\u0438: ".concat(rez);
} // 8 Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


function task8() {
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
  document.getElementById('task_8_result').innerHTML = allNumbers + '<br>' + result;
} // 9 Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.


function task9() {
  var answer = true;
  var i = 0;
  var d;

  while (answer === true) {
    i++;

    switch (i) {
      case 1:
        d = 'Понеділок';
        break;

      case 2:
        d = 'Вівторок';
        break;

      case 3:
        d = 'Середа';
        break;

      case 4:
        d = 'Четверг';
        break;

      case 5:
        d = 'П`ятниця';
        break;

      case 6:
        d = 'Субота';
        break;

      case 7:
        d = 'Неділя';
        i = 0;
        break;
    }

    answer = confirm("\u0414\u0435\u043D\u044C \u0442\u0438\u0436\u043D\u044F: ".concat(d, ".  \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"));
  }
} // 10 Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").


function task10() {
  var from = 0,
      to = 100,
      mid = 50;

  do {
    answer = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E < ".concat(mid, "? \u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C: '>' \u0432\u0431\u043E '<' \u0430\u0431\u043E '='"));

    if (answer == '>') {
      from = mid; //50
      // після from або to

      mid = Math.floor((to - from) / 2 + mid);
    }

    if (answer == '<') {
      to = mid; //50
      // після from або to

      mid = Math.floor((to - from) / 2 + from);
    }
  } while (answer !== '=');

  {
    alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(mid));
  }
} //11 Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


function task11() {
  var r = '<div style="display:flex; flex-wrap:wrap; gap:30px;"> ';

  for (var _i = 2; _i <= 9; _i++) {
    r += '<ul>';

    for (var j = 1; j <= 10; j++) {
      r += '<li>' + _i + ' * ' + j + ' = ' + _i * j + '</li>';
    }

    r += '</ul>';
  }

  r += '</div>';
  document.getElementById('task_11_result').innerHTML = r;
} // 12 Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.


function task12() {
  var day = parseInt(document.getElementById('task_12_number1').value); // день

  var mounth = parseInt(document.getElementById('task_12_number2').value); // місяць

  var year = parseInt(document.getElementById('task_12_number3').value); // рік

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

  document.getElementById('task_12_result').innerText = " \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C: ".concat(day, ".").concat(mounth, ".").concat(year, " ");
} // 13 Определить количество цифр в введенном числе


function task13() {
  var num = document.getElementById('task_13_number').value;

  for (i = 0; num > 1; i++) {
    num /= 10;
  }

  document.getElementById('task_13_result').innerText = i;
} // 14 Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.


function task14() {
  debugger;

  do {
    var num1 = parseInt(prompt('Вкжіть перше число'));
    var num2 = parseInt(prompt('Вкжіть друге число'));
    var num3 = prompt('Вкжіть дію');
    var _rez = 0;

    switch (num3) {
      case "+":
        _rez = num1 + num2;
        break;

      case "-":
        _rez = num1 - num2;
        break;

      case "*":
        _rez = num1 * num2;
        break;

      case "/":
        _rez = num1 / num2;
        break;

      default:
        _rez = 'Невірне значення';
        break;
    }

    answer = confirm("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(_rez, ". \u0411\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0438 \u0449\u0435 \u043E\u0434\u043D\u0438\u043D \u043F\u0440\u0438\u043A\u043B\u0430\u0434?"));
  } while (answer == true);

  {}
  alert('End');
} //15 Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).


function task15() {
  var number = document.getElementById('task_15_number1').value;
  var numSlide = document.getElementById('task_15_number2').value;
  var num = number;

  for (i = 0; num > 1; i++) {
    num /= 10;
  }

  if (i < numSlide) {
    alert('Error');
  }

  var nuli = Math.pow(10, i - numSlide);
  var x = number % nuli;
  var y = Math.floor(number / nuli);
  var rez = x * Math.pow(10, numSlide) + y;
  document.getElementById('task_15_result').innerText = rez;
} //16 Вывести # столько раз, сколько указал пользователь.


function task16() {
  var num = parseInt(document.getElementById('task_16_number').value);
  var rez = '';
  var i = 0;

  while (i < num) {
    rez += '#';
    i++;
  }

  document.getElementById('task_16_result').innerText = rez;
} // 17 Пользователь ввел число, а на экран вывелись все числа от введенного до 0.


function task17() {
  var num = parseInt(document.getElementById('task_17_number').value);
  var rez = '';
  var i = num;

  while (i >= 0) {
    rez += i + ' ';
    i--;
  }

  document.getElementById('task_17_result').innerText = rez;
} // 18  Запросить число и степень. Возвести число в указанную степень и вывести результат.


function task18() {
  var num1 = parseInt(document.getElementById('task_18_number1').value);
  var num2 = parseInt(document.getElementById('task_18_number2').value);
  var rez = Math.pow(num1, num2);
  document.getElementById('task_18_result').innerText = rez;
} // 19 Запросить 2 числа и найти все общие делители.


function task19() {
  var num1 = parseInt(document.getElementById('task_19_number1').value);
  var num2 = parseInt(document.getElementById('task_19_number2').value);
  var rez = '';
  var minNum = num1 < num2 ? num1 : num2;
  var i = 1;

  while (i <= minNum / 2) {
    if (num1 % i == 0 && num2 % i == 0) {
      rez += i + ', ';
    }

    i++;
  }

  if (minNum === num1) {
    if (num2 % num1 == 0) {
      rez += num1;
    }
  } else {
    if (num1 % num2 == 0) {
      rez += num2;
    }
  }

  document.getElementById('task_19_result').innerText = rez;
} // 20 Посчитать факториал введенного пользователем числа.


function task20() {
  var num = parseInt(document.getElementById('task_20_number').value);
  var rez = 1;
  var i = num;

  while (i > 0) {
    rez = rez * i;
    i--;
  }

  document.getElementById('task_20_result').innerText = rez;
} // 21 Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.


function task21() {
  do {
    rez = prompt('Скільки буде 2 + 2 * 2?');
  } while (rez !== '6');
} // 22 Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.


function task22() {
  var num = parseInt(document.getElementById('task_22_number').value);
  var i = 0;
  rez = num;

  do {
    rez = rez / 2;
    i++;
  } while (rez >= 50);

  document.getElementById('task_22_result').innerText = "\u0427\u0438\u0441\u043B\u043E ".concat(num, " \u0431\u0443\u043B\u043E \u043F\u043E\u0434\u0456\u043B\u0435\u043D\u043E \u043D\u0430\u0432\u043F\u0456\u043B  ").concat(i, " \u0440\u0430\u0437\u0456\u0432 \u0456 \u0443 \u0437\u0430\u043B\u0438\u0448\u043A\u0443 \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C ").concat(rez);
} // 23 Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.


function task23() {
  var num = parseInt(document.getElementById('task_23_number').value);
  var rez = '';

  for (var _i2 = 1; _i2 <= 100; _i2++) {
    if (_i2 % num == 0) {
      rez += _i2 + ', ';
    }
  }

  document.getElementById('task_23_result').innerText = rez;
} // 24 Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.


function task24() {
  var minNum = parseInt(document.getElementById('task_24_number1').value);
  var maxNum = parseInt(document.getElementById('task_24_number2').value);
  var rez = '';

  for (var _i3 = minNum; _i3 <= maxNum; _i3 = _i3 + 4) {
    if (_i3 !== minNum) {
      rez += _i3 + ', ';
    }
  }

  document.getElementById('task_24_result').innerText = rez;
} // 25  Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.


function task25() {
  var num = parseInt(document.getElementById('task_25_number').value);
  var rez = 'Просте';

  for (var _i4 = num - 1; _i4 > 1; _i4--) {
    if (num % _i4 == 0) {
      rez = 'Не просте ';
    }
  }

  document.getElementById('task_25_result').innerText = rez;
}