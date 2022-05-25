"use strict";

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
};
var CARD = [{
  // одразу додано до масиву 
  name: 'Chocolate',
  qty: 1,
  isBuy: true,
  price: 25.25,
  total: 25.25
}, {
  // одразу додано до масиву 
  name: 'Bread',
  qty: 1,
  isBuy: true,
  price: 20,
  total: 20
}, {
  // одразу додано до масиву 
  name: 'Apple',
  qty: 1,
  isBuy: true,
  price: 45,
  total: 45
}];
viewCardTable();

function addToCard(name, qty, price) {
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
  setSorting();
}

function summTotal() {
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
    setSorting();
    topPanel.info('Product successfuly deleted!');
  }
}

function changeProdStatus(name) {
  var index = CARD.findIndex(function (el) {
    return el.name === name;
  });
  CARD[index].isBuy = !CARD[index].isBuy;
  viewCardTable();
  setSorting();
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
  document.getElementById('viewReceiptTotalWithDisc').innerHTML = "\n    <div class=\"col-8\">Total with discount</div>\n    <div class=\"col-4\">".concat(newTotal.toFixed(2), "</div>\n    ");
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
}

viewReceipt();

function viewReceipt() {
  var html = '';
  var sum = 0;
  CARD.map(function (el) {
    if (el.isBuy === true) {
      sum += el.total;
      html += "<div class=\"row\">\n            <div class=\"col-8\">".concat(el.name, "</div>\n            <div class=\"col-8 small\">").concat(el.qty, " x ").concat(el.price.toFixed(2), "</div>\n            <div class=\"col-4\">").concat(el.total.toFixed(2), "</div>\n            <hr>\n            </div> \n            ");
    }
  }); // CARD.map(el => {
  //     el.isBuy && (html +=
  //         `<div class="row">
  //             <div class="col-10">${el.name}</div>
  //             <div class="col-10 small">${el.qty} x ${el.price}</div>
  //             <div class="col-2">${el.total}</div>
  //             <hr>
  //         </div> `)
  // });

  document.getElementById('viewReceipt').innerHTML = html;
  document.getElementById('viewReceiptTotal').innerHTML = "<div>".concat(sum, " </div> ");
}

setSorting();

function setSorting() {
  var sorting = document.getElementById('sorting').value;

  switch (sorting) {
    default:
      CARD.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      break;

    case 'az':
      CARD.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      break;

    case 'za':
      CARD.sort(function (a, b) {
        return b.name.localeCompare(a.name);
      });
      break;

    case 'desc':
      CARD.sort(function (a, b) {
        return a.total - b.total;
      });
      break;

    case 'asc':
      CARD.sort(function (a, b) {
        return b.total - a.total;
      });
      break;
  }

  viewReceipt();
}