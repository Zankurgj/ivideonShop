export const initCatalog = () => {
  initRangeSlider();
  initCatalogSpolier();
  initCatalogPopup();
};

const initRangeSlider = () => {
  console.log("init catalog");
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
