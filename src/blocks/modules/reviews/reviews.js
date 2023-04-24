const reviewSwiper = new Swiper('.reviews__swiper', {
    spaceBetween: 25,
    direction: 'horizontal',
    slidesPerView: 'auto',
    grabCursor: true,

    freeMode: {
        enabled: true,
        sticky: true,
    },
    
    centeredSlides: true,

    breakpoints: {
        768: {
            centeredSlides: true,
        },
        1140: {
            centeredSlides: false,
            navigation: {
                enable: false
            },
            pagination: {
                enable: false
            }
        }
    },
    navigation: {
        nextEl: '.reviews__swiper .swiper-button-next',
        prevEl: '.reviews__swiper .swiper-button-prev',
    },
    pagination: {
        el: '.reviews__swiper .swiper-pagination',
        type: 'bullets',
    },
})