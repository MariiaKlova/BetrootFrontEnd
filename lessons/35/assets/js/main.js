/*
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
const li = document.createElement('li');
const b = document.createElement('b');
const em = document.createElement('em');

li.append(b);
li.append(em);

playList.forEach(item => {
    const liClone = li.cloneNode(true);
    liClone.children[0].innerText = item.author + ': ';
    liClone.children[1].innerText = item.song;
    ol.append(liClone);
});

document.body.prepend(ol);

*/

//********************************* */
/*
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable2");
    switching = true;
    // Установіть напрямок сортування за зростанням:
    dir = "asc";
    //Зробіть цикл, який триватиме до тих пір, поки не буде зроблено перемикання: 
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        // Перегляньте всі рядки таблиці (крім першого, який містить заголовки таблиці): 
        for (i = 1; i < (rows.length - 1); i++) {
            // Почніть з того, що не повинно бути перемикань:
            shouldSwitch = false;
            // Отримайте два елементи, які потрібно порівняти, один із поточного рядка, а інший із наступного: 
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            //Перевірте, чи повинні два рядки помінятися місцями, залежно від напрямку, зростання або спад: asc or desc: 
            if (dir == "asc") {
                if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
                // Якщо так, то позначте як перемикач і розірвіть цикл:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                // Якщо так, то позначте як перемикач і розірвіть цикл:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
        //Якщо перемикач позначено, зробіть перемикач і позначте, що перемикання виконано:
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        // Кожного разу, коли відбувається перемикання, збільшуйте цю кількість на 1
            switchcount++;
        } else {
        // Якщо жодного перемикання не було зроблено І напрямок "asc", встановіть напрямок на «desc» і знову запустіть цикл while.
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
*/

//*************************/

$(function () {
    const val = $(".ol").attr("data-foo", "Hello");
    const text = $("ol li:first-child").html('<b>Hello</b>');

    $("#wrap").find('span').css('color', 'red');

    // Застарілий запис
    // $("ol li").click(function(){
    //     $(this).css('color', 'blue');
    // });

    // без доданих у перспективі динамічних строчок
    $("ol li").on('click', function () {
        $(this).css('color', 'blue');
    });
    // з урахуванням доданих у перспективі динамічних строчок
    $(document).on('click', 'ol li', function () {
        $(this).css('color', 'blue');
    });

    $("#sq")
        .css('color', 'blue')
        .css('border', '2px solid green');
    $("#sq").css({
        'color': 'blue',
        'border': '2px solid green',
        opacity: .5
    });

    $("#sq").on('click', function () {
        $(this).animate({left: 600 }, 1000);
    });
    
});