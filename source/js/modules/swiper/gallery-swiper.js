import Swiper from '../../vendor/swiper';

const gallerySwiper = new Swiper('[data-swiper="gallery"]', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '[data-swiper="gallery-next"]',
    prevEl: '[data-swiper="gallery-prev"]',
  },
  init: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
      initialSlide: 0,
      spaceBetween: 3,
    },
    768: {
      slidesPerView: 1.48,
      spaceBetween: 5,
      initialSlide: 0,
    },
    1200: {
      slidesPerView: 2.48,
      spaceBetween: 5,
      initialSlide: 0,
    },
  },
});


export {gallerySwiper};
