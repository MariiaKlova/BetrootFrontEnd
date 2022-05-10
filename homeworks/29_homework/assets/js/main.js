// 1 Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
function task1() {
    const x = parseInt(document.getElementById('task_1_number').value);
    let rez;
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
}

// 2 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
function task2() {
    const num = document.getElementById('task_2_number').value;
    let rez;
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
}

// 3 Підрахуй суму всіх чисел в заданому користувачем діапазоні.
function task3() {
    const num1 = parseInt(document.getElementById('task_3_number1').value);
    const num2 = parseInt(document.getElementById('task_3_number2').value);
    const minNum = num1 < num2 ? num1 : num2;
    const maxNum = num1 > num2 ? num1 : num2;
    let rez = 0;
    let i = minNum;
    while (i <= maxNum) {
        rez += i;
        i++;
    }
    document.getElementById('task_3_result').innerText = rez;
}

// 4 Запитай у користувача 2 числа і знайди найбільший спільний дільник.
function task4() {
    const num1 = parseInt(document.getElementById('task_4_number1').value);
    const num2 = parseInt(document.getElementById('task_4_number2').value);
    const minNum = num1 < num2 ? num1 : num2;
    let i = minNum;
    while (i > 0) {
        if ((num1 % i == 0) && (num2 % i == 0)) {
            document.getElementById('task_4_result').innerText = i;
            break;
        }
        i--;
    }
}

// 5 Запитай у користувача число і виведи всі дільники цього числа.
function task5() {
    const num = parseInt(document.getElementById('task_5_number').value);
    // debugger
    let i = num;
    let rez = '';
    while (i > 0) {
        if (num % i == 0) {
            rez += i + ', ';
        }
        i--;
    }
    document.getElementById('task_5_result').innerText = rez;
}

// 6 Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом
function task6() {
    const abcde = document.getElementById('task_6_number').value; //12345
    const e = abcde % 10; // 5
    const abcd = ((abcde - e) / 10); //1234
    const d = abcd % 10; //4
    const a = Math.floor(abcde / 10000); //1
    const b = Math.floor((abcde / 1000) % 10); //2
    const rez = (a == e && b == d) ? 'Поліндром' : 'Не поліндром';
    document.getElementById('task_6_result').innerText = rez;
}

// 7 Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:від 200 до 300 - знижка буде 3%;  від 300 до 500 - 5%; від 500 і вище - 7%.
function task7() {
    const x = document.getElementById('task_7_number').value;
    let rez;
    if (x < 200) {
        rez = `Знижки нема, до оплати: ${x}`;
    }
    if (x >= 200 && x < 300) {
        rez = x - (x * 0.02);
    }
    if (x >= 300 && x < 500) {
        rez = x - (x * 0.05);
    }
    if (x >= 500) {
        rez = x - (x * 0.07);
    }
    document.getElementById('task_7_result').innerText = `Сума до оплати з урахуванням знижки: ${rez}`;
}

// 8 Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
function task8() {
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
    document.getElementById('task_8_result').innerHTML = allNumbers + '<br>' + result;
}

// 9 Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
function task9() {
    let answer = true;
    let i = 0;
    let d;
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
        answer = confirm(`День тижня: ${d}.  Хочеш побачити наступний день?`)
    }
}
// 10 Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

function task10() {
    let from = 0,
        to = 100,
        mid = 50;
    do {
        answer = prompt(`Ваше число < ${mid}? Відповідь: '>' вбо '<' або '='`);
        if (answer == '>') {
            from = mid; //50
            // після from або to
            mid = Math.floor (((to - from) / 2) + mid);
        }

        if (answer == '<') {
            to = mid; //50
            // після from або to
            mid = Math.floor (((to - from) / 2) + from);
        }
    } while (answer !== '=') {
        alert(`Ваше число ${mid}`)
    }
}

//11 Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
function task11() {
    let r = '<div style="display:flex; flex-wrap:wrap; gap:30px;"> ';
    for (let i = 2; i <= 9; i++) {
        r += '<ul>';
        for (let j = 1; j <= 10; j++) {
            r += '<li>' + i + ' * ' + j + ' = ' + (i * j) + '</li>';
        }
        r += '</ul>';
    }
    r += '</div>';
    document.getElementById('task_11_result').innerHTML = r;
}

// 12 Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
function task12() {
    let day = parseInt(document.getElementById('task_12_number1').value); // день
    let mounth = parseInt(document.getElementById('task_12_number2').value); // місяць
    let year = parseInt(document.getElementById('task_12_number3').value); // рік
    let d, m, y;

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
            d = (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) ? 29 : 28; // високісний
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

    document.getElementById('task_12_result').innerText = ` наступний день: ${day}.${mounth}.${year} `;
}

// 13 Определить количество цифр в введенном числе
function task13() {
    let num = document.getElementById('task_13_number').value;
    for (i = 0; num > 1; i++) {
        num /= 10;
    }
    document.getElementById('task_13_result').innerText = i;
}

// 14 Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
function task14() {
    debugger
    do {
        const num1 = parseInt(prompt('Вкжіть перше число'));
        const num2 = parseInt(prompt('Вкжіть друге число'));
        const num3 = prompt('Вкжіть дію');
        let rez = 0;

        switch (num3) {
            case "+":
                rez = num1 + num2;
                break;
            case "-":
                rez = num1 - num2;
                break;
            case "*":
                rez = num1 * num2;
                break;
            case "/":
                rez = num1 / num2;
                break;
            default:
                rez = 'Невірне значення';
                break;
        }
        answer = confirm(`Результат: ${rez}. Бажаєте вирішити ще однин приклад?`)
    } while (answer == true) {}
    alert('End')
}

//15 Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
function task15() {
    let number = document.getElementById('task_15_number1').value;
    let numSlide = document.getElementById('task_15_number2').value;
    let num = number;
    for (i = 0; num > 1; i++) {
        num /= 10;
    }
    if (i < numSlide) {
        alert('Error')
    }
    let nuli = 10 ** (i - numSlide);
    let x = number % nuli;
    let y = Math.floor(number / nuli);
    let rez = (x * (10 ** numSlide)) + y;
    document.getElementById('task_15_result').innerText = rez;
}

//16 Вывести # столько раз, сколько указал пользователь.
function task16() {
    const num = parseInt(document.getElementById('task_16_number').value);
    let rez = '';
    let i = 0;
    while (i < num) {
        rez += '#';
        i++;
    }
    document.getElementById('task_16_result').innerText = rez;
}

// 17 Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
function task17() {
    const num = parseInt(document.getElementById('task_17_number').value);
    let rez = '';
    let i = num;
    while (i >= 0) {
        rez += i + ' ';
        i--;
    }
    document.getElementById('task_17_result').innerText = rez;
}

// 18  Запросить число и степень. Возвести число в указанную степень и вывести результат.
function task18() {
    const num1 = parseInt(document.getElementById('task_18_number1').value);
    const num2 = parseInt(document.getElementById('task_18_number2').value);
    const rez = Math.pow(num1, num2);
    document.getElementById('task_18_result').innerText = rez;
}

// 19 Запросить 2 числа и найти все общие делители.
function task19() {
    const num1 = parseInt(document.getElementById('task_19_number1').value);
    const num2 = parseInt(document.getElementById('task_19_number2').value);
    let rez = '';
    const minNum = num1 < num2 ? num1 : num2;
    let i = 1;
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
}

// 20 Посчитать факториал введенного пользователем числа.
function task20() {
    const num = parseInt(document.getElementById('task_20_number').value);
    let rez = 1;
    let i = num;
    while (i > 0) {
        rez = rez * i;
        i--;
    }
    document.getElementById('task_20_result').innerText = rez;
}

// 21 Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.
function task21() {
    do {
        rez = prompt('Скільки буде 2 + 2 * 2?')
    } while (rez !== '6');
}

// 22 Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.
function task22() {
    const num = parseInt(document.getElementById('task_22_number').value);
    let i = 0;
    rez = num;
    do {
        rez = rez / 2;
        i++;
    } while (rez >= 50);
    document.getElementById('task_22_result').innerText = `Число ${num} було поділено навпіл  ${i} разів і у залишку залишилось ${rez}`;
}

// 23 Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.
function task23() {
    const num = parseInt(document.getElementById('task_23_number').value);
    let rez = '';
    for (let i = 1; i <= 100; i++) {
        if (i % num == 0) {
            rez += i + ', ';
        }
    }
    document.getElementById('task_23_result').innerText = rez;
}

// 24 Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.
function task24() {
    const minNum = parseInt(document.getElementById('task_24_number1').value);
    const maxNum = parseInt(document.getElementById('task_24_number2').value);
    let rez = '';
    for (let i = minNum; i <= maxNum; i = i + 4) {
        if (i !== minNum) {
            rez += i + ', ';
        }

    }
    document.getElementById('task_24_result').innerText = rez;
}

// 25  Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.
function task25() {
    const num = parseInt(document.getElementById('task_25_number').value);
    let rez = 'Просте';

    for (let i = (num - 1); i > 1; i--) {
        if (num % i == 0) {
            rez = 'Не просте ';
        }
    }
    document.getElementById('task_25_result').innerText = rez;
}