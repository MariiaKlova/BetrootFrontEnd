$(document).ready(function () {
    $('.slick_slider').slick({
        // autoplay: true,
        speed: 300,
        adaptiveHeight: true,
        infinite: true,
        dots: true,
    });


    $('.article_slider').slick({
        slidesToShow: 3,
        slidesToSckrol: 1,
        adaptiveHeight: true,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
});