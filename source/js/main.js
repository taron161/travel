import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {heroSwiper} from './modules/swiper/hero-swiper';
import {playVideo} from './modules/video/video-play';
import {openMneu} from './modules/open-menu/open-menu';
import {toursSwiper} from './modules/swiper/tours-swiper';
import {trainerSwiper} from './modules/swiper/trainer-swiper';
import {reviewsSwiper} from './modules/swiper/reviews-swiper';
import {advantagesSwiper, setSwiperClasses} from './modules/swiper/advantages-swiper';
import {gallerySwiper} from './modules/swiper/gallery-swiper';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  playVideo();

  openMneu();

  setSwiperClasses();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();

    heroSwiper.init();

    toursSwiper.init();

    trainerSwiper.init();

    reviewsSwiper.init();

    advantagesSwiper.init();

    gallerySwiper.init();
  });
});

// ---------------------------------
