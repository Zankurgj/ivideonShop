import "slick-carousel";

export const initSliders = () => {
  initsSectionSlider();
  initProductSlider();
  initRangeSlider();
  initProductCardSlider();
  initPromoSlider();
  initTariffSlider();
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

const initRangeSlider = () => {
  $(".js--catalog-range").slider({
    range: true,
    min: 0,
    max: 50000,
    values: [2290, 42800],
    slide: function (event, ui) {
      $(".js--catalog-range-start").val(ui.values[0]);
      $(".js--catalog-range-stop").val(ui.values[1]);
    },
  });
  $(".js--catalog-range-start").val(
    $(".js--catalog-range").slider("values", 0)
  );
  $(".js--catalog-range-stop").val($(".js--catalog-range").slider("values", 1));
};

const initProductCardSlider = () => {
  $(".js--product-card-slider-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".js--product-card-slider-nav",
  });

  $(".js--product-card-slider-nav").slick({
    slidesToScroll: 1,
    asNavFor: ".js--product-card-slider-main",
    dots: false,
    arrows: false,
    mobileFirst: true,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          arrows: true,
        },
      },
    ],
  });
};

const initPromoSlider = () => {
  $(".js--mp-promo-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    mobileFirst: true,
    autoplay: false,
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
};
const initTariffSlider = () => {
  $(window).on("load resize orientationchange", function () {
    $(".js--tariff-slider").each(function () {
      var $carousel = $(this);
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).width() <= 768 || $(window).width() >= 1200) {
        if ($carousel.hasClass("slick-initialized")) {
          $carousel.slick("unslick");
        }
      } else {
        if (!$carousel.hasClass("slick-initialized")) {
          $carousel.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "20%",
            infinite: false,
            arrows: false,
            dots: false,
            variableWidth: true,
            mobileFirst: true,
          });
        }
      }
    });
  });
};
