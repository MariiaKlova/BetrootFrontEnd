let kolo = new Circle(4);
updateKolo(4);

document.getElementById('createKoloBtn').addEventListener('click', function (event) {
    event.preventDefault();
    let r = document.getElementById('createKolo').value;
    updateKolo(r);
})

function updateKolo(r) {
    kolo.radius = r;
    kolo.render('new_kolo', r);
    kolo.render('radius', r);
    kolo.render('diameter', kolo.diameter);
    kolo.render('area', kolo.circleArea());
    kolo.render('length', kolo.circleLength());
}

const marker = new Marker();

document.getElementById('markerInput').addEventListener('click', function (event) {
    event.preventDefault();
    if (document.getElementById('markerInk').value > 100) {
        alert('Чорнил не може бути більш ніж 100%');
        return false;
    }
    const color = document.getElementById('markerColor').value;
    const ink = parseInt(document.getElementById('markerInk').value);
    marker.color = color;
    if (ink) {
        marker.ink = ink;
    }
    marker.renderText('inkOutput', marker._ink + '%');
})

document.getElementById('textInput').addEventListener('click', function (event) {
    event.preventDefault();

    if (document.getElementById('markerText').value == '') {
        alert('Введіть якийсь текст');
        return false;
    } else {
        const text = document.getElementById('markerText').value;
        marker.renderText('textOutput', marker.writeText(text));
        marker.renderText('inkOutput', marker._ink + '%');
    }
})


// const empl1 = new Employee({
//     name: 'Bob',
//     position: 'Manager',
//     age: 30
// });
// const empl2 = new Employee({
//     name: 'John',
//     position: 'High Manager',
//     age: 35
// });

const list = [
    new Employee({
        name: 'Борис',
        lastName: 'Карий',
        position: 'Менеджер',
        age: 30,
        exp: 3
    }),
    new Employee({
        name: 'Орест',
        lastName: 'Сокіл',
        position: 'Адміністратор',
        age: 42,
        exp: 12
    }),
    new Employee({
        name: 'Ірина',
        lastName: 'Біла',
        position: 'Касир',
        age: 35,
        exp: 5
    }),
    new Employee({
        name: 'Ярослава',
        lastName: 'Кудрява',
        position: 'Касир',
        age: 32,
        exp: 7
    }),
]

const myTable = new EmpleTable(list)
myTable.vievHtml('tbody')