import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "select2";
require("~/node_modules/jquery-ui-dist/jquery-ui.min.js");
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
