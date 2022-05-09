// Збільшення числа на 1 від 0 до 9
function func1() {
    for (let i = 0; i < 10; i++) {
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
    for (let i = 0; i < 10; i += 2) {
        console.log(i);
    }
}


// Для вказання року від теперішнього, до 60 назад. 
// Для форми реєстрації
function func3() {
    const year = new Date().getFullYear();
    for (let i = year; i > (year - 60); i--) {
        console.log(i);
    }
}

// Інкременція числа від 0, доки воно не досягне 10
function func4() {
    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
}


//Цикл, доки нажимаємо ОК, буде виконуватись цикл. 
function func5() {
    let answer = true;
    while (answer === true) {
        answer = confirm('Question')
    }
}

// Цикл, доки нажимаємо ОК, буде виконуватись цикл. 
// З  do {} while (), робиться спочатку перевірка, а потім запускається скрипт;
function func6() {
    let answer = false;
    do {
        answer = confirm('Question')
    } while (answer === true);
}

//Вывести # столько раз, сколько указал пользователь.
function task1() {
    const num = parseInt(document.getElementById('task_1_number').value);
    let rez = '';
    let i = 0;
    while (i < num) {
        rez += '#';
        i++;
    }
    document.getElementById('task_1_result').innerText = rez;
}

// 2 Пользователь ввел число, а на экран вывелись все числа от введенного до 0
function task2() {
    const num = parseInt(document.getElementById('task_2_number').value);
    let rez = '';
    let i = num;
    while (i >= 0) {
        rez += i + ' ';
        i--;
    }
    document.getElementById('task_2_result').innerText = rez;
}
// 3 Запросить число и степень. Возвести число в указанную степень и вывести результат.
function task3() {
    const num1 = parseInt(document.getElementById('task_3_number1').value);
    const num2 = parseInt(document.getElementById('task_3_number2').value);
    const rez = Math.pow(num1, num2);
    document.getElementById('task_3_result').innerText = rez;
}

// 4 Запросить 2 числа и найти все общие делители.
function task4() {
    const num1 = parseInt(document.getElementById('task_4_number1').value);
    const num2 = parseInt(document.getElementById('task_4_number2').value);
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
    document.getElementById('task_4_result').innerText = rez;
}