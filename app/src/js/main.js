import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "slick-carousel";
import MainHeader from "./common/main-header";

document.addEventListener("DOMContentLoaded", function () {
  new MainHeader();
  $(".js--mp-promo-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
    ],
  });

  initsSectionSlider();
  initToggleTabListeners();
  initProductSlider();
});

const initToggleTabListeners = () => {
  $(".js--toogle-input").on("change", toggleTabHandler);
};

const toggleTabHandler = (evt) => {
  const tabId = $(evt.currentTarget).data("tabId");
  const tabName = $(evt.currentTarget).attr("name");
  $(`[data-tab-name=${tabName}]`).removeClass("show");
  $(`[data-tab=${tabId}]`).addClass("show");
};
const initProductSlider = () => {
  $(".js--product-slider").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    centerMode: false,
    infinite: true,
    arrows: true,
    dots: true,
    mobileFirst: true,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
        },
      },
    ],
  });
};
const initsSectionSlider = () => {
  $(window).on("load resize orientationchange", function () {
    $(".js--mp-section-slider").each(function () {
      var $carousel = $(this);
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).width() >= 1024) {
        if ($carousel.hasClass("slick-initialized")) {
          $carousel.slick("unslick");
        }
      } else {
        if (!$carousel.hasClass("slick-initialized")) {
          $carousel.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            dots: false,
            autoplay: false,
            variableWidth: true,
            mobileFirst: true,
          });
        }
      }
    });
  });
};
