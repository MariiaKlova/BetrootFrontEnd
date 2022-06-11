let map;
const icons = {
    red: L.icon({
        iconUrl: 'assets/leaflet/images/leaf-red.png',
        shadowUrl: 'assets/leaflet/images/leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }),
    orange: L.icon({
        iconUrl: 'assets/leaflet/images/leaf-orange.png',
        shadowUrl: 'assets/leaflet/images/leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }),
    green: L.icon({
        iconUrl: 'assets/leaflet/images/leaf-green.png',
        shadowUrl: 'assets/leaflet/images/leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    })
};

const places = [{
        lat: 48.9243267,
        lng: 24.7215312,
        text: "Палац Потоцьких",
        icon: 'orange'
    },
    {
        lat: 48.9239001,
        lng: 24.713872,
        text: "Музей мистецтв Прикарпаття",
        icon: 'orange'
    },
    {
        lat: 48.9225881,
        lng: 24.7105964,
        text: "Івано-Франківська Ратуша",
        icon: 'orange'
    },
    {
        lat: 48.9200356,
        lng: 24.7119099,
        text: "Бар Десятка",
        icon: 'red'
    },
    {
        lat: 48.9195056,
        lng: 24.7117297,
        text: "Стометрівка",
        icon: 'green'
    },
    {
        lat: 46.5081253,
        lng: 30.7527652,
        text: "Одеса",
        icon: 'green'
    }
];

function initMap() {
    let map = L.map('map').setView([48.9213845, 24.7205442], 14);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.addLayer(markers);
};

// L.flyTo([46.5081253, 30.7527652]);

const markers = L.markerClusterGroup();

places.forEach(place => {
    markers.addLayer(L.marker([place.lat, place.lng], {
        icon: icons[place.icon]
    }).bindPopup(place.text))
});

// markers.addLayer(L.marker([48.9243267, 24.7215312]).bindPopup('Палац Потоцьких'));
// markers.addLayer(L.marker([48.9239001, 24.713872]).bindPopup('Музей мистецтв Прикарпаття'));
// markers.addLayer(L.marker([48.9225881, 24.7105964]).bindPopup('Івано-Франківська Ратуша'));
// markers.addLayer(L.marker([48.9200356, 24.7119099]).bindPopup('Бар Десятка'));
// markers.addLayer(L.marker([48.9195056, 24.7117297]).bindPopup('Стометрівка'));


document.getElementById('load_map_linck').addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('map').innerHTML = '';
    initMap();
})

Array.from(document.getElementsByClassName('video_wrap')).forEach(el => {
    // const code= el.getAttribute('data-code');
    // console.log(el.dataset.code);
    el.innerHTML =
        `
    <a href="#" class="load_video">
    <img src="https://img.youtube.com/vi/${el.dataset.code}/maxresdefault.jpg">
    </a>
    `;
})

document.body.addEventListener('click', function (e) {
    console.log(e);
    if (e.target.parentElement.classList.contains('load_video')) {
        e.preventDefault();
        e.stopPropagation();
        e.target.parentElement.parentElement.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${e.target.parentElement.parentElement.dataset.code}" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`


        //* для video треба зберегти відео у себе і зробити декілька форматів(для кожного браузера свій формат). 
        // e.target.parentElement.parentElement.innerHTML =
        // `
        // <video src="data/${e.target.parentElement.parentElement.dataset.code}.mp4" 
        // title="YouTube video player" frameborder="0" 
        // muted="true" autoplay controls
        // ></video>
        // `
    }
})