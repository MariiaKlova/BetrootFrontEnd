$(document).ready(function () {
    $('.main_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: true,
        arrows: false,
    });

    $('.products_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }

            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ],
    })

    $('.partners_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,

                }
            }
        ]
    })

    function toggleMenu() {
        $('.hamburger').toggleClass('is-active');
        $('#sidebar').toggleClass('open');
        $('body').toggleClass('lock');
    }

    $('.hamburger, #sidebar li a').on('click', function () {
        toggleMenu();
    });
});