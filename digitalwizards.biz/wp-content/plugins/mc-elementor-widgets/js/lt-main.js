var swiperPosts = new Swiper(".swiper.mc-posts-widget", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop:true   ,
    pagination: {
        el: '.swiper.mc-posts-widget .swiper-pagination',
        clickable: true
    },

    breakpoints: {
        140: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },

});

var swiperTestimonial01 = new Swiper(".show-01 .swiper.ms-testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true   ,
    pagination: {
        el: '.swiper.ms-testimonial-swiper .swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

var swiperTestimonial02 = new Swiper(".show-02 .swiper.ms-testimonial-swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop:true   ,
    pagination: {
        el: '.swiper.ms-testimonial-swiper .swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },

        400: {
            slidesPerView: 1,
        },

        500: {
            slidesPerView: 1,
        },

        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },


    },

});

var swiperTestimonial03 = new Swiper(".show-03 .swiper.ms-testimonial-swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop:true   ,
    pagination: {
        el: '.swiper.ms-testimonial-swiper .swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

