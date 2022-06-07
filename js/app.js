window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista__music'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores__music',
        arrows: {
            prev: '.carousel__anterior__music',
            next: '.carousel__siguiente__music'
        },
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});

window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista__corto'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores__corto',
        arrows: {
            prev: '.carousel__anterior__corto',
            next: '.carousel__siguiente__corto'
        },
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});

window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista__auvi'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores__auvi',
        arrows: {
            prev: '.carousel__anterior__auvi',
            next: '.carousel__siguiente__auvi'
        },
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});
