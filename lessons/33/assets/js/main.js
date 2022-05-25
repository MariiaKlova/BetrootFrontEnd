//// Array methods 

const arr = ['foo', 'hello', 'Ipsumdolor', 'bar', 'lorem', 'Audi'];

console.log('arr', arr);
////////////////////////////////////

console.log('=== Вивід строками metod .forEach: +index+ +el+ ===');

let opts = '';

arr.forEach((el, index) => {
    opts += '<option value = "' + index + '">' + el + '</option>' + "\n";
});

console.log('opts:\n', opts);
/////////////////////////////////////

console.log('=== Перетворення масиву на масив обєктів metod .forEach + .push  ===');

const arrObj = [];

arr.forEach((el, index) => {
    arrObj.push({
        key: index,
        value: el
    })
});
console.log('arrObj:', arrObj);
/////////////////////////////////////

console.log('=== Створення нового масиву обєктів metod .map .map((el, index) => (index + 1) + - + el)  ===');
const arr2 = arr.map((el, index) => (index + 1) + '-' + el);
console.log('arr2', arr2);
////////////////////////////////////

console.log('=== Вивід обєктів, коротших за 4. metod .forEach + .push ===');
const arrObj2 = [];

arr.forEach((el, index) => {
    if (el.length <= 4) {
        arrObj2.push({
            key: index,
            value: el
        })
    }
});
console.log('arrObj2:', arrObj2);
//////////////////////////////////////

console.log('=== Виводимо тільки елемент. metod .forEach + .push ===');
const arrShort = [];
const arrObj3 = [];

arr.forEach((el, index) => {
    arrObj3.push({
        key: index,
        value: el
    })
    if (el.length <= 4) {
        arrShort.push(el);
    }
});
console.log('arrShort:', arrShort);
// АЛЬТЕРНАТИВА:
console.log('=== Альтернативно виводимо тільки елемент . metod .filter ===');

const arrShort2 = arr.filter(el => el.length <= 4);

console.log('arrShort2:', arrShort2);


// //// Замикання:
// function workWithCard() {
//     let CARD = [];
//     return {
//         addToCard: function (name = '', qty = 1) {
//             CARD.push({
//                 name: name,
//                 qty: qty
//             })
//         },
//         viewCard: function () {
//             return CARD;
//         }
//     }
// }
// const cardActions = workWithCard();
// cardActions.addToCard('qwe', 2);
// console.log(cardActions.viewCard());


//////////////////////////////////////////////////////////////////////////////////////////////////
console.log('///////////////////////////////////////////////////////////////////////////////////////');
console.log('=== Новий масив обєктів ===');

const personal = [{
        name: 'Bob',
        lvl: 'user',
        age: 35
    },
    {
        name: 'Ann',
        lvl: 'manager',
        age: 25
    },
    {
        name: 'John',
        lvl: 'admin',
        age: 33
    }
];

console.log('personal:', personal);
///////////////////////////////////////

console.log('=== Створення нового масиву з балансами на основі personal. metod .map ===');

// Невірне рішення, створить обєкт тільки з одним значенням
// personal.map(el => {
//     return el.age * 100;
// });
// console.log('personal', personal);

const balArr = personal.map(el => {
    return el.age * 100;
});
console.log('balArr - Виведе тільки строки балансів', balArr);
console.log('personal - не змінний', personal);
//////////////////////////////////////////////

console.log('=== Створення нового обєкту на базі обєкту personal. metod .map ===');
const balArr2 = personal.map(el => {
    return {
        name: el.name,
        lvl: el.lvl,
        age: el.age,
        balance: el.age * 100
    };
});
console.log('personal - не змінений :', personal);
console.log('balArr2 - новий масив:', balArr2);
////////////////////////////////

// console.log('=== Додавання балансів до обєкту personal. metod .forEach ===');
// const balArr3 = personal.forEach(el => {
//     el.balance = el.age * 100;
// });
// console.log('personal - ВЖЕ БУДЕ змінений :', personal);

console.log('=== Ддодавання балансу всім кому за 30 в обєкту personal. metod .filter, map, sort===');
// const balSort = balArr2.filter(el => el.age >= 30).forEach(el => el.balance += 500)

const balSort = balArr2
    .filter(el => el.age >= 30)
    .map(el => el.balance += 500)
// .sort((a, b) => a.age - b.age)  // не прицює врядок
balArr2.sort((a, b) => a.age - b.age)

console.log('balArr2 - відсортований', balArr2);