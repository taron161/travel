import Swiper from '../../vendor/swiper';

const reviewsSwiper = new Swiper('[data-swiper="reviews"]', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '[data-swiper="reviews-next"]',
    prevEl: '[data-swiper="reviews-prev"]',
  },
  init: false,
  breakpoints: {
    0: {
      initialSlide: 1,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 30,
      initialSlide: 1,
      slidesPerView: 1.19,
    },
    1200: {
      slidesPerView: 1.597,
      spaceBetween: 120,
      initialSlide: 1,
    },
  },
});

export {reviewsSwiper};
