const style = {
    body: {
        backgroundColor: '#202124',
        color: 'white'
    },
    button: {
        borderRadius: '4px',
        backgroundColor: 'pink',
        color: '#121212',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '20px',
        display: 'flex'
    },
    my_context: {
        border: '1px solid #ffffff',
        backgroundColor: 'pink',
        width: '100px',
        height: '100px',
        position: 'absolute'
    }
};

function applyStyle(styles, elem) {
    for (let prop in styles) {
        elem.style[prop] = styles[prop];
    }
};

//* 1 *************************************************** *//

const btn = document.getElementById('btn');

btn.onclick = butnHendler1;

function butnHendler1() {
    alert('Helo world');
};

// Другий виклик onclick перезапише перший onclick 
// btn.onclick = butnHendler2; 
// function butnHendler2() {
//     alert('Helo world');
// };

//* 2 *******************ПРО ЖИВУ І НЕ ЖИВУ КОЛЕКЦІЮ************************* *//

// querySelectorAll - Повертає неживу колекцію NodeList, Як масив обєктів
const liElements = document.querySelectorAll('.list li');

//! getElementsByTagName -Повертає живу колекцію і все спрацює
// const liElements = document.getElementsByTagName('li'); 

//* 3 *************************************************** *//
//Додамо нову строку, але на неї не буде застосовуватись liColorChangeHandler, бо на він не попадає в функцію forEach

const list = document.querySelector('.list');
const newLi = document.createElement('li');
newLi.innerText = 'New Lorem ipsum dolor sit amet.';

//ToDo  newLi.onclick = liColorChangeHandler;  // При неживій колекції без цього не зпрацює
//! з getElementsByTagName спрацює і без цього

list.append(newLi);

console.log(liElements); // Виведе NodeList(DOM)

//Перетворити обєкт на масив // Цей спосіб не використовується
[...liElements].forEach(li => {
    li.onclick = clickCountHandler;
});


function clickCountHandler() {
    console.log('clicked'); // працює тільки на основні li
};

//* 4 *************************************************** *//
//Створюємо кнопку на динамічне додавання єлементу

const btnLi = document.getElementById('btnLi');
btnLi.onclick = btnLiHendler;

function btnLiHendler() {
    const newLi = document.createElement('li');
    //ToDo  newLi.onclick = liColorChangeHandler; // При неживій колекції без цього не спрацює
    newLi.innerText = 'BUTTON New Lorem ipsum dolor sit amet.';
    list.append(newLi);
};

//* 5 ****************** ПРО СЛУХАЧ ПОДІЙ ********************************* *//

document.body.addEventListener('click', function (event) {
    // console.log(event); // виведе PointerEvent (DOM)
    if (event.target.nodeName === 'LI') {
        /* винесемо в окрему функцію liColor ↓ 
        if (event.target.classList.contains('red')) {
            event.target.style.color = 'red';
        };
        if (event.target.classList.contains('blue')) {
            event.target.style.color = '#5495ea';
        };
        */
        liColor(event.target);
        // btnLiHendler(); // Можна додавати багато функцій
    };
    if (event.target.nodeName === 'P') {
        event.target.style.color = 'pink';
    };
});

list.addEventListener('click', function () {
    console.log('click on list');
});

function liColor(elem) {
    if (elem.classList.contains('red')) {
        elem.style.color = 'red';
    };
    if (elem.classList.contains('blue')) {
        elem.style.color = '#5495ea';
    };
}

//* ******************preventDefault********stopPropagation************************* *//

document.body.addEventListener('contextmenu', function (e) {
    console.log('contextmenu');
    e.stopPropagation(); //Перериває всплиття функції
    e.preventDefault(); //Відключення стандартних функцій
    const div = document.createElement('div');
    div.setAttribute('id', 'my_context');
    div.style.left = e.clientX + 'px';
    div.style.top = e.clientY + 'px';
    document.body.append(div);
    applyStyle(style.my_context, div);
});

window.addEventListener('mouseup', function (e) {
    var my_context = document.getElementById('my_context');
    try {
        if (e.target != my_context && e.target.parentNode != my_context) {
            my_context.remove();
        }
    } catch (err) {}
});
2

//* *************KeybordEvent************************************** *//

document.body.addEventListener('keydown', function (e) {
    // console.log(e); // KeyboardEvent при нажатій кнопці
    blockCopy(e);

});

function blockCopy(e) {
    if (e.ctrlKey && e.code === 'KeyC' || e.code === 'KeyU' /* || e.code === 'F12' */) {
        e.preventDefault();
        console.warn('Неможна копіювати');
        return false;
    };
};

/*
! обхід функції блокування blockCopy в консолі браузера:
blockCopy() = function(){ return false;}

*/


applyStyle(style.body, document.body);
applyStyle(style.button, btn);
applyStyle(style.button, btnLi);