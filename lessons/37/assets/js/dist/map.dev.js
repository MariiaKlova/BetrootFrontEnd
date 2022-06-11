"use strict";

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
} ///////////////////
// setCookie('my-js-cookie', 'some value here')
// function setCookie(name, value, days) {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }
// function getCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//     }
//     return null;
// }
// function eraseCookie(name) {
//     document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }
// let CARD = [
//     // {
//     //         "name": "Milk",
//     //         "qty": 2,
//     //         "prise": 12.34,
//     //         "isBuy": false
//     //     },
//     //     {
//     //         "name": "Water",
//     //         "qty": 3,
//     //         "prise": 10.34,
//     //         "isBuy": false
//     //     },
//     //     {
//     //         "name": "Bread",
//     //         "qty": 1,
//     //         "prise": 17.34,
//     //         "isBuy": false
//     //     }
// ]
// // Встановити значення у localStorage
// // localStorage.setItem('CARD', JSON.stringify(CARD))
// //Отримання даних з localStorage
// const CARD_FROM_STORAGE = JSON.parse(localStorage.getItem('CARD'));
// if (CARD_FROM_STORAGE !== null) {
//     CARD = CARD_FROM_STORAGE;
// }
// CARD.push({
//     name: "Banana",
//     qty: 1,
//     prise: 12.00,
//     isBuy: false
// })
// localStorage.setItem('CARD', JSON.stringify(CARD))
// console.log('CARD', CARD_FROM_STORAGE);