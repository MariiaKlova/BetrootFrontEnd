"use strict";

/*
Мінімум
Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:
Висновок на екран з інформацією про автомобіль.
Додавання водія, який має право керувати автомобілем.
Заправка автомобіля.
Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.
*/
var car = {
  producer: 'Mitsubishi',
  //виробник,
  model: 'Outlander',
  // модель, 
  year: 2018,
  // рік випуску, 
  avSpeed: 90,
  // середня швидкість, км/год
  tankCapacity: 60,
  // обсяг паливного бака, л
  avFuelPe100: 8,
  //  середня витрата палива на 100 км., 
  drivers: [// водії
  {
    name: "Mariia",
    availability: true
  }, {
    name: "Alex",
    availability: true
  }, {
    name: "Dan",
    availability: false
  }]
};

function viewCarInTable() {
  html = "<tr>\n            <th>\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u043A: </th>\n            <td>".concat(car.producer, "</td>\n        </tr>\n        <tr>\n            <th>\u041C\u043E\u0434\u0435\u043B\u044C: </th>\n            <td>").concat(car.model, " </td>\n        </tr>\n        <tr>\n            <th>\u0420\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443: </th>\n            <td>").concat(car.year, " </td>\n        </tr>\n        <tr>\n            <th>\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C, \u043A\u043C/\u0433\u043E\u0434: </th>\n            <td>").concat(car.avSpeed, " </td>\n        </tr>\n        <tr>\n            <th>\u041E\u0431'\u0454\u043C \u043F\u0430\u043B\u0438\u0432\u043D\u043E\u0433\u043E \u0431\u0430\u043A\u0430, \u043B: </th>\n            <td>").concat(car.tankCapacity, " </td>\n        </tr>\n        <tr>\n            <th>\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0432\u0438\u0442\u0440\u0430\u0442\u0430 \u043F\u0430\u043B\u0438\u0432\u0430 \u043D\u0430 100\u043A\u043C: </th>\n            <td>").concat(car.avFuelPe100, " </td>\n        </tr>");
  document.getElementById('table_car').innerHTML = html;
}

function viewDriverInTable() {
  var html = '';
  car.drivers.forEach(function (driver) {
    html += "\n            <div class=\"card col-4\">\n                <h5 class=\"card-title text-center\">\u0412\u043E\u0434\u0456\u0439 ".concat(driver.name, "</h5>\n                <table class=\"table\">\n                    <tr>\n                        <th>\u0412\u043E\u0434\u0456\u0439\u0441\u044C\u043A\u0435 \u043F\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u043D\u044F: </th>\n                        <th> ").concat(driver.availability ? '<span class="badge bg-success">+</span>' : '<span class="badge bg-danger">-</span>', "</th>\n                    </tr>\n                    <tr>\n                    <th> <button type=\"button\" class=\"btn btn-outline-danger btn-sm\"  onclick=\"askDriverDel('").concat(driver.name, "')\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button></th>\n                </tr>\n                </table>\n            </div> \n            ");
  });
  document.getElementById('table_driver').innerHTML = html;
}

function viewDriverInSelection() {
  var html = '<option value="" selected disabled >Оберіть водія для данної поїздки:</option>';
  car.drivers.forEach(function (driver) {
    html += "<option value=\"".concat(driver.name, "\"> \u0412\u043E\u0434\u0456\u0439 ").concat(driver.name, " </option>");
  });
  document.getElementById('driver_select').innerHTML = html;
}

function viewTripDetail(driver, allTime, breakes, l) {
  html = "\n    <td>".concat(driver, "</td>\n    <td>").concat(allTime, " </td>\n    <td>").concat(breakes, " \u0433\u043E\u0434 </td>\n    <td>").concat(l, " \u043B </td>\n    ");
  document.getElementById('trip').innerHTML = html;
}

viewCarInTable();
viewDriverInTable();
viewDriverInSelection();

function askDriverDel(name) {
  if (confirm('Видалити ' + name + '?')) {
    var index = car.drivers.findIndex(function (el) {
      return el.name === name;
    });
    car.drivers.splice(index, 1);
    viewDriverInTable();
  }
}

function addDriversToCar(name, availability) {
  car.drivers.push({
    name: name,
    availability: availability
  });
  viewDriverInTable();
  viewDriverInSelection();
}

function calcTimeAndFuelToOvercomeDistance(distance, speed) {
  var t = distance / speed; // час на дорогу чистий

  var breakes = Math.floor(t / 4); //годин перерв

  var hours = Math.floor(t + breakes); // повних годин на дорогу

  var minutes = Math.floor((t + breakes) % hours * 60); // хвилини

  var allTime = "".concat(hours, " \u0433\u043E\u0434, ").concat(minutes, " \u0445\u0432."); // час на дорогу весь

  var maxDistOnOneTank = car.tankCapacity / car.avFuelPe100 * 100; // відстань на одному баку (750)

  var l = 0;

  if (maxDistOnOneTank - distance > 0) {
    l = 0;
  } else {
    l = (distance - maxDistOnOneTank) / 100 * car.avFuelPe100; // Додаткові літри
  }

  return {
    breakes: breakes,
    allTime: allTime,
    l: l
  };
}

function checkDrivers() {
  var name = document.getElementById('driver_name').value,
      availability = document.getElementById('driver_license').value,
      valid = true;

  if (name === '') {
    alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0456\u043C'\u044F \u0432\u043E\u0434\u0456\u044F");
    valid = false;
    return false;
  }

  if (!isNaN(name)) {
    alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0456\u043C'\u044F \u043B\u0456\u0442\u0435\u0440\u0430\u043C\u0438");
    valid = false;
    return false;
  }

  if (availability === '') {
    alert("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0432\u043E\u0434\u0456\u0439\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043A\u043D\u043D\u044F");
    valid = false;
    return false;
  }

  if (availability === 'false') {
    availability = false;
  }

  if (valid) {
    addDriversToCar(name, availability);
  }
}

function checkDriver(driver, drivers) {
  // debugger
  if (driver === '') {
    alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0432\u043E\u0434\u0456\u044F");
    return false;
  }

  if (drivers.filter(function (el) {
    return el.name === driver;
  })[0].availability === false) {
    alert("\u041E\u0431\u0440\u0430\u043D\u0438\u0439 \u0432\u043E\u0434\u0456\u0439 \u043D\u0435 \u043C\u0430\u0454 \u043F\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u043D\u044F");
    return false;
  }

  return driver;
}

function checkDistanse(distance) {
  if (distance === '') {
    alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u044C");
    return false;
  }

  if (isNaN(distance)) {
    alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u044C \u0446\u0438\u0444\u0440\u0430\u043C\u0438");
    return false;
  }

  return distance;
}

function trip() {
  // debugger
  var distance = checkDistanse(document.getElementById('distance').value);
  if (!distance) return false;
  var driver = checkDriver(document.getElementById('driver_select').value, car.drivers);
  if (!driver) return false;

  var _calcTimeAndFuelToOve = calcTimeAndFuelToOvercomeDistance(distance, car.avSpeed),
      breakes = _calcTimeAndFuelToOve.breakes,
      allTime = _calcTimeAndFuelToOve.allTime,
      l = _calcTimeAndFuelToOve.l;

  viewTripDetail(driver, allTime, breakes, l);
}
/*
Норма
Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передане кількість секунд.
Зміни часу на передане кількість хвилин.
Зміни часу на передане кількість годин.
Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:30:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
*/

/*
Максимум
Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
Складання 2-х об'єктів-дробів.
Віднімання 2-х об'єктів-дробів.
Множення 2-х об'єктів-дробів.
Ділення 2-х об'єктів-дробів.
Скорочення об'єкта-дробу.
(Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)
*/


var drobb = {
  value1: {
    ch: 0,
    zn: 0
  },
  value2: {
    ch: 0,
    zn: 0
  },
  setValue: function setValue(key, chisl, znam) {
    this[key].ch = chisl;
    this[key].zn = znam; // this[key] = {
    //     ch: chisl,
    //     zn: znam
    // }
  },
  addition: function addition() {
    var result = {
      ch: this.value1.ch * this.value2.zn + this.value2.ch * this.value1.zn,
      zn: this.value1.zn * this.value2.zn
    };
    return this["short"](result);
  },
  subtract: function subtract() {
    var result = {
      ch: this.value1.ch * this.value2.zn - this.value2.ch * this.value1.zn,
      zn: this.value1.zn * this.value2.zn
    };
    return this["short"](result);
  },
  multiply: function multiply() {
    var result = {
      ch: this.value1.ch * this.value2.ch,
      zn: this.value1.zn * this.value2.zn
    };
    return this["short"](result);
  },
  divide: function divide() {
    var result = {
      ch: this.value1.ch * this.value2.zn,
      zn: this.value1.zn * this.value2.ch
    };
    return this["short"](result);
  },
  "short": function short(rez) {
    console.log("start");
    var nzd = 0;

    for (var i = Math.min(rez.ch, rez.zn); i > 0; i--) {
      if (rez.ch % i === 0 && rez.zn % i === 0) {
        nzd = i;
        break;
      }
    }

    if (nzd !== 0) {
      console.log(rez);
      return {
        ch: rez.ch / nzd,
        zn: rez.zn / nzd
      };
    } else {
      return rez;
    }
  }
};

function showResult(ch, zn) {
  document.getElementById('rez_ch').innerText = ch;
  document.getElementById('rez_zn').innerText = zn;
}

function checkValid(v1_ch, v1_zn, v2_ch, v2_zn) {
  if (isNaN(v1_ch)) {
    alert('Чисельник першого числа має буди цифровим');
    return false;
  }

  if (isNaN(v1_zn)) {
    alert('Знаменник першого числа має буди цифровим');
    return false;
  }

  if (isNaN(v2_ch)) {
    alert('Чисельник другого числа має буди цифровим');
    return false;
  }

  if (isNaN(v2_zn)) {
    alert('Знаменник другого числа має буди цифровим');
    return false;
  }

  return true;
}

function task3() {
  var v1_ch = parseInt(document.getElementById('v1_ch').value),
      v1_zn = parseInt(document.getElementById('v1_zn').value),
      v2_ch = parseInt(document.getElementById('v2_ch').value),
      v2_zn = parseInt(document.getElementById('v2_zn').value),
      action = document.getElementById('inputAction').value;

  if (action === '') {
    alert('Оберіть дію');
    return false;
  }

  ;

  if (checkValid(v1_ch, v1_zn, v2_ch, v2_zn) === true) {
    drobb.setValue('value1', v1_ch, v1_zn);
    drobb.setValue('value2', v2_ch, v2_zn);

    if (action === 'addition') {
      var _drobb$addition = drobb.addition(),
          ch = _drobb$addition.ch,
          zn = _drobb$addition.zn;

      return showResult(ch, zn);
    }

    if (action === 'subtract') {
      var _drobb$subtract = drobb.subtract(),
          _ch = _drobb$subtract.ch,
          _zn = _drobb$subtract.zn;

      return showResult(_ch, _zn);
    }

    ;

    if (action === 'multiply') {
      var _drobb$multiply = drobb.multiply(),
          _ch2 = _drobb$multiply.ch,
          _zn2 = _drobb$multiply.zn;

      return showResult(_ch2, _zn2);
    }

    ;

    if (action === 'divide') {
      var _drobb$divide = drobb.divide(),
          _ch3 = _drobb$divide.ch,
          _zn3 = _drobb$divide.zn;

      return showResult(_ch3, _zn3);
    }

    ;
  }

  ;
}