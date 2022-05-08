// 1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”
function hello() {
    const name = prompt('Введіть своє ім\'я');
    alert(`Привіт, ${name}!`)
}

// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
function year() {
    const year = parseInt(prompt('Введіть рік народження'));
    const rez = 2022 - year;
    alert(`Ваш вік: ${rez} років`);
}

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
function perimeterSquare(){
    const a = parseInt(prompt('Введіть довжину сторони квадрату'));
    const x = a * 4;
    alert(`Результат: ${x}`);
}

// Запитай у користувача радіус кола і виведи площу такої окружності
function circleArea(){
    const a = parseInt(prompt('Введіть радіус кола'));
    const x = 3.14 * (a ** 2);
    alert(`Результат: ${x}`);
}

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
function velocity(){
    const s = parseInt(prompt('Введіть відстань між двома містами'));
    const t = parseInt(prompt('Введіть час на подорож'));
    const v = s / t;
    alert(`Необхідна швидкість: ${v}км/год`);
}

// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
function exchangeRate(){
    const a = parseInt(prompt('Введіть сумму в $'));
    const exc = 0.95;
    const x = a * exc;
    alert(`Результат в евро: ${x}`);
}

// 1) Запросите у пользователя первое число и второе число, возведите первое число в степень второго числа и выведите на экран
function myPow() {
    // debugger
    const num = parseInt(prompt('Введіть перше число'));
    const num2 = parseInt(prompt('Введіть друге число'));
    const rez = num ** num2;
    // або const rez = Math.pow(num, num2)
    alert('Результат першого числа взведеного в ступінь другого числа = ' + rez)
}

//2) Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел
function avgNum() {
    const num = parseInt(prompt('Введіть перше число'));
    const num2 = parseInt(prompt('Введіть друге число'));
    const rez = (num + num2) / 2;
    alert(`Середне арифметичне цих чисел = ${rez}`)
}

// 3) Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.
function square() {
    const num = parseInt(prompt('Введіть сторону квадрату'));
    const rez = num * 2;
    alert('Площа квадрату = ' + rez)
}

// 4) Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.
function km2oml() {
    const km = parseInt(prompt('Введіть відстань в км'));
    const K = 0.621371;
    const ml = km * K;
    alert(`В милях це ${ml} ml`)
}

// 5) Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.
function calc() {
    const num = parseInt(prompt('Вкажіть перше число'));
    const num2 = parseInt(prompt('Вкажіть друге число'));
    const action = prompt('Вкажіть дію');
    let rez;
    if (action === '+') {
        rez = num + num2;
    } else if (action === '-') {
        rez = num - num2
    } else if (action === '*') {
        rez = num * num2;
    } else if (action === '/') {
        rez = num / num2;
    } else {
        alert('Недопустимий символ')
    }
    if (rez != undefined)
        alert(`Результат = ${rez}`)
}

// 6) Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.
function findX() {
    const a = parseInt(prompt('Вкажіть число a'));
    const b = parseInt(prompt('Вкажіть число b'));
    const x = b * (-1) / a;
    alert(` x = ${x}`);
}

// 7) Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.
function timeToDayEnd() {
    const hour = parseInt(prompt('Вкажіть котра година зараз'));
    const minutes = parseInt(prompt('Вкажіть котра хвилина'));
    const minutesTotalLeft = ((24 * 60) - (hour * 60 + minutes));
    const hoursLeft = parseInt(minutesTotalLeft / 60);
    const minutesLeft = minutesTotalLeft - hoursLeft * 60;
    alert(`До кінця дня залишилося ${hoursLeft} годин, ${minutesLeft} хвилин`);
}

// 8) Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).
function digit2() {
    const abc = +prompt('Введіть трьохзначне число');
    const rez = parseInt((abc % 100) / 10);
    alert(`Друга цифра: ${rez}`);
}

//9) Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).
function digit3() {
    const abc = parseInt(prompt('Введіть пятизначне число'));
    const x = abc % 10;
    const y = ((abc - x) / 10);
    const z = x * 10000 + y;
    alert(`Результат: ${z}`);
}


//10) Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.
function myZp() {
    const sumProd = +prompt('Введіть загальну суму продажів за миулий місяць');
    const rez = parseInt(sumProd / 10 + 250);
    alert(`Нарахувати зарплату: ${rez}$`);
}

