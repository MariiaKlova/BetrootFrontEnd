// // Застарілі функціі, не стилізуються:

// // alert ('Hello world');
// // console.log('qwerttqw');
// // alert ('Hello world 2');

// // const answer = confirm('Delete Item?');
// // console.log(answer);
// // if(answer) {
// //     alert('Select YES')
// //  } else {
// //      alert('Select No')
// //  }

// // const userName = prompt('What is your name?');
// // console.log(userName);
// // if(userName = null) {
// //     if(userName = '') {
// //         alert('Wrong name')
// //     }
// // }

// const a = 1;
// // a = 5;
// console.log(a);

// let b = 2;
// b = 6;
// console.log(b);

// console.log(c);
// var c = 3;
// hoisting
// console.log(c);



// const integer = 12;
// const float = 12.34;
// const text = 'Lorem ipsum';
// const text2 = "I'am";
// const text3 = 'I\'am';
// const company = 'OOO "Роги і копита"';
// const company3 = "OOO \"Роги і копита\"";
// const isTrue = false;
// const undef = undefined;
// const Null = null;
// const NotANomber = NaN;
// const arr = [1, 2, 3, 4];
// const obj = {'a':1, 'b':2};
// const func = function(){alert('1')}

// console.log(integer, typeof(integer));

// console.log(float, typeof float);
// console.log(float, typeof float);
// console.log(text, typeof text);
// console.log(text2, typeof text2);
// console.log(text3, typeof text3);
// console.log(company, typeof company);
// console.log(company3, typeof company3);
// console.log(isTrue, typeof isTrue);
// console.log(undef, typeof undef);
// console.log(Null, typeof Null);
// console.log(NotANomber, typeof NotANomber);
// console.log(arr, typeof arr);
// console.log(obj, typeof obj);
// console.log(func, typeof func);

function myPow() {
    // debugger
    const num = parseInt(prompt('Введіть перше число'));
    const num2 = parseInt(prompt('Введіть друге число'));
    const rez = num ** num2;
    // або const rez = Math.pow(num, num2)
    alert('Результат першого числа взведеного в ступінь другого числа = ' + rez)
}

function avgNum() {
    const num = parseInt(prompt('Введіть перше число'));
    const num2 = parseInt(prompt('Введіть друге число'));
    const rez = (num + num2) / 2;
    alert(`Середне арифметичне цих чисел = ${rez}`)
}

function square() {
    const num = parseInt(prompt('Введіть сторону квадрату'));
    const rez = num * 2;
    alert('Площа квадрату = ' + rez)
}

function km2oml() {
    const km = parseInt(prompt('Введіть відстань в км'));
    const K = 0.621371;
    const ml = km * K;
    alert(`В милях це ${ml} ml`)
}

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

function findX() {
    const a = parseInt(prompt('Вкажіть число a'));
    const b = parseInt(prompt('Вкажіть число b'));
    const x = b * (-1) / a;
    alert(` x = ${x}`);
}

function timeToDayEnd() {
    const hour = parseInt(prompt('Вкажіть котра година зараз'));
    const minutes = parseInt(prompt('Вкажіть котра хвилина'));
    const minutesTotalLeft = ((24 * 60) - (hour * 60 + minutes));
    const hoursLeft = parseInt(minutesTotalLeft / 60);
    const minutesLeft = minutesTotalLeft - hoursLeft * 60;
    alert(`До кінця дня залишилося ${hoursLeft} годин, ${minutesLeft} хвилин`);
}

function digit2() {
    const abc = +prompt('Введіть трьохзначне число');
    const rez = parseInt((abc % 100) / 10);
    alert(`Друга цифра: ${rez}`);
}

function digit3() {
    const abc = parseInt(prompt('Введіть пятизначне число'));
    const x = abc % 10;
    const y = ((abc - x) / 10);
    const z = x * 10000 + y;
    alert(`Результат: ${z}`);
}

function myZp() {
    const sumProd = +prompt('Введіть загальну суму продажів за миулий місяць');
    const rez = parseInt(sumProd / 10 + 250);
    alert(`Нарахувати зарплату: ${rez}$`);
}