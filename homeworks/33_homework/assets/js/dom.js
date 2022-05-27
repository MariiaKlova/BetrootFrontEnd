const style = {
    body: {
        backgroundColor: '#202124',
        color: '#fafafa'
    },
    author: {
        color: 'lightblue',
    },
    song: {
        textTransform: 'lowercase',
    },
    button: {
        borderRadius: '4px',
        backgroundColor: 'blue',
        color: 'lightblue',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '20px',
        display: 'flex',
        margin: '20px'
    },
    modal: {
        display: 'none',
        position: 'absolute',
        top: '20%',
        left: '40%',
        textAlighn: 'center',
        margin: '0 auto',
        border: '1px solid lightblue',
        padding: '10px 20px',
        color: 'lightblue',
        fontSize: '24px',
        fontWeight: '800'
    },
    div: {
        height: '40px',
        width: '40px',
        border: '1px solid lightblue',
        margin: '20px 40px'
    },
    light: {
        height: '40px',
        width: '40px',
        backgroundColor: 'red',
        display: 'block'
    }
}

function applyStyle(styles, elem) {
    for (let prop in styles) {
        elem.style[prop] = styles[prop];
    }
}

// Створити сторінку, що показує нумерований список пісень:

const playList = [{
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    }, {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    }, {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

const wrap = document.querySelector('.music_wrap');
const ol = document.createElement('ol');


playList.forEach(el => {
    let li = document.createElement('li');
    const author = document.createElement('span');
    const song = document.createElement('span');

    author.innerText = el.author;
    song.innerText = el.song;

    author.classList.add('author');
    song.classList.add('song');

    applyStyle(style.author, author);
    applyStyle(style.song, song);

    li.append(author, ' --- ', song);
    ol.append(li);
});

wrap.append(ol);

// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const modal = document.createElement('div');
const buttonForOpen = document.createElement('button');
const buttonForClose = document.createElement('button');
const wrap2 = document.querySelector('.modal_wrap');

buttonForOpen.setAttribute('type', 'button');
buttonForClose.setAttribute('type', 'button');

buttonForOpen.innerText = 'Open modal window';
buttonForClose.innerText = 'Close';

modal.innerText = 'Modal window ';

wrap2.append(modal);
modal.append(buttonForClose);
wrap2.prepend(buttonForOpen);

buttonForOpen.onclick = function () {
    modal.style.display = modal.style.display === 'none' && 'block';
};

buttonForClose.onclick = function () {
    modal.style.display = modal.style.display === 'block' && 'none';
};

// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.


const div = document.createElement('div');
const light = document.createElement('div');
const button = document.createElement('button');
const wrap3 = document.querySelector('.color_wrap');

button.setAttribute('type', 'button');
button.innerText = 'Click';

wrap3.append(button);
wrap3.append(div);
div.append(light)

const arr = ['red', 'yellow', 'green', 'yellow'];
let i = 0;

button.onclick = function () {
    light.style.backgroundColor = arr[i];
    i++;
    if (i === arr.length) {
        i = 0;
    }
    // if (light.style.backgroundColor === 'red') {
    //     light.style.backgroundColor = 'yellow';
    //     return;
    // };
    // if (light.style.backgroundColor === 'yellow') {
    //     light.style.backgroundColor = 'green';
    //     return;
    // };
    // if (light.style.backgroundColor === 'green') {
    //     light.style.backgroundColor = 'red';
    //     return;
    // }
};

//////////////////


applyStyle(style.body, document.body);
applyStyle(style.button, buttonForOpen);
applyStyle(style.button, buttonForClose);
applyStyle(style.button, button);
applyStyle(style.modal, modal);
applyStyle(style.div, div);
applyStyle(style.light, light);