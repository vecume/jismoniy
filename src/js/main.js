//=require jquery/dist/jquery.js
//=require swiper/swiper-bundle.js

$(document).ready(function () {
  const mainSlider = new Swiper(".main-slider", {
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
      575: {
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

  $(".tab-control li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    var thisDataId = $(this).attr("data-id");
    $(".news-wrap").fadeOut(1);
    $("#" + thisDataId).fadeIn();
  });

  $(".news-control .box_news").hover(function () {
    var newsIndex = parseInt($(this).attr("data-slider"));
    console.log(newsIndex);
    mainSlider.slideTo(newsIndex - 1, 300);
  });

  $(".menu-icon").on("click", function (event) {
    event.preventDefault();
    console.log("hi");
    $("#maps-popup").fadeIn(400);
    $("html, body").css("overflow", "hidden");
  });

  $(".maps__close a").on("click", function (event) {
    event.preventDefault();
    $("#maps-popup").fadeOut(400);
    $("html, body").css("overflow", "unset");
  });
  $(".menu-toggle").on("click", function () {
    $(".overlayMenu").addClass("open");
    $(".menu-shadow").addClass("active");
  });
  $(".close-menu").on("click", function () {
    $(".overlayMenu").removeClass("open");
    $(".menu-shadow").removeClass("active");
  });
});
