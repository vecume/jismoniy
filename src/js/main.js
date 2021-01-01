//=require jquery/dist/jquery.js
//=require swiper/swiper-bundle.js
//=require magnific-popup/dist/jquery.magnific-popup.js

$.extend(true, $.magnificPopup.defaults, {
  tClose: "Yopish (Esc)", // Alt text on close button
  tLoading: "Yuklanmoqda...", // Text that is displayed during loading. Can contain %curr% and %total% keys
  gallery: {
    tPrev: "Oldingi (Chapga tugmasi)", // Alt text on left arrow
    tNext: "Keyingi (O'ngga tugmasi)", // Alt text on right arrow
    tCounter: "%total% dan %curr%-si", // Markup for "1 of 7" counter
  },
  image: {
    tError: '<a href="%url%">Rasm</a> yuklanmadi.', // Error message when image could not be loaded
  },
  ajax: {
    tError: '<a href="%url%">Rasm</a> yuklanmadi', // Error message when ajax request failed
  },
});

$(document).ready(function () {
  //=require sliders.js

  $(".news-control .box_news").hover(function () {
    var newsIndex = parseInt($(this).attr("data-slider"));
    console.log(newsIndex);
    mainSlider.slideTo(newsIndex - 1, 300);
  });

  $("#sView").on("click", function (e) {
    e.preventDefault();
    $("#eyeModal").toggle();
  });

  $(".js-slider input").on("change", function () {
    const value = parseInt($(this).val(), 10);
    console.log(value);
    $(".sliderText .range").text(value);
    $("body").attr("style", `zoom: ${100 + value}%;`);
  });

  $(".searchbar-toggler").on("click", function () {
    if ($(".search-input").hasClass("active")) {
      $(".search-input").removeClass("active");
      $(this).children("i").removeClass("fa-close");
    } else {
      $(".search-input").addClass("active");
      $(this).children("i").addClass("fa-close");
    }
  });
  $(".squareAppearances").on("click", function () {
    const dataClass = $(this).data("class");
    if (dataClass == "normal") {
      $("html").attr("class", "");
      return;
    }
    $("html").attr("class", dataClass);
  });

  if ($(window).width() < 1200) {
    $(".dropdown>a").on("click", function (e) {
      $(this).parent().toggleClass("active");
      e.preventDefault();
      $(this).parent().find(".submenu").slideToggle(500);
    });
  }

  $(".accor-head").on("click", function () {
    $(this).toggleClass("active");
    $(this).parent().find(".accor-body").slideToggle(600);
  });

  $(".menu-toggle").on("click", function () {
    $(".overlayMenu").addClass("open");
    $(".menu-shadow").addClass("active");
  });
  $(".close-menu").on("click", function () {
    $(".overlayMenu").removeClass("open");
    $(".menu-shadow").removeClass("active");
  });

  //popups
  $(".gallery-items-wrapper .wrap-container").magnificPopup({
    delegate: ".image-popup",
    type: "image",
    gallery: { enabled: true },
  });
});
