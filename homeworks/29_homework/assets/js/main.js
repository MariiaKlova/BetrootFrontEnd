function chekIntValue(value) {
    if (value === '') {
        return false;
    }
    value = parseInt(value);
    if (isNaN(value)) {
        return false;
    }
    return value;
}

function showResult(rez, resId) {
    document.getElementById(resId).innerText = rez;
}

// 1 Напиши функцію, яка приймає 2 числа і повертає :-1, якщо перше число менше, ніж друге; 1 - якщо перше число більше, ніж друге; 0 - якщо числа рівні.
function checkTwoNumbers(a = 0, b = 0) {
    let r = 0;
    if (a > b) {
        r = true;
    }
    if (a < b) {
        r = false;
    }
    return r
}

function task1() {
    const firstNumb = chekIntValue(document.getElementById('task1_number1').value);
    const secondNumb = chekIntValue(document.getElementById('task1_number2').value);
    let rez = 0;
    if (firstNumb !== false && secondNumb !== false) {
        if (checkTwoNumbers(firstNumb, secondNumb) === true) {
            rez = 1;
        }
        if (checkTwoNumbers(firstNumb, secondNumb) === false) {
            rez = -1;
        }
    } else {
        rez = 'Введіть коректне число';
    }

    showResult(rez, 'task1_result');
}

// 2 Напиши функцію, яка обчислює факторіал переданого їй числа
//старе:
// function factorialOfNumber(num = 1) {
//     let rez = 1,
//         i = num;
//     while (i > 0) {
//         rez = rez * i;
//         i--;
//     }
//     return rez
// }

function factorialOfNumber(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorialOfNumber(n - 1);
}

function task2() {
    const num = chekIntValue(document.getElementById('task2_number').value);
    let rez;
    if (num !== false) {
        rez = factorialOfNumber(num);
    } else {
        rez = 'Введіть коректне число';
    }
    showResult(rez, 'task2_result');
}


// 3 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function threeNumbersIntoOne(a = 1, b = 1, c = 1) {
    const rez = (a * 100) + (b * 10) + c;
    return rez;
}


function task3() {
    const num1 = chekIntValue(document.getElementById('task3_number1').value);
    const num2 = chekIntValue(document.getElementById('task3_number2').value);
    const num3 = chekIntValue(document.getElementById('task3_number3').value);
    let rez;
    if (num1 !== false && num2 !== false && num3 !== false) {
        rez = threeNumbersIntoOne(num1, num2, num3);
    } else {
        rez = 'Введіть коректні числа';
    }
    showResult(rez, 'task3_result');
}


// 4 Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function rectangleArea(a, b) {
    if (b == '') {
        b = a;
    }
    if (a == '') {
        a = b;
    }
    let x = a * b;
    return x;
}

function task4() {
    const num1 = document.getElementById('task4_number1').value;
    const num2 = document.getElementById('task4_number2').value;
    let rez;
    if (num1 === '' && num2 === '') {
        rez = 'Введіть хоча б одне число';
    } else {
        rez = rectangleArea(num1, num2);
    }
    showResult(rez, 'task4_result');
}

//5 Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function isNumberPerfect(num = 0) {
    let i,
        rez = false,
        x = 0;
    for (i = num - 1; i > 0; i--) {
        if (num % i == 0) {
            x += i;
        }
    }
    if (x == num) {
        rez = true;
    }
    return rez;
}

function task5() {
    const num = chekIntValue(document.getElementById('task5_number').value);
    let rez;
    if (num !== false) {
        if (isNumberPerfect(num) === true) {
            rez = 'Число досконале';
        } else {
            rez = 'Число НЕ досконале';
        }
    } else {
        rez = 'Введіть коректне число';
    }
    showResult(rez, 'task5_result');
}

// 6 Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function perfectNumbersInDiapazon(minNumb, maxNumb) {
    let rez = '';
    let i;
    for (i = minNumb; i <= maxNumb; i++) {
        if (i > 0 && isNumberPerfect(i)) {
            rez += i + ', ';
        }
    }
    return rez;
}

function task6() {
    const num1 = chekIntValue(document.getElementById('task6_number1').value);
    const num2 = chekIntValue(document.getElementById('task6_number2').value);
    if (num1 === false || num2 === false) {
        showResult('Введіть коректні числа', 'task6_result');
        return;
    }
    if (num1 > num2) {
        showResult('Числа введено невірно', 'task6_result');
        return;
    }
    if (perfectNumbersInDiapazon(num1, num2) === '') {
        showResult('В заданому діапазоні немає досконалих чисел', 'task6_result');
        return;
    } else {
        const rez = perfectNumbersInDiapazon(num1, num2);
        showResult(rez, 'task6_result');
        return;
    }

}


// 12 Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

function isYearVisokisniy(year) {
    yearRez = false;
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
        yearRez = true;
    }
    return yearRez;
}

function daysInMonth(mounth, year) {
    switch (mounth) {
        case 4:
        case 6:
        case 9:
        case 11:
            d = 30;
            break;
        case 2:
            d = (isYearVisokisniy(year)) ? 29 : 28; // високісний
            break;
        default:
            d = 31;
            break;
    }
    return d;
}


function task12(day, mounth, year) {
    day = parseInt(day); // день
    mounth = parseInt(mounth); // місяць
    year = parseInt(year); // рік
    if (day < 1 || day > 31 || mounth < 1 || mounth > 12 || year < 1) {
        alert(`Дата вказана невірно`)
        return;
    }
    if (mounth == 12 && day == 31) {
        day = 1;
        mounth = 1;
        year += 1;
    } else {
        if (daysInMonth(mounth, year) == day) {
            day = 1;
            mounth += 1;
        } else {
            day += 1;
        }
    }

    document.getElementById('task_12_result').innerText = ` наступний день: ${day}.${mounth}.${year} `;

}