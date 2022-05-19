/*
Мінімум
Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:
Висновок на екран з інформацією про автомобіль.
Додавання водія, який має право керувати автомобілем.
Заправка автомобіля.
Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.
*/
const car = {
    producer: 'Mitsubishi', //виробник,
    model: 'Outlander', // модель, 
    year: 2018, // рік випуску, 
    avSpeed: 90, // середня швидкість, км/год
    tankCapacity: 60, // обсяг паливного бака, л
    avFuelPe100: 8, //  середня витрата палива на 100 км., 
    drivers: [ // водії
        {
            name: "Mariia",
            availability: true,
        },
        {
            name: "Alex",
            availability: true,
        },
        {
            name: "Dan",
            availability: false,
        }
    ]
}

function viewCarInTable() {
    html =
        `<tr>
            <th>Виробник: </th>
            <td>${car.producer}</td>
        </tr>
        <tr>
            <th>Модель: </th>
            <td>${car.model} </td>
        </tr>
        <tr>
            <th>Рік випуску: </th>
            <td>${car.year} </td>
        </tr>
        <tr>
            <th>Середня швидкість, км/год: </th>
            <td>${car.avSpeed} </td>
        </tr>
        <tr>
            <th>Об'єм паливного бака, л: </th>
            <td>${car.tankCapacity} </td>
        </tr>
        <tr>
            <th>Середня витрата палива на 100км: </th>
            <td>${car.avFuelPe100} </td>
        </tr>`
    document.getElementById('table_car').innerHTML = html;
}


function viewDriverInTable() {
    let html = '';
    car.drivers.forEach(driver => {
        html +=
            `
            <div class="card col-4">
                <h5 class="card-title text-center">Водій ${driver.name}</h5>
                <table class="table">
                    <tr>
                        <th>Водійське посвідчення: </th>
                        <th> ${driver.availability ? '<span class="badge bg-success">+</span>' : '<span class="badge bg-danger">-</span>' }</th>
                    </tr>
                    <tr>
                    <th> <button type="button" class="btn btn-outline-danger btn-sm"  onclick="askDriverDel('${driver.name}')">Видалити</button></th>
                </tr>
                </table>
            </div> 
            `
    });
    document.getElementById('table_driver').innerHTML = html;
}

function viewDriverInSelection() {
    let html = '<option value="" selected disabled >Оберіть водія для данної поїздки:</option>';
    car.drivers.forEach(driver => {
        html +=
            `<option value="${driver.name}"> Водій ${driver.name} </option>`
    });
    document.getElementById('driver_select').innerHTML = html;
}

function viewTripDetail(driver, allTime, breakes, l) {
    html = `
    <td>${driver}</td>
    <td>${allTime} </td>
    <td>${breakes} год </td>
    <td>${l} л </td>
    `
    document.getElementById('trip').innerHTML = html;

}

viewCarInTable();
viewDriverInTable();
viewDriverInSelection();

function askDriverDel(name) {
    if (confirm('Видалити ' + name + '?')) {
        let index = car.drivers.findIndex((el) => el.name === name);
        car.drivers.splice(index, 1);
        viewDriverInTable();
    }
}

function addDriversToCar(name, availability) {
    car.drivers.push({
        name: name,
        availability: availability,
    })
    viewDriverInTable();
    viewDriverInSelection();
}

function calcTimeAndFuelToOvercomeDistance(distance, speed) {
    const t = (distance / speed); // час на дорогу чистий
    const breakes = Math.floor(t / 4); //годин перерв
    const hours = Math.floor(t + breakes); // повних годин на дорогу
    const minutes = Math.floor(((t + breakes) % hours) * 60); // хвилини
    const allTime = `${hours} год, ${minutes} хв.`; // час на дорогу весь


    const maxDistOnOneTank = (car.tankCapacity / car.avFuelPe100) * 100; // відстань на одному баку (750)
    let l = 0;
    if ((maxDistOnOneTank - distance) > 0) {
        l = 0;
    } else {
        l = ((distance - maxDistOnOneTank) / 100) * car.avFuelPe100; // Додаткові літри
    }
    return {
        breakes,
        allTime,
        l
    }
}

function checkDrivers() {
    let name = document.getElementById('driver_name').value,
        availability = document.getElementById('driver_license').value,
        valid = true;
    if (name === '') {
        alert(`Введіть ім'я водія`);
        valid = false;
        return false;
    }
    if (!isNaN(name)) {
        alert(`Введіть ім'я літерами`);
        valid = false;
        return false;
    }
    if (availability === '') {
        alert(`Вкажіть наявність водійського посвідчекння`);
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
        alert(`Оберіть водія`);
        return false;
    }
    if (drivers.filter((el) => el.name === driver)[0].availability === false) {
        alert(`Обраний водій не має посвідчення`);
        return false;
    }
    return driver;
}


function checkDistanse(distance) {
    if (distance === '') {
        alert(`Введіть відстань`);
        return false;
    }
    if (isNaN(distance)) {
        alert(`Введіть відстань цифрами`);
        return false;
    }
    return distance;
}

function trip() {
    // debugger
    const distance = checkDistanse(document.getElementById('distance').value);
    if (!distance) return false;
    const driver = checkDriver(document.getElementById('driver_select').value, car.drivers);
    if (!driver) return false;
    const {
        breakes,
        allTime,
        l
    } = calcTimeAndFuelToOvercomeDistance(distance, car.avSpeed);
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

const drobb = {
    value1: {
        ch: 0,
        zn: 0
    },
    value2: {
        ch: 0,
        zn: 0
    },
    setValue: function (key, chisl, znam) {
        this[key].ch = chisl;
        this[key].zn = znam;
        // this[key] = {
        //     ch: chisl,
        //     zn: znam
        // }
    },
    addition: function () {
        const result = {
            ch: (this.value1.ch * this.value2.zn) + (this.value2.ch * this.value1.zn),
            zn: (this.value1.zn * this.value2.zn)
        }
        return this.short(result);
    },
    subtract: function () {
        const result = {
            ch: (this.value1.ch * this.value2.zn) - (this.value2.ch * this.value1.zn),
            zn: (this.value1.zn * this.value2.zn)
        }
        return this.short(result);
    },
    multiply: function () {
        const result = {
            ch: this.value1.ch * this.value2.ch,
            zn: this.value1.zn * this.value2.zn
        }
        return this.short(result);
    },
    divide: function () {
        const result = {
            ch: this.value1.ch * this.value2.zn,
            zn: this.value1.zn * this.value2.ch
        }
        return this.short(result);
    },
    short: function (rez) {
        console.log(`start`)
        let nzd = 0;
        for (let i = Math.min(rez.ch, rez.zn); i > 0; i--) {
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
            }
        } else {
            return rez;
        }
    }
}

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
    let v1_ch = parseInt(document.getElementById('v1_ch').value),
        v1_zn = parseInt(document.getElementById('v1_zn').value),
        v2_ch = parseInt(document.getElementById('v2_ch').value),
        v2_zn = parseInt(document.getElementById('v2_zn').value),
        action = document.getElementById('inputAction').value;
    if (action === '') {
        alert('Оберіть дію');
        return false;
    };
    if (checkValid(v1_ch, v1_zn, v2_ch, v2_zn) === true) {
        drobb.setValue('value1', v1_ch, v1_zn);
        drobb.setValue('value2', v2_ch, v2_zn);
        if (action === 'addition') {
            const {
                ch,
                zn
            } = drobb.addition();
            return showResult(ch, zn);
        }
        if (action === 'subtract') {
            const {
                ch,
                zn
            } = drobb.subtract();
            return showResult(ch, zn);
        };

        if (action === 'multiply') {
            const {
                ch,
                zn
            } = drobb.multiply();
            return showResult(ch, zn);
        };

        if (action === 'divide') {
            const {
                ch,
                zn
            } = drobb.divide();
            return showResult(ch, zn);
        };
    };
}