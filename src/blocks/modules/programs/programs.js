const programsSwiper = new Swiper('.programs__swiper', {
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
        1140: {
            
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 2,
        }
    },
    navigation: {
        nextEl: '.programs__swiper .swiper-button-next',
        prevEl: '.programs__swiper .swiper-button-prev',
    },
    pagination: {
        el: '.programs__swiper .swiper-pagination',
        type: 'bullets',
    },
})