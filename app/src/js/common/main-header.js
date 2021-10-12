class MainHeader {
  constructor() {
    this.allBtnItem = $(".js--bottom-menu-btn");
    this.allMenuItem = $(".js--bottom-menu");
    this.menuWrapper = $(".js--bottom-menu-wrapper");
    this.menuOverlay = $(".js-header-menu-overlay");
    this.leftMenuWrapper = $(".js--left-menu");
    this.topMenuOverlay = $(".js--top-menu-overlay");
    this.subNav = $(".js--header-subnav");
    this.detailBtn = $(".js--detail-btn");
    this.detailMenuWrapper = $(".js--detail-menu-wrapper");
    this.btnDetailBack = $(".js--menu-btn-back");
    this.bottomMenuBtnHandler = this.bottomMenuBtn.bind(this);
    this.closeBottomMenuHandler = this.closeBottomMenu.bind(this);
    this.toggleLeftMenuHandler = this.toggleLeftMenu.bind(this);
    this.addClassActiveDropdownHandler = this.addClassActiveDropdown.bind(this);
    this.toggleSearchHandler = this.toggleSearch.bind(this);
    this.checkWindowScrollHandler = this.checkWindowScroll.bind(this);
    this.showDetailHandler = this.showDetail.bind(this);
    this.removeClassActiveDropdownHandler =
      this.removeClassActiveDropdown.bind(this);
    this.backToMainMenuHandler = this.backToMainMenu.bind(this);
    this.initMenu();
  }
  initMenu() {
    this.initBottomMenuSpoilerListeners();
    this.initBottomMenuListeners();
    this.initLeftMenuListeners();
    this.initDropdownMenuListeners();
    this.initToggleSearchListeners();
    this.initCheckWindowScrollListeners();
    this.initShowDetailListeners();
    this.initBtnDetailBackListeners();
  }
  // BTN DETAIL BACK
  initBtnDetailBackListeners() {
    this.btnDetailBack.on("click", this.backToMainMenuHandler);
  }
  backToMainMenu() {
    $(`.js--details-container`).hide();
    this.detailMenuWrapper.show();
  }
  // SHOW DEATAIL
  initShowDetailListeners() {
    this.detailBtn.on("click", this.showDetailHandler);
  }
  showDetail(evt) {
    const detailId = $(evt.currentTarget).data("datailsId");
    const activeDetail = $(
      `.js--details-container[data-datails-id=${detailId}]`
    );
    this.detailMenuWrapper.hide();
    activeDetail.show();
  }
  // CHECK SCROLL
  initCheckWindowScrollListeners() {
    $(window).scroll(this.checkWindowScrollHandler);
  }
  checkWindowScroll() {
    const scroll = $(window).scrollTop();
    if (scroll > 1) {
      this.subNav.addClass("hide-by-scroll");
    } else {
      this.subNav.removeClass("hide-by-scroll");
    }
  }
  // SEARCH
  initToggleSearchListeners() {
    $(".js--toggle-search").on("click", this.toggleSearchHandler);
  }

  toggleSearch() {
    this.subNav.toggleClass("hide");
    $(".js--header-search").toggleClass("show");
    if ($(".js--header-search").hasClass("show")) {
      setTimeout(function () {
        $(".js--header-search-input").focus();
      }, 300);
    }
  }
  //   DROPDOWN MENU
  initDropdownMenuListeners() {
    $(".js--main-header-dropdown").on(
      "mouseenter",
      this.addClassActiveDropdownHandler
    );
    $(".js--main-header-dropdown").on(
      "mouseleave",
      this.removeClassActiveDropdownHandler
    );
  }
  addClassActiveDropdown(evt) {
    $(evt.currentTarget).addClass("opened");
    this.topMenuOverlay.addClass("show");
  }
  removeClassActiveDropdown(evt) {
    this.backToMainMenu();
    $(evt.currentTarget).removeClass("opened");
    this.topMenuOverlay.removeClass("show");
  }
  //   LEFT MENU
  initLeftMenuListeners() {
    $(".js--toggle-left-menu").on("click", this.toggleLeftMenuHandler);
  }
  toggleLeftMenu() {
    this.leftMenuWrapper.toggleClass("show");
  }
  //   SPOILER
  initBottomMenuSpoilerListeners() {
    $(".js--bottom-menu-spoiler").on("click", this.bottomMenuSpoilerHandler);
  }
  bottomMenuSpoilerHandler() {
    const spoilerInner = $(this).siblings(".js--bottom-menu-spoiler-inner");
    $(this).toggleClass("active");
    spoilerInner.slideToggle(200);
  }
  //   MENU
  initBottomMenuListeners() {
    $(".js--bottom-menu-btn").on("click", this.bottomMenuBtnHandler);
    $(".js--close-bottom-menu").on("click", this.closeBottomMenuHandler);
  }
  bottomMenuBtn(evt) {
    const btn = $(evt.currentTarget);
    const menuId = btn.data("menuId");
    const menuItem = $(`.js--bottom-menu[data-menu-id=${menuId}]`);

    if ($(menuItem).hasClass("show")) {
      $(menuItem).removeClass("show");
      btn.removeClass("active");
    } else {
      this.allMenuItem.removeClass("show");
      $(menuItem).addClass("show");
      this.allBtnItem.removeClass("active");
      btn.addClass("active");
    }
    this.checkMenuActive();
  }

  checkMenuActive() {
    if (this.allMenuItem.hasClass("show")) {
      this.menuWrapper.addClass("show");
      this.menuOverlay.addClass("show");
      this.stopScrollBody();
    } else {
      this.menuWrapper.removeClass("show");
      this.menuOverlay.removeClass("show");
      this.returnScrollBody();
    }
  }
  //   MENU CLOSE
  closeBottomMenu() {
    this.menuWrapper.removeClass("show");
    this.allMenuItem.removeClass("show");
    this.menuOverlay.removeClass("show");
    this.allBtnItem.removeClass("active");
    this.returnScrollBody();
  }
  stopScrollBody() {
    $("body").addClass("no-scroll");
  }
  returnScrollBody() {
    $("body").removeClass("no-scroll");
  }
}
export default MainHeader;
