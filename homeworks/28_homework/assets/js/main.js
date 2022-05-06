// 1
function adding01And02() {
    console.log((0.1 + 0.2).toFixed(1));
}

// 2
function addStringAndNumber() {
    let a = '1';
    let b = 2;
    let rez = parseInt(a) + b;
    console.log(rez);
}

// 3
function flashDrive() {
    const flash = parseInt(prompt('Вкжіть обсяг флешки в Гб'));
    const rez = Math.floor((flash * 1024) / 820);
    alert(`На флешку поміститься ${rez} файлів розміром 820 Мб`);
}

// 4
function calcChocolate() {
    const cash = parseFloat(prompt('Вкжіть суму грошей в гаманці'));
    const prise = parseFloat(prompt('Вкжіть ціну однієї шоколадки'));
    const chocolate = Math.floor(cash / prise);
    const rez = (cash % prise).toFixed(1);
    alert(`Ви можете придбати ${chocolate} шоколадок і у вас залишиться ще ${rez} грн`);
}

// 5
function backwardsNum() {
    const abc = +prompt('Введіть тризначне число'); //123
    const a = abc % 10; //3
    const ab = ((abc - a) / 10); //12
    const b = ab % 10; //2
    const c = (ab - b) / 10 //1
    const rez = (a * 100) + (b * 10) + c;
    alert(`Результат: ${rez}`);

}

// 6
function deposit() {
    const x = parseInt(prompt('Вкжіть суму вкладу')); //100
    const y = parseInt(prompt('Вкжіть на який термін вклад у місяцях')); //2
    const a = x * 0.05; // річні
    const b = a / 12; // відсотки на 1 місяць
    const rez = (b * y).toFixed(2); // нараховані відсотки
    alert(`Сума нарахованих відсотків: ${rez}`);
}

// 7
function task7() {
    const a = 2 && 0 && 3;
    const b = 2 || 0 || 3;
    const c = 2 && 0 || 3;
    alert(`Результат: ${a}, ${b}, ${c}`);

}

// 8
// function calc() {
//     console.log();
// }

// 9
// function calc() {
//     console.log();
// }

// 4 Завдання з використанням IF 
function isTimeValid() {
    let hours = prompt('Вкжіть години');
    let minutes = prompt('Вкжіть хвилини');
    let sec = prompt('Вкжіть секунди');
    let errText = '';

    if (hours == '') {
        errText += 'Введіть години. ';
    } else {
        hours = parseInt(hours);
    }
    if (isNaN(hours)) {
        errText += 'Вкажіть години у цифрах. ';
    }
    if (hours < 0 || hours > 24) {
        errText = errText + 'Вкажіть години коректно [0..23]. ';
    }

    if (minutes == '') {
        errText += 'Введіть хвилини. ';
    } else {
        minutes = parseInt(minutes);
    }
    if (isNaN(minutes)) {
        errText += "Вкажіть хвилини у цифрах. ";
    }
    if (minutes < 0 || minutes > 60) {
        errText += + "Вкажіть хвилини коректно [0..60]. ";
    }

    if (sec == '') {
        errText += 'Введіть секунди. ';
    } else {
        sec = parseInt(sec);
    }
    if (isNaN(sec)) {
        errText += "Вкажіть секунди у цифрах. ";
    }
    if (sec < 0 || minutes > 60) {
        errText = errText + "Вкажіть секунди коректно [0..60]. ";
    }

    if (errText !== '') {
        alert(errText);
    } else {
        alert('Час: '+hours+':'+minutes+':'+sec);
    }
}