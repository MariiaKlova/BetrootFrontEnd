// запис обекту
const obj = new Object();

// скорочений запис обекту
const obj2 = {};



// опис змінної {ключ: значення, } 
const car = {
    mark: 'Tesla',
    model: 'S',
    year: 2020,
    'engine type': 'electro', // ключ з двох слів
    12: 123456, // ключ з числа
    capaciti: 100.3,
    autoPilot: true,
    color: 'black',
    cassets,
    viewMark: function () {
        console.log(this);
        console.log(this.mark);
    },
    // viewMark: () => {
    //     console.log(this);
    //     console.log(this.mark);
    // },   ПРАЦЮВАТИ НЕ БУДЕ, БО В СТРІЛОЧНІЙ ФУНКЦІЇ НЕМАЄ this
    size: {
        lenghth: 4976,
        width: 1963,
        height: 1435
    },
    version: ['75', '75D', '100D', 'P100D']
};

car.maxSpeed = 250; // додавання ключа у обект
car['max-Speed'] = 250; // додавання ключа з двох слів у обект

const size = car.height;

console.log(car);
console.log(car.mark);
console.log(car['engine type']); // ключ з двох слів
console.log(car[12]); // ключ з числа
console.log(car.size.height);
console.log(size.height);

car.viewMark();



console.log('===================');


//вивести ключі обекту в html
let carUl = '<ul>';
for (let k in car) {
    console.log(k+': '+car[k]);
    carUl += '<li><b>'+k+':</b>'+car[k]+'</li>'
}
carUl += '</ul>';

document.getElementById('task1_result').innerHTML = carUl;



const a ={
    aa: 1,
    bb: {
        cc: 3
    }
}

// const b  = Object.assign({}, a):   // копіювання обекту без вкладень
const b = JSON.parse(JSON.stringify(a));  // глибоке копіювання обекту РЕКОМЕНДОВАНО

b.aa = 2;
b.bb.cc = 4;
console.log(a.aa, b.aa);
console.log(a.bb.cc, b.bb.cc);
