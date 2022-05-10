// 1 Створи функцію, яка буде виводити кількість переданих їй аргументів.
function task1() {

}

// 2 Напиши функцію, яка приймає 2 числа і повертає :-1, якщо перше число менше, ніж друге; 1 - якщо перше число більше, ніж друге; 0 - якщо числа рівні.
function task2(a, b) {
    let r = 0;
    if (a < b) {
        r = -1;
    }
    if (a > b) {
        r = 1;
    }
    document.getElementById('task2_result').innerText = r;
}

// 3 Напиши функцію, яка обчислює факторіал переданого їй числа
function task3(num) {
    let rez = 1;
    let i = parseInt(num);
    while (i > 0) {
        rez = rez * i;
        i--;
    }
    document.getElementById('task3_result').innerText = rez;
}

// 4 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function task4(a, b, c) {
    let x = `${a}${b}${c}`; //XP

    document.getElementById('task4_result').innerText = x;
}


// 5
function task5(a, b) {
    if (b == '') {
        b = a;
    }
    if (a == '') {
        a = b;
    }
    let x = a * b;

    document.getElementById('task5_result').innerText = x;
}

//6 Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function task6(a) {
    let rez = 'Не досконале число',
        x = 0;
    a = parseInt(a);

    for (i = a - 1; i > 0; i--) {
        if (a % i == 0) {
            x += i;
        }
    }
    if (x == a) {
        rez = 'Досконале число';
    }
    document.getElementById('task6_result').innerText = rez;
}

// 7 Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function isNumberPerfect(a) {
    let rez = false,
        x = 0;
    a = parseInt(a);
    for (i = a - 1; i > 0; i--) {
        if (a % i == 0) {
            x += i;
        }
    }
    if (x == a) {
        rez = true;
    }
    return rez;
}

function task7(minNumb, maxNumb) {
    let rez = '';
    minNumb = parseInt(minNumb);
    maxNumb = parseInt(maxNumb);
    if (minNumb > maxNumb) {
        alert('Числа введено невірно');
    }
    for (n = minNumb; n <= maxNumb; n++) {

        if (n > 0 && isNumberPerfect(n)) {
            rez += n + ', ';
        }
    }
    document.getElementById('task7_result').innerText = rez;
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
    } else {
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
}







