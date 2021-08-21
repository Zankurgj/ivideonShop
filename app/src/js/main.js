import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "select2";
require("~/node_modules/jquery-ui-dist/jquery-ui.min.js");
import intlTelInput from "intl-tel-input";
require("~/node_modules/intl-tel-input/build/js/utils.js");
import MainHeader from "./common/main-header";
import CounterNumber from "./common/counter";
import { initSliders } from "./common/sliders";

document.addEventListener("DOMContentLoaded", function () {
  new MainHeader();
  new CounterNumber();
  initToggleTabListeners();
  initSelect2();
  initAnchorLink();
  initSliders();
  initTelInput();
  scrollTopBtnInit();
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
