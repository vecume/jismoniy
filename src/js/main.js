//=require jquery/dist/jquery.js
//=require swiper/swiper-bundle.js

$(document).ready(function () {
  //=require sliders.js

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
