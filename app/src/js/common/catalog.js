export const initCatalog = () => {
  //   initRangeSlider();
  initCatalogSpolier();
  initCatalogPopup();
};

const initRangeSlider = () => {
  var slider = document.querySelector(".js--catalog-range");
  var startRangeInput = document.querySelector(".js--catalog-range-start");
  var stopRangeInput = document.querySelector(".js--catalog-range-stop");
  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });

  slider.noUiSlider.on("update", function (values, handle) {
    var value = Math.round(values[handle]);

    if (handle) {
      stopRangeInput.value = value;
    } else {
      startRangeInput.value = value;
    }
  });
  startRangeInput.addEventListener("change", function () {
    slider.noUiSlider.set([this.value, null]);
  });

  stopRangeInput.addEventListener("change", function () {
    slider.noUiSlider.set([null, this.value]);
  });
};

const initCatalogSpolier = () => {
  $(".js--catalog-spoiler-btn").on("click", function (evt) {
    $(evt.currentTarget).toggleClass("active");
    $(".js--catalog-spoiler").slideToggle(300);
  });
};
const initCatalogPopup = () => {
  $(".js--toggle-filter").on("click", function () {
    $(".js--catalog-filter-inner").toggleClass("show");
    $(".js--toggle-overlay").toggleClass("show");
  });
};
