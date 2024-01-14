import Swiper from '../../vendor/swiper';

const toursSwiper = new Swiper('[data-swiper="tours"]', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '[data-swiper="tours-next"]',
    prevEl: '[data-swiper="tours-prev"]',
  },
  init: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
      initialSlide: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      initialSlide: 3,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 3,
    },
  },
});


export {toursSwiper};
