import Swiper from '../../vendor/swiper';
const breakpoint = window.matchMedia('(min-width:1200px)');

const advantagesSwiper = new Swiper('[data-swiper="advantages"]', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '[data-swiper="advantages-next"]',
    prevEl: '[data-swiper="advantages-prev"]',
  },
  init: false,
  setWrapperSize: true,
  breakpoints: {
    0: {
      init: false,
    },
    768: {
      init: false,
    },
    1200: {
      slidesPerView: 3.582,
      spaceBetween: 22,
      initialSlide: 1,
    },
  },
});

const setSwiperClasses = () => {
  if (document.querySelector('[data-swiper="advantages"]')) {
    const container = document.querySelector('[data-swiper="advantages"]');
    const wrapper = container.querySelector('[data-swiper="advantages-wrapper"]');
    const slide = wrapper.querySelectorAll('[data-swiper="advantages-slide"]');

    if (breakpoint.matches) {
      container.classList.add('swiper');
      wrapper.classList.add('swiper-wrapper');
      slide.forEach((item) => item.classList.add('swiper-slide'));
    } else {
      if (container.classList.contains('swiper')) {
        container.classList.remove('swiper');
      }
      if (wrapper.classList.contains('swiper-wrapper')) {
        wrapper.classList.remove('swiper-wrapper');
      }
      slide.forEach((item) => {
        if (item.classList.contains('swiper-slide')) {
          item.classList.remove('swiper-slide');
        }
      });
    }
  }
};

export {advantagesSwiper, setSwiperClasses};
