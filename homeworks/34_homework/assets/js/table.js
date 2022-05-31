const style_shit = {
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
    thead: {
        backgroundColor: 'lightcoral',
        color: '#551a8b',
        cursor: 'pointer',
    }
};

function appleStyles(style, el) {
    for (let prop in style) {
        el.style[prop] = style[prop];
    }
};

const btn = document.getElementById('btn');
const thead = document.querySelector('thead');

//*********************************** *//
/* Створити HTML-сторінку з великою таблицею. 
При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. 
Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
*/

function sortTable(n) {
    var table, rows, switching, i, x, y, dir, shouldSwitch, switchCount = 0;
    table = document.getElementById("myTable2");
    switching = true;
    dir = "asc";
    //Цикл, який триватиме до тих пір, поки не буде зроблено перемикання: 
    while (switching) {
        switching = false;
        rows = table.rows;
        // Перебрати всі рядки таблиці (крім першого, який містить заголовки таблиці): 
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            // Два елементи, які потрібно порівняти, один із поточного рядка, а інший із наступного: 
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (n === 4) {
                // Перевірка за колонкою з датою + функція convertDate
                if (dir === "asc") {
                    if (convertDate(x.innerText) > convertDate(y.innerText)) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir === "desc") {
                    if (convertDate(x.innerHTML) < convertDate(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else {
                if (dir === "asc") {
                    if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir === "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            //Зміна рядків місцямиб якщо shouldSwitch = true
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        } else {
            // Якщо жодного перемикання не було зроблено І напрямок "asc", встановіть напрямок на «desc» і знову запустить цикл while.
            if (switchCount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function convertDate(d) {
    var p = d.split(".");
    return +(p[2] + p[1] + p[0]);
}

const arr = document.querySelectorAll('th');
arr.forEach((el, index) => {
    el.addEventListener('click', function () {
        sortTable(index);
    })
});

//*********************************** *//

appleStyles(style_shit.body, document.body);
appleStyles(style_shit.button, btn);
appleStyles(style_shit.thead, thead );