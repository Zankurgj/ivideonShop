import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "select2";
require("~/node_modules/jquery-ui-dist/jquery-ui.min.js");
import intlTelInput from "intl-tel-input";
require("~/node_modules/intl-tel-input/build/js/utils.js");
import noUiSlider from "nouislider";
import MainHeader from "./common/main-header";
import CounterNumber from "./common/counter";
import ShowTopPopup from "./common/show-top-popup";
import { initSliders } from "./common/sliders";
import { initCatalog } from "./common/catalog";
require("@fancyapps/fancybox");

window.noUiSlider = noUiSlider;

document.addEventListener("DOMContentLoaded", function () {
  new MainHeader();
  new CounterNumber();
  initToggleTabListeners();
  initSelect2();
  initAnchorLink();
  initSliders();
  initCatalog();
  initTelInput();
  scrollTopBtnInit();
  // checkProductPopupScrollListener();
  deliverySpoilerListenerInit();
  togglePwdInputListenerInit();
  closeCookiePopupListinerInit();
  toggleBtnProductListener();
  new ShowTopPopup(
    ".js--compare-top-slider-container",
    ".js--compare-slider-container"
  );
  new ShowTopPopup(".js--product-buy-popup", ".js--product-container");
});

const initAnchorLink = () => {
  $(document).on("click", ".js--anchor-link", function (e) {
    event.preventDefault();
    const viewportHeight = $(window).height();
    const elOffset = $($.attr(this, "href")).offset().top;
    const elHeight = $($.attr(this, "href")).outerHeight();
    let pageOffset;
    pageOffset = elOffset - (viewportHeight / 2 - elHeight / 2);
    $("html, body").animate(
      {
        scrollTop: pageOffset,
      },
      300
    );
  });
};

const initSelect2 = () => {
  $(".js--simple-select").select2({
    minimumResultsForSearch: -1,
    theme: "simple-select",
  });
  $(".js--border-select").select2({
    minimumResultsForSearch: -1,
    theme: "border-select",
  });
};
const initToggleTabListeners = () => {
  $(".js--toggle-input").on("change", toggleTabHandler);
};

const toggleTabHandler = (evt) => {
  const tabId = $(evt.currentTarget).data("tabId");
  const tabName = $(evt.currentTarget).attr("name");
  $(`[data-tab-name=${tabName}]`).removeClass("show");
  $(`[data-tab=${tabId}]`).addClass("show");
};

const initTelInput = () => {
  const input = document.querySelector("#phone");
  if (input) {
    intlTelInput(input, {
      initialCountry: "ru",
      preferredCountries: ["ru", "kz", "ua", "by"],
      separateDialCode: true,
    });
  }
};
const scrollTopBtnInit = () => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".js--fixed-btn").fadeIn();
    } else {
      $(".js--fixed-btn").fadeOut();
    }
  });
  $(".js--scroll-top-btn").click(() => {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
};
const checkProductPopupScrollListener = () => {
  checkProductPopupScroll();
  $(window).scroll(checkProductPopupScroll);
};

const checkProductPopupScroll = () => {
  const scroll = $(window).scrollTop();
  if (scroll > 1) {
    $(".js--product-buy-popup").addClass("show");
  } else {
    $(".js--product-buy-popup").removeClass("show");
  }
};

const deliverySpoilerListenerInit = () => {
  $(".js-delivery-spoiler-btn").on("click", (evt) => {
    const btn = $(evt.currentTarget);
    const parent = btn.parents(".js-delivery-spoiler-parent");
    const spoiler = parent.children(".js-delivery-spoiler-inner");
    parent.toggleClass("opened");
    btn.toggleClass("opened");
    spoiler.slideToggle(300);
  });
};

const togglePwdInputListenerInit = () => {
  $(".js--pwd-btn").on("click", (evt) => {
    const btn = $(evt.currentTarget);
    const input = btn.siblings(".js--pwd-input");
    btn.toggleClass("visible");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
};

const closeCookiePopupListinerInit = () => {
  $(".js--cookie-btn-close").on("click", (evt) => {
    $(".js--cookie-popup").addClass("hide");
  });
};

const toggleBtnProductListener = () => {
  $(".js--btn-like").on("click", (evt) => {
    const btn = $(evt.currentTarget);
    btn.toggleClass("active");
  });
  $(".js--btn-compare").on("click", (evt) => {
    const btn = $(evt.currentTarget);
    btn.toggleClass("active");
  });
};
