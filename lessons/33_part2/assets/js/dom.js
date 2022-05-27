//Создать html-страницу, на которой будет кнопка и текст. При нажатии на кнопку, текст должен скрываться. При повторном нажатии – текст должен снова отображаться.

const text = 'Lorem ipsum dolor sit amet.'

const div = document.createElement('div');
const p = document.createElement('p');
div.append(p);

const button = document.createElement('button');
button.setAttribute('type', 'button');

button.innerText = 'Click to toggle text';

button.onclick = function () {
    // if (div.innerText === '') {
    //     div.innerText = text;
    // } else {
    //     div.innerText = '';
    // }
    p.innerText = p.innerText === '' ? text : '';
};

const wrap = document.querySelector('#text_wrap');

wrap.append(div);
wrap.prepend(button);

const style = {
    body: {
        backgroundColor: '#202124'
    },
    div: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        border: '1px solid lightblue',
        padding: '10px 20px',
        color: 'lightblue',
        fontSize: '24px',
        fontWeight: '800'
    },
    button: {
        borderRadius: '4px',
        backgroundColor: 'blue',
        color: 'lightblue',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '20px',
        margin: '10px auto',
        display: 'flex'
    },
    bar: {
        height: '40px',
        border: '1px solid lightblue',
        margin: '20px auto',
        width: '82%'
    },
    scale: {
        height: '38px',
        backgroundColor: 'blue',
        width: '0'
    }
}

function applyStyle(styles, elem) {
    for (let prop in styles) {
        elem.style[prop] = styles[prop];
    }
}

applyStyle(style.div, div);
applyStyle(style.body, document.body);
applyStyle(style.button, button);

// Создать html-страницу с progressbar и кнопкой, при нажатии на которую заполненность progressbar увеличивается на 5%.


const progress_wrap = document.querySelector('.progress_wrap');

const bar = document.createElement('div');
const scale = document.createElement('div');

const buttonForScale = document.createElement('button');
const buttonForScaleClean = document.createElement('button');


buttonForScale.setAttribute('type', 'button');
buttonForScaleClean.setAttribute('type', 'button');
buttonForScale.innerText = 'Add 10%'
buttonForScaleClean.innerText = 'Clean'

bar.append(scale);
progress_wrap.append(bar);
progress_wrap.append(buttonForScale);
progress_wrap.append(buttonForScaleClean);

buttonForScale.onclick = function () {
    if (parseInt(scale.style.width) < 100){
        scale.style.width = (parseInt(scale.style.width) + 10) + '%';
    } else {
        buttonForScale.setAttribute('disabled', 'disabled');
        buttonForScale.style.opacity = '0.2';
    }
}

buttonForScaleClean.onclick= function (){
        scale.style.width = 0;
        buttonForScale.removeAttribute('disabled', 'disabled');
        buttonForScale.style.opacity = '1';
}


applyStyle(style.bar, bar);
applyStyle(style.scale, scale);
applyStyle(style.button, buttonForScale);
applyStyle(style.button, buttonForScaleClean);
