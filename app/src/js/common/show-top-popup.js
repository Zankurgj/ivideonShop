// Добавляет селектору "popupSelector" класс show, добавляет класс hide для ".js--main-header" при доскролле до половины высоты "containerSelector".
class ShowTopPopup {
  constructor(popupSelector, containerSelector) {
    this.popup = $(popupSelector);
    this.container = $(containerSelector);
    this.mainHeader = $(".js--main-header");
    this.topOffset = "";
    this.containerHeight = "";
    this.popupHeight = "";
    this.checkScrollHandler = this.checkScroll.bind(this);
    this.collectSizesHandler = this.collectSizes.bind(this);
    this.init();
  }
  init() {
    if (!this.popup.length) {
      return;
    }
    this.collectSizes();
    this.checkScroll();
    this.initScrollListener();
    this.initResizeListener();
  }

  initScrollListener() {
    $(window).scroll(this.checkScrollHandler);
  }

  initResizeListener() {
    $(window).on("resize", this.collectSizesHandler);
  }

  collectSizes() {
    this.topOffset = this.container.offset().top;
    this.containerHeight = this.container.height();
    this.popupHeight = this.popup.height();
  }

  checkScroll() {
    const scroll = $(window).scrollTop();
    const sum = this.topOffset + this.containerHeight / 2 - this.popupHeight;
    if (scroll > sum) {
      this.mainHeader.addClass("hide");
      this.popup.addClass("show");
    } else {
      this.mainHeader.removeClass("hide");
      this.popup.removeClass("show");
    }
  }
}

export default ShowTopPopup;
