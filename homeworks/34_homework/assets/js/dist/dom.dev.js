"use strict";

var style_shit = {
  body: {
    backgroundColor: '#202124',
    color: '#fafafa'
  },
  button: {
    borderRadius: '4px',
    backgroundColor: 'lightcoral',
    color: '#121212',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '20px',
    display: 'flex',
    margin: '20px'
  },
  text_block: {
    width: '200px',
    height: '100px',
    padding: '10px 20px',
    border: '1px solid pink',
    backgroundColor: '#202124',
    color: '#fafafa',
    position: 'relative',
    overflow: 'hidden',
    wordWrap: 'break-word'
  },
  block_resize: {
    width: '12px',
    backgroundColor: 'pink',
    bottom: '0',
    right: '0',
    cursor: 'se-resize',
    height: '12px',
    marginTop: '9px',
    position: 'absolute'
  }
};

function appleStyles(style, el) {
  for (var prop in style) {
    el.style[prop] = style[prop];
  }
}

;
var btn = document.getElementById('btn');
appleStyles(style_shit.button, btn); //*********************************** *//

/* 1 Створити HTML-сторінку для відображення/редагування тексту. 
При відкритті сторінки текст відображається за допомогою тега div. 
При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. 
При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. 
Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.*/

/* 3 Створити HTML-сторінку з блоком тексту в рамці. 
Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.
*/

var text_wrap = document.querySelector('.text_wrap');
var text_block = document.createElement('div');
text_block.innerText = 'Hello World. \n Ctrl+E to edit, Ctrl+S to save';
text_wrap.append(text_block);
var block_resize = document.createElement('div');
block_resize.classList.add('resizer');
text_block.append(block_resize);
document.body.addEventListener('keydown', function (e) {
  // console.log(e);
  text_editor(e);
});

function text_editor(e) {
  if (e.ctrlKey && e.code === 'KeyE') {
    e.preventDefault();
    text_block.style.display = "none";
    var textarea = document.createElement("textarea");
    textarea.classList.add("text_block"); // CSS-класс

    textarea.style.width = textarea.value = text_block.innerText; // «содержимое»

    text_block.after(textarea);
    appleStyles(style_shit.text_block, textarea);
    textarea.focus();
    textarea.addEventListener("keydown", function (e) {
      if (e.ctrlKey && e.code === 'KeyS') {
        e.preventDefault();
        text_block.innerHTML = textarea.value;
        textarea.remove();
        text_block.style.display = "";
        text_block.append(block_resize);
      }

      ;
    });
  }

  ;
}

; // позиція миші

var x = 0;
var y = 0; // розмір єлемента

var w = 0;
var h = 0;

var mouseDownHandler = function mouseDownHandler(e) {
  //  поточна позиція курсору при затисканні миші
  x = e.clientX;
  y = e.clientY; // розмір єлемента

  var styles = window.getComputedStyle(text_block);
  w = parseInt(styles.width, 10);
  h = parseInt(styles.height, 10); // виклик mauseListner

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
};

var mouseMoveHandler = function mouseMoveHandler(e) {
  // наскільки пересунуто мишу
  var dx = e.clientX - x;
  var dy = e.clientY - y; // Зміна розміру єлемента

  text_block.style.width = "".concat(w + dx, "px");
  text_block.style.height = "".concat(h + dy, "px"); // запис їх у обєкт стилів

  style_shit.text_block.width = "".concat(w + dx, "px");
  style_shit.text_block.height = "".concat(h + dy, "px");
};

var mouseUpHandler = function mouseUpHandler() {
  // прибирання mauseListner
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);
}; // запит на зміну розміру


var resizers = text_block.querySelectorAll('.resizer'); // Застосування для кожного протягування мишею

[].forEach.call(resizers, function (resizer) {
  resizer.addEventListener('mousedown', mouseDownHandler);
}); //*********************************** *//

/* Створити HTML-сторінку з великою таблицею. 
При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. 
Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
*/
//*********************************** *//

appleStyles(style_shit.body, document.body);
appleStyles(style_shit.text_block, text_block);
appleStyles(style_shit.block_resize, block_resize);