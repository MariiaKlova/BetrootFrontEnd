"use strict";

$(document).ready(function () {
  new Splide('#splide_main', {
    height: '100vh',
    // autoplay: true,
    type: 'loop',
    perPage: 1,
    arrows: false,
    direction: 'ttb',
    pagination: true,
    easing: 'cubic-bezier(.71,.3,.39,.94)',
    speed: 800,
    breakpoints: {
      700: {
        drag: false
      }
    }
  }).mount();
  $('.scroll_down, .main_menu li a, .logo a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - $('header').outerHeight() - 40
    }, 600);
  });
  window.addEventListener('scroll', function () {
    if (window.scrollY > document.getElementById('section_main_slider').clientHeight) {
      document.getElementById('header').classList.add('scroll');
    } else {
      document.getElementById('header').classList.remove('scroll');
    }
  });

  function toggleMenu() {
    $('.hamburger').toggleClass('is-active');
    $('#sidebar').toggleClass('open');
    $('body').toggleClass('lock');
  }

  $('.main_menu ul li a').on('click', function () {
    $('.main_menu ul li a').removeClass('active');
    $(this).addClass("active");
  });
  $('.hamburger, #sidebar li a').on('click', function () {
    toggleMenu();
  });

  function newsData() {
    var news, newsHtml;
    return regeneratorRuntime.async(function newsData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch('assets/data/news.json').then(function (resp) {
              return resp.json();
            }).then(function (resp) {
              return resp;
            }));

          case 2:
            news = _context.sent;
            newsHtml = '';
            news.forEach(function (el) {
              newsHtml += "\n        <a class=\"news_slider_item splide__slide\" href=\"#\">\n            <div class=\"news_slider_item_wrap\">\n                <div class=\"news_image_wrap\">\n                    <img data-splide-lazy=\"".concat(el.img, "\" alt=\"image\">\n                </div>\n                <div class=\"news_content\">\n                    <h4 class=\"h4\">").concat(el.name, "</h4>\n                    <p class=\"descr\">").concat(el.description, "</p>\n                    <div class=\"news_author\">\n                        <div class=\"author_img\"><img data-splide-lazy=\"").concat(el.author.author_img, "\" alt=\"\">\n                        </div>\n                        <div class=\"author\">\n                            <p class=\"author_name\">").concat(el.author.author_name, "</p>\n                            <p class=\"author_date\">").concat(el.date, "</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        <a>");
            });
            document.getElementById('news_slider_list').innerHTML = newsHtml;
            new Splide('#news_slider', {
              type: 'loop',
              perPage: 3,
              focus: 'center',
              // perMove: 3,
              lazyLoad: 'nearby',
              easing: 'cubic-bezier(.71,.3,.39,.94)',
              speed: 400,
              breakpoints: {
                1100: {
                  perPage: 2,
                  focus: false
                },
                900: {
                  perPage: 2,
                  focus: false,
                  arrows: false
                },
                700: {
                  perPage: 1,
                  focus: false,
                  arrows: false
                }
              }
            }).mount();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  ;
  newsData();
  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    thumbnail: true,
    // allowMediaOverlap: true,
    // toggleThumb: true,
    download: false,
    getCaptionFromTitleOrAlt: false,
    mobileSettings: {
      controls: false,
      showCloseIcon: false,
      download: false,
      rotate: false
    }
  });
  var pin = L.icon({
    iconUrl: 'assets/leaflet/images/pin.svg',
    iconSize: [106, 106],
    iconAnchor: [53, 53]
  });

  function initMap() {
    var map = L.map('map', {
      scrollWheelZoom: false,
      center: [40.65, -73.88],
      zoom: 13
    });
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([40.6784477, -73.8977705], {
      icon: pin
    }).addTo(map);
    L.marker([40.6784477, -73.8977705], {
      icon: pin
    }).addTo(map);
  }

  ;
  document.getElementById('load_map_linck').addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('map').innerHTML = '';
    initMap();
  });
});