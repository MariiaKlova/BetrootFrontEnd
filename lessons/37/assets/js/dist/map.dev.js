"use strict";

//* всі змінні мають бути задекларовані в глобальному js, або має бути замикання на сторінках
//* тут зроблено замикання
{
  var myMap;
  var greenIcon;

  if (typeof window.myMap === 'undefined') {
    myMap = L.map('map').setView([48.9201138, 24.7255174], 13);
  }

  greenIcon = L.icon({
    iconUrl: 'assets/leaflet/images/leaf-green.png',
    shadowUrl: 'assets/leaflet/images/leaf-shadow.png',
    iconSize: [38, 95],
    // size of the icon
    shadowSize: [50, 64],
    // size of the shadow
    iconAnchor: [22, 94],
    // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],
    // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

  });
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  L.marker([48.9201138, 24.7255174], {
    icon: greenIcon
  }).addTo(myMap).bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
}