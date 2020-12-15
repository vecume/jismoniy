const mainSlider = new Swiper(".main-slider .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 1000,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: false,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});

const usefulLinksSlider = new Swiper(".useful-slider .swiper-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 800,
  loop: true,
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const photoNewsSlider = new Swiper(".more-news-slider .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 800,
  loop: true,
  centeredSlides: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const videoNewsSlider = new Swiper(".video-news-slider .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 800,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
