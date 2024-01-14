import Swiper from '../../vendor/swiper';

const heroSwiper = new Swiper('[data-swiper="hero"]', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  init: false,
});


export {heroSwiper};
