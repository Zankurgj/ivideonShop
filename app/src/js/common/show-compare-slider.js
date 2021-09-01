class ShowCompareSlider {
  constructor() {
    this.popupSlider = $(".js--compare-top-slider-container");
    this.mainSlider = $(".js--compare-slider-container");
    this.topOffset = "";
    this.mainSliderHeight = "";
    this.popupSliderHeight = "";
    this.checkScrollHandler = this.checkScroll.bind(this);
    this.collectSizesHandler = this.collectSizes.bind(this);
    this.init();
  }
  init() {
    if (!this.popupSlider.length) {
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
    this.topOffset = this.mainSlider.offset().top;
    this.mainSliderHeight = this.mainSlider.height();
    this.popupSliderHeight = this.popupSlider.height();
  }

  checkScroll() {
    const scroll = $(window).scrollTop();
    const sum =
      this.topOffset + this.mainSliderHeight / 2 - this.popupSliderHeight;
    if (scroll > sum) {
      this.popupSlider.addClass("show");
    } else {
      this.popupSlider.removeClass("show");
    }
  }
}

// const top = $(".js--compare-slider-container").offset().top;
//   const height = $(".js--compare-slider-container").height();
//   const heightTop = $(".js--compare-top-slider-container").height();
//   const summ = height / 2 + top - heightTop;
//   $(window).scroll(() => {
//     console.log("init");
//     const scroll = $(window).scrollTop();
//     if (scroll > summ) {
//       $(".js--compare-top-slider-container").addClass("show");
//     } else {
//       $(".js--compare-top-slider-container").removeClass("show");
//     }
//   });
export default ShowCompareSlider;
