const headerNavOpenBtn = document.querySelector(".header-nav-open-btn");
headerNavOpenBtn.addEventListener("click", () => {
  document.querySelector(".header-nav-group").classList.toggle("show");
});

const formOtpElems = document.querySelectorAll(".form-otp-elems .otp-elem");

document.addEventListener("DOMContentLoaded", () => {
  formOtpElems.forEach((optElem) => {
    let optInputValue = optElem.querySelector("input").value;
    if (optInputValue.trim() !== "") {
      optElem.classList.add("has-otp-val");
    }
  });
});

$(document).ready(function () {
  // HERO PRODUCT SLIDER
  $(".hero-product-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  // QUOTE SLIDER
  $(".quote-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      "<img class='slick-slider-btn slick-prev' src='../../assets/icons/circle_chevron_left_light.svg'>",
    nextArrow:
      "<img class='slick-slider-btn slick-next' src='../../assets/icons/circle_chevron_right_light.svg'>",
  });

  // TRUST REVIEWS SLIDER
  $(".trust-reviews-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // BLOG SLIDER
  $(".blog-list-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<img class='slick-slider-btn slick-prev' src='../../assets/icons/arrow_left_black.svg'>",
    nextArrow:
      "<img class='slick-slider-btn slick-next' src='../../assets/icons/arrow_right_black.svg'>",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // init Isotope
  var $grid = $(".hero-explore-tab-items").isotope({
    filter: ".hero-explore-1",
  });

  // filter items on button click
  $(".filter-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });

    $(".filter-button-group button").removeClass("active");
    $(this).addClass("active");
  });

  $(".product-detail-preview").on("click", ".preview-thumb-item", function () {
    let currentImgItem = $(this);
    $(".preview-thumb-item").removeClass("preview-selected");
    currentImgItem.addClass("preview-selected");
    let currentImgUrl = $(currentImgItem).find("img").attr("src");
    $(".product-preview-full").find("img").attr("src", currentImgUrl);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-mega-menu-target]");
  const megaMenus = document.querySelectorAll(".header-mega-menu-item");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const target = button.getAttribute("data-mega-menu-target");
      const targetMenu = document.querySelector(`.${target}`);

      megaMenus.forEach((menu) => {
        if (menu !== targetMenu) {
          menu.classList.remove("show");
        }
      });
      targetMenu.classList.toggle("show");
    });
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".header-nav-left") &&
      !event.target.closest(".header-mega-menu-item")
    ) {
      megaMenus.forEach((menu) => {
        menu.classList.remove("show");
      });
    }
  });

  document.querySelectorAll(".design-upload-content").forEach((uploadBox) => {
    uploadBox.addEventListener("click", function (event) {
      const fileInput = uploadBox.querySelector(".design-upload-input");
      if (fileInput) {
        fileInput.click();
      }
    });
  });
});

$(".hamburger").on("click", function () {
  $(this).toggleClass("is-open");
});

$(document).on("click", function (event) {
  var navGroup = $(".header-nav-group");
  var hamburger = $(".header-nav-open-btn");

  if (
    !navGroup.is(event.target) &&
    navGroup.has(event.target).length === 0 &&
    !hamburger.is(event.target) &&
    hamburger.has(event.target).length === 0
  ) {
    navGroup.removeClass("show");
    $(".header-nav-open-btn .hamburger").removeClass("is-open");
  }
});

// $(".header-nav-open-btn").on("click", function () {
//   var navGroup = $(".header-nav-group");
//   navGroup.toggleClass("show");
// });
