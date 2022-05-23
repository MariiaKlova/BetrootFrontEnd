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
      if (document.getElementById('top-panel') !== null) {
        document.getElementById('top-panel').remove();
      }
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
  isBuy: true,
  price: 15,
  total: 15
}, {
  // одразу додано до масиву 1
  name: 'Milk',
  qty: 2,
  isBuy: false,
  price: 23.45,
  total: 61.9
}, {
  // одразу додано до масиву 2
  name: 'Honey',
  qty: 1,
  isBuy: false,
  price: 65,
  total: 65
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

    var _newQty = CARD[prodIndex].qty + qty;

    CARD[prodIndex].qty = _newQty;
    CARD[prodIndex].total = parseFloat((_newQty * CARD[prodIndex].price).toFixed(2));
    topPanel.success('Product quantity changed');
  }

  viewCardTable();
}

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
  CARD.sort(function (a, b) {
    return Number(a.isBuy) - Number(b.isBuy);
  });
  CARD.forEach(function (product) {
    html += "<tr>\n        <td>".concat(product.name, "</td>\n        <td>").concat(product.isBuy ? '<span class="badge bg-success">Yes</span>' : '<span class="badge bg-danger">No</span>', " </td>\n        <td>\n            <button class=\"btn btn-info btn-sm\" onclick=\"changeProductQty('").concat(product.name, "', 'dec')\">-</button>\n            ").concat(product.qty, "\n            <button class=\"btn btn-info btn-sm\" onclick=\"changeProductQty('").concat(product.name, "', 'inc')\">+</button>\n        </td>\n        <td>").concat(product.price.toFixed(2), "</td>\n        <td>").concat(product.total.toFixed(2), "</td>\n        <td>\n        <button type=\"button\" class=\"btn btn-primary\" onclick=\"changeProdStatus('").concat(product.name, "')\">Change Status</button></td>\n        <td>\n        <button type=\"button\" class=\"btn btn-danger\" onclick=\"askProdDel('").concat(product.name, "')\">&times;</button>\n        </td>\n    </tr>");
  });
  document.getElementById('cart-body').innerHTML = html;
  document.getElementById('cart-total').innerText = summTotal();
}

function changeProductQty(name, action) {
  var index = CARD.findIndex(function (el) {
    return el.name === name;
  });
  newQty = 0;

  if (action === 'inc') {
    newQty = CARD[index].qty + 1;
  } else {
    if (CARD[index].qty >= 2) {
      newQty = CARD[index].qty - 1;
    } else {
      askProdDel(name);
      return false;
    }
  }

  CARD[index].qty = newQty;
  CARD[index].total = CARD[index].price * newQty;
  viewCardTable();
}

function summTotal() {
  // let total = 0;
  // for (let i = 0; i < CARD.length; i++) {
  //     total += CARD[i].total;
  // }
  // return total;
  return CARD.reduce(function (acc, curr) {
    return acc + curr.total;
  }, 0);
}

function askProdDel(name) {
  if (confirm('Delete ' + name + '?')) {
    var index = CARD.findIndex(function (el) {
      return el.name === name;
    });
    CARD.splice(index, 1);
    viewCardTable();
    topPanel.info('Product successfuly deleted!');
  }
}

function changeProdStatus(name) {
  var index = CARD.findIndex(function (el) {
    return el.name === name;
  });
  CARD[index].isBuy = !CARD[index].isBuy; // if (CARD[index].isBuy) {
  //     CARD[index].isBuy = false;
  // } else {
  //     CARD[index].isBuy = true;
  // }

  viewCardTable();
}

var DISCOUNT = [{
  promo: 'qwerty',
  type: 'fixed',
  //  or 'persent'
  value: 15,
  isUsed: false
}, {
  promo: 'asdfg',
  type: 'persent',
  //  or 'fixed'
  value: 5,
  isUsed: false
}];

function checkAndApplyDiscount() {
  var discPromo = document.getElementById('discountField').value;

  if (discPromo === '') {
    topPanel.error('Enter promo code');
    return false;
  }

  var index = DISCOUNT.findIndex(function (el) {
    return el.promo === discPromo;
  });

  if (index === -1) {
    topPanel.error('Promo code not found');
    return false;
  }

  var disc = DISCOUNT[index];

  if (disc.isUsed) {
    topPanel.error('Promo code already used');
    return false;
  }

  var newTotal = calcDiscount(disc);
  DISCOUNT[index].isUsed = true;
  document.getElementById('discValue').innerText = disc.value + (disc.type === 'fixed' ? 'UAH' : '%');
  document.getElementById('totalWithDisc').innerText = newTotal.toFixed(2);
  document.getElementById('discountField').value = '';
}

function calcDiscount(disc) {
  debugger;
  var type = disc.type,
      value = disc.value;
  var sumTotalValue = summTotal();

  switch (type) {
    case 'fixed':
      return sumTotalValue - value;

    case 'persent':
      return sumTotalValue - sumTotalValue / 100 * value;
  }
} ///////////////////////////  Деструктурізація

/*
const user = {
    name: 'Bob',
    gender: 'male',
    level: 'user',
    qwe: 'qwe',
    asd: 'asd',
    zxc: 'zxc'
};

// function checkUser(user){
//     user.name
// }

function checkUser(user) {
    const {
        name,
        gender,
        level,
        age = 0
    } = user;
    console.log(name);
    console.log(gender);
    console.log(level);
    console.log(age);
    console.log(qwe); // не виведеться без наявності в const
}

// function checkUser(name, gender, level) {
// }
// checkUser(user.name, user.gender, user.level);


const arr = [1, 2, 3, 4, 5, 6];
const [a, b, c, d] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

*/
///////////////////////////////// Spred operator

/*
function summAll(...numbers) {
    console.log(numbers);
    let summ = 0;
    for (let i = 0; i < numbers; i++) {
        summ += numbers[i]
    }
    return summ;
}

console.log(summAll(1, 2, 3, 4));

function summAll(text, action, ...numbers) {
    console.log(action);
    let summ = 0;
    for (let i = 0; i < numbers; i++) {
        summ += numbers[i]
    }
    return text + ' ' + summ;
}
console.log(summAll('Sum:', 1, 2, 3, 4))



import{Lpopup, Lmap} from Leaflet;

*/

/* Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/


function task1(input) {
  if (input === null || input.lengh === 0) {
    return [];
  }

  var count = 0;
  var sum = 0;

  for (var i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    } else {
      sum += input[i];
    }
  }

  return [count, sum];
}
/*The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?
*/


function missingNo(nums) {
  var r = nums.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i <= r.lengh; i++) {
    if (i !== r[i]) {
      return i;
    }
  }
}
/*
Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
Examples:
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
*/


function dontGiveMeFive(start, end) {
  var count = 0;

  for (var i = start; i <= end; i++) {
    if (String(i).indexOf('5') === -1) {
      count++;
    }
  }

  return count;
}