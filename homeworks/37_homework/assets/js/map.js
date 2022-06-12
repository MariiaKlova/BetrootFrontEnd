let map = L.map('map').setView([48.9201138, 24.7255174], 13);

const po = [{
        "lat": 48.9243267,
        "lng": 24.7215312,
        "text": "Палац Потоцьких",
        "icon": "orange"
    },
    {
        "lat": 48.9239001,
        "lng": 24.713872,
        "text": "Музей мистецтв Прикарпаття",
        "icon": "orange"
    },
    {
        "lat": 48.9225881,
        "lng": 24.7105964,
        "text": "Івано-Франківська Ратуша",
        "icon": "orange"
    },
    {
        "lat": 48.9200356,
        "lng": 24.7119099,
        "text": "Бар Десятка",
        "icon": "red"
    },
    {
        "lat": 48.9195056,
        "lng": 24.7117297,
        "text": "Стометрівка",
        "icon": "green"
    },
    {
        "lat": 46.5081253,
        "lng": 30.7527652,
        "text": "Одеса",
        "icon": "green"
    },
    {
        "lat": 48.1837834,
        "lng": 24.5188089,
        "text": "Говерла",
        "icon": "green"
    },
    {
        "lat": 48.8963578,
        "lng": 24.7555072,
        "text": "Кінно-спортивний клуб 'Лідер'",
        "icon": "red"
    },
    {
        "lat": 48.9214803,
        "lng": 24.7079458,
        "text": "Фонтан на Вічевому майдані",
        "icon": "green"
    }
];

async function placesData() {
    const places = await fetch('assets/data/places.json')
        .then(resp => {
            return resp.json();
        })
        .then(resp => {
            return resp;
        });
    places.forEach(el => {
        markers.addLayer(L.marker([el.lat, el.lng], {
            icon: eval(el.icon)
        }).bindPopup(el.text))
    });
}


let LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'assets/leaflet/images/leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
});


const green = new LeafIcon({ iconUrl: 'assets/leaflet/images/leaf-green.png'});
const red = new LeafIcon({iconUrl: 'assets/leaflet/images/leaf-red.png'
});
const orange = new LeafIcon({
    iconUrl: 'assets/leaflet/images/leaf-orange.png'
});

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let markers = L.markerClusterGroup();

placesData();


map.addLayer(markers);