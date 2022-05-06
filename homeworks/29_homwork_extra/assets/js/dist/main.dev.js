"use strict";

// Збільшення числа на 1 від 0 до 9
function func1() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}
/*  Дуже погана практика
let i = 1;
for( ; i<=10 ; ){
    console.log(i);
    i++; //має значення де встановлено
}
*/
// Збільшення числа на 2 від 0 до 9


function func2() {
  for (var i = 0; i < 10; i += 2) {
    console.log(i);
  }
} // Для вказання року від теперішнього, до 60 назад. 
// Для форми реєстрації


function func3() {
  var year = new Date().getFullYear();

  for (var i = year; i > year - 60; i--) {
    console.log(i);
  }
} // Інкременція числа від 0, доки воно не досягне 10


function func4() {
  var i = 0;

  while (i < 10) {
    console.log(i);
    i++;
  }
} //Цикл, доки нажимаємо ОК, буде виконуватись цикл. 


function func5() {
  var answer = true;

  while (answer === true) {
    answer = confirm('Question');
  }
} // Цикл, доки нажимаємо ОК, буде виконуватись цикл. 
// З  do {} while (), робиться спочатку перевірка, а потім запускається скрипт;


function func6() {
  var answer = false;

  do {
    answer = confirm('Question');
  } while (answer === true);
} //Вывести # столько раз, сколько указал пользователь.


function task1() {
  var num = parseInt(document.getElementById('task_1_number').value);
  var rez = '';
  var i = 0;

  while (i < num) {
    rez += '#';
    i++;
  }

  document.getElementById('task_1_result').innerText = rez;
}

function task2() {
  var num = parseInt(document.getElementById('task_2_number').value);
  var rez = '';
  var i = num;

  while (i >= 0) {
    rez += i + ' ';
    i--;
  }

  document.getElementById('task_2_result').innerText = rez;
}

function task3() {
  var num1 = parseInt(document.getElementById('task_3_number1').value);
  var num2 = parseInt(document.getElementById('task_3_number2').value);
  var rez = Math.pow(num1, num2);
  document.getElementById('task_3_result').innerText = rez;
}

function task4() {
  var num1 = parseInt(document.getElementById('task_4_number1').value);
  var num2 = parseInt(document.getElementById('task_4_number2').value);
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

  document.getElementById('task_4_result').innerText = rez;
}