// 1
function hello1(name) {
    if (name == '') {
        return false;
    }
    alert('hello, ' + name);
}
// 2
function hello2(name) {
    if (name != '') {
        alert('hello, ' + name);
    } else {
        alert('Enter your name');
    }
}
// 3
function numCheck(num) {
    if (num < 0) {
        alert('-');
    } else if (num > 0) {
        alert('+');
    } else if (num == 0) {
        alert('0');
    } else {
        alert('Enter number');
    }
}

// 4
function emailCheck(email) {
    if (email != '') {
        if (isValidEmail(email)) {
            return true;
        } else {
            alert('Email is not valid');
        }
    } else {
        alert('Enter your email');
    }
}

// 5
function someNum() {
    const num = 4;
    let y = 0;
    if (num <= 12) {
        y = 1;
    } else if (num >= 12 && num < 18 && num != 16) {
        y = 2;
    } else if (num == 16 || num == 25 || num == 27) {
        y = 3;
    }
    console.log(y);
}

// 6. Високосный год
// год, номер которого кратен 400, — високосный;
// остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
// остальные годы, номер которых кратен 4, — високосные.
// Итого: Либо кратен 400, либо кратен 4 и при єтом не кратен 100


// 7 Скільки днів у місяці 30 чи 31
function days() {
    let d;
    const num = prompt('Enter month numder');
    switch (num) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            d = '31';
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            d = '30';
            break;
        case '2':
            d = '28';
            //якщо ми знаємо ще і рік, можна додати попередню функцію високосного року
            break;
        default:
            d = 'Invalid value';
            break;
    }
}

// 8 Тернарний оператор const acceptLang = (x) ? y : z;

/*
const acceptLang = '';
if(currentLang = 'ua'){
    acceptLang = 'uk_UA';
} else {
    acceptLang = 'en_GB';
}
*/

const acceptLang = (currentLang ==='ua') ? 'uk_UA' : 'en_GB';