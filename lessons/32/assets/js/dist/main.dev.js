"use strict";

/*
// factorial
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function myFunc(a = 0, b = 0) {
    const ra = a * b;
    const rb = b * 2;
    return [ra, rb];

}
const r = myFunc(2, 4);

// console.log(r.x, r.y)
*/

/* ----------------------  РОЗДІЛ 1 -----------------

// якщо в массиві значення дуже відрізняються, то бажано використовувати об'єкт, а не масив.
const bedArr = ['Hello', false, 12, 'Bob', 42.67]

//багаторівневий масив 'матриця'
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let arr2 = new Array(5); // створить масив з 5 пустих ячеек

let arr3 = new Array(5, 2); // створить масив з елементамми 5 і 2

//класичний масив з числами
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function arrNum() {
    return 5;
}

console.log(arr);
console.log(arr[arr.length - 1]);
console.log(arr[arrNum()]);
console.log(arr[100]);


// змінить другу ячейку на 22 (було 2)
arr[1] = 22;

// додасть пусті ячейкі перед 100
//ПУСТІ ЯЧЕЙКИ ЦЕ ПОГАНО
arr[100] = 123;

console.log(arr);
console.log('length', arr.length);


// news[2] = {};
// news[73] = {}; 
// буде аж 74 ітерації, так НЕ РОБИТЬ!

console.log('==перебирати ВЕСЬ масив==');
// перебирати ВЕСЬ масив
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log('==перебирати ВЕСЬ масив по КЛЮЧУ==');
// перебирати ВЕСЬ масив по ключу
for (let k in arr) {
    console.log(arr[k]);
}

console.log('===перебирати перші 3 значення масиву===');
// перебирати перші 3 значення масиву
for (let i = 0; i < 3; i++) {
    console.log(arr[i]);
}

console.log('======for value of arr============');

for (let value of arr) {
    console.log(value);
}

*/

/* ------------   РОЗДІЛ 2 -----------------------
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//додати ячейку вкінець масиву і повертає нову довжину масиву

// arr.push(22, 21, 20);
const len = arr.push(22, 21, 20);

// Метод pop() '= last' удаляет последний элемент из массива и возвращает его значение.
const last = arr.pop()  // приберее 20


//виводить масив 
console.log(arr); // (12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 21, 20]


//виводить довжину масиву 
console.log(len);  // 12

//виводить довжину масиву
console.log(arr.length); // 11 (бо від 0 до 11 = 12штук)

//Метод pop() '= last' удаляет последний элемент из массива и возвращает его значение.
console.log(last); //20

*/

/*  ------------------ РОЗДІЛ 3.   МЕТОДИ ------------------
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// збільшуе всі числа на 10 

//Варіант 1  +  Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.


// let arResult = [];
// arr.forEach(el => {
//     arResult.push(el + 10);
// });
// console.log(arResult);


//Варіант 2 стрілочний +  создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
console.log('-- Метод map() --');
let arResult = arr.map(el => el + 10);
console.log(arResult); // (9) [11, 12, 13, 14, 15, 16, 17, 18, 19]


// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
console.log('-- Метод filter() --');
let arEven = arr.filter(el => el % 2 === 0);
console.log(arEven); // (4) [2, 4, 6, 8]


//Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно устойчива (англ.). Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.
console.log('-- Метод sort() чистий (як строки) --');
const arr2 = [4, 78, 22, 8, 42, 1, 98, 100, 45]
arr2.sort(); // Відсортує як рядки по символам
console.log(arr2); // (9) [1, 100, 22, 4, 42, 45, 78, 8, 98]

console.log('-- Метод sort() по числам --');
arr2.sort((a, b) => a - b); // Відсортує по числам
console.log(arr2); //(9) [1, 4, 8, 22, 42, 45, 78, 98, 100]

*/
//--------------- ПРАКТИКА ------------------------
//--------------- ПРАКТИКА ------------------------
//--------------- ПРАКТИКА ------------------------

/*
{
    name: '',
    qty: 0,
    isBuy: false,
    prise: 0.00,
    total: 0.00
}
*/
var topPanel = {
  show: function show(text, className) {
    var panel = "<div  id=\"top-panel\" class=\"top-panel ".concat(className, "\">").concat(text, "</div>");

    if (document.getElementById('top-panel') !== null) {
      document.getElementById('top-panel').remove();
    }

    document.body.insertAdjacentHTML('afterbegin', panel);
    this.hide();
  },
  hide: function hide() {
    setTimeout(function () {
      document.getElementById('top-panel').remove();
    }, 3000);
  },
  error: function error(text) {
    this.show(text, 'panel-error');
  },
  success: function success(text) {
    this.show(text, 'panel-success');
  },
  info: function info(text) {
    this.show(text, 'panel-info');
  }
}; // topPanel.error('lorem');

var CARD = [{
  // одразу додано до масиву 0
  name: 'Bread',
  qty: 1,
  isBuy: false,
  price: 15,
  total: 15
}, {
  // одразу додано до масиву 1
  name: 'Milk',
  qty: 2,
  isBuy: false,
  price: 23.45,
  total: 61.9
}];
viewCardTable();

function addToCard(name, qty, price) {
  // .find поверне елемент значення першого значення в масиві елемента, або undefined
  if (CARD.find(function (el) {
    return el.name === name;
  }) === undefined) {
    CARD.push({
      name: name,
      qty: qty,
      isBuy: false,
      price: price,
      total: parseFloat((qty * price).toFixed(2))
    });
  } else {
    var prodIndex = CARD.findIndex(function (el) {
      return el.name === name;
    });
    var newQty = CARD[prodIndex].qty + qty;
    CARD[prodIndex].qty = newQty;
    CARD[prodIndex].total = parseFloat((newQty * CARD[prodIndex].price).toFixed(2));
    topPanel.success('Product quantity changed');
  }

  viewCardTable();
} // addToCard('Milk', 2, 23.45);


function checkAndAddToCard() {
  var name = document.getElementById('product_name').value,
      qty = parseInt(document.getElementById('product_qty').value),
      price = parseFloat(document.getElementById('product_price').value);
  var valid = true;

  if (name === '') {
    // alert('Enter product name');
    topPanel.error('Enter product name');
    valid = false;
  }

  if (isNaN(qty)) {
    topPanel.error('Enter quantity valid value');
    valid = false;
  }

  if (qty <= 0) {
    topPanel.error('Quantity value must be positive');
    valid = false;
  }

  if (isNaN(price)) {
    topPanel.error('Enter price valid value');
    valid = false;
  }

  if (price <= 0) {
    topPanel.error('Price must be positive');
    valid = false;
  }

  if (valid) {
    addToCard(name, qty, price);
    topPanel.success('Product successfully added');
    document.getElementById('product_name').value = '';
    document.getElementById('product_qty').value = '1';
    document.getElementById('product_price').value = '';
  }
}

function viewCardTable() {
  var html = '';
  CARD.forEach(function (product) {
    html += "<tr>\n             <td>".concat(product.name, "</td>\n             <td>").concat(product.qty, "</td>\n             <td>").concat(product.price.toFixed(2), "</td>\n             <td>").concat(product.total.toFixed(2), "</td>\n        </tr>");
  });
  document.getElementById('cart-body').innerHTML = html;
}