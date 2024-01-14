import Swiper from '../../vendor/swiper';

const trainerSwiper = new Swiper('[data-swiper="training"]', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '[data-swiper="training-next"]',
    prevEl: '[data-swiper="training-prev"]',
  },
  init: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
      initialSlide: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 1,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      initialSlide: 1,
    },
  },
});

export {trainerSwiper};
