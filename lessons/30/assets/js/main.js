//1 Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
function checkTen() {
    let dodatni = 0,
        videmni = 0,
        nuli = 0,
        parni = 0,
        neparni = 0;
    result = '',
        number = 0,
        allNumbers = '',
        i = 0;
    const limit = 10;
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
    result = `Додатні: ${dodatni}, Від'ємні: ${videmni} , Нулі: ${nuli} , Парні: ${parni} , Непарні: ${neparni} `
    document.getElementById('task_1_result').innerHTML = allNumbers + '<br>' + result;
}


//2 якщо ми тиснемо Ок, цикл працює.
function ask() {
    let answer = true;
    while (answer) {
        answer = confirm('Question?')
    }
    alert('End')
}


//3 Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
let r = '<div style="display:flex; flex-wrap:wrap; gap:30px;"> ';
for (let i = 2; i <= 9; i++) {
    r += '<ul>';
    for (let j = 1; j <= 10; j++) {
        r += '<li>' + i + ' * ' + j + ' = ' + (i * j) + '</li>';
    }
    r += '</ul>';
}
r += '</div>';
document.getElementById('task_3_result').innerHTML = r;


// ФУНКЦІЇ

function sum(a, b) {
    let c = a + b;
    return c;
}

const number1 = sum(5, 7);
const number2 = sum(5, 7);

const summa = sum(number1, number2);

//
function sum2(a, b = 10) {
    let c = a + b;
    return c;
}
const summa2 = sum2(number1);


//
function sum3(a, b = 10) {
    function resultText(s) {
        return 'Summ = ' + s; // погана практика
    }
    let c = a + b;
    return resultText(c);
}
// resultText(123); - Буде вертати помилку, бо ми не можемо звертатися до елементів всередені функції


// Калькулятор
function calc(a = 0, b = 0, action = '+') {
    if (action === "+") {
        return a + b;
    } else if (action === '-') {
        return a - b;
    } else if (action === '*') {
        return a * b;
    } else if (action === '/') {
        return a / b;
    }
}
// Калькулятор №2
function calc2(a = 0, b = 0, action = '+') {
    let r = 0;
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
}


// const sum3 = function(a,b){  
//     return a  + b;
// }
// console.log(sum3(1,2));

// Стрілочна (спрощена) функція пропускаються function {} return.
const sum4 = (a, b) => a + b;
console.log(sum4(1, 2));

// Дві однакові функції, друга с спрощеним записом.
//1 Додає до числа менше 9 попереду 0
function addZero(n) {
    let r = '';
    if (n < 10) {
        r = '0' + n;
    } else {
        r = '' + n;
    }
    // return r;
    document.getElementById('task_10_result').innerText = r;
}
//2
const addZero2 = (n = 0) => n < 10 ? '0' + n : '' + n;


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
        qwe(a + b)
    } else {
        return a * b;
    }
}

// function fooCallback(x){
//     alert('Lorem'+x)
// }
// foo(1, 2, fooCallback);

foo(1, 2, x => {
    alert('Lorem' + x)
})

function sumAny(number) {
    return a => number + a;
}

const sumTen = sumAny(10);
const sum100 = sumAny(100);
const sum20 = sumAny(20);

console.log(sumTen(2)); // = 10 + 2 
console.log(sum100(35)); // = 100 + 35
console.log(sum20(20)); // = 20 +20


function getAndCheck (inputId=''){
    const number = document.getElementById(inputId).ariaValueMax;
    if (inputId !=''){
        inputId = parseInt(number); 
         if (!isNaN(number)){
             return false;
         }
    } else {
        return false;
    }
}