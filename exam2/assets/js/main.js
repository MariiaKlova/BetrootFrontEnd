$(document).ready(function () {

    new Splide('#splide_main', {
        height: '100%',
        autoplay: true,
        type: 'loop',
        perPage: 1,
        arrows: false,
        direction: 'ttb',
        pagination: true,
        easing: 'cubic-bezier(.71,.3,.39,.94)',
        speed: 800,
        breakpoints: {
            1000: {
                drag: false
            }
        }
    }).mount();

    $('.scroll_down, .main_menu li a, .logo a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('header').outerHeight() - 40
        }, 600)
    })

    window.addEventListener('scroll', function () {
        if (window.scrollY > document.getElementById('section_main_slider').clientHeight) {
            document.getElementById('header').classList.add('scroll')
        } else {
            document.getElementById('header').classList.remove('scroll')
        }
    })

    function toggleMenu() {
        $('.hamburger').toggleClass('is-active');
        $('#sidebar').toggleClass('open');
        $('body').toggleClass('lock');
    }

    $('.main_menu ul li a').on('click', function () {
        $('.main_menu ul li a').removeClass('active');
        $(this).addClass("active")
    });

    $('.hamburger, #sidebar li a, #sidebar .logo').on('click', function () {
        toggleMenu();
    });

    async function newsData() {
        const news = await fetch('assets/data/news.json')
            .then(resp => {
                return resp.json();
            })
            .then(resp => {
                return resp;
            });
        let newsHtml = '';
        news.forEach(el => {
            newsHtml += `
        <a class="news_slider_item splide__slide" href="#">
            <div class="news_slider_item_wrap">
                <div class="news_image_wrap">
                    <img data-splide-lazy="${el.img}" alt="image">
                </div>
                <div class="news_content">
                    <h4 class="h4">${el.name}</h4>
                    <p class="descr">${el.description}</p>
                    <div class="news_author">
                        <div class="author_img"><img data-splide-lazy="${el.author.author_img}" alt="">
                        </div>
                        <div class="author">
                            <p class="author_name">${el.author.author_name}</p>
                            <p class="author_date">${el.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        <a>`
        })

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
                    focus: false,
                },
                900: {
                    perPage: 2,
                    focus: false,
                    arrows: false,
                },
                700: {
                    perPage: 1,
                    focus: false,
                    arrows: false,
                },
            }
        }).mount();
    };

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
        iconAnchor: [53, 53],
    });

    function initMap() {
        let map = L.map('map', {
            scrollWheelZoom: false,
            center: [40.65, -73.88],
            zoom: 13
        });

        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([40.6784477, -73.8977705], {
            icon: pin
        }).addTo(map)

        L.marker([40.6784477, -73.8977705], {
            icon: pin
        }).addTo(map)

    };

    document.getElementById('load_map_linck').addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        document.getElementById('map').innerHTML = '';
        initMap();
    })
});