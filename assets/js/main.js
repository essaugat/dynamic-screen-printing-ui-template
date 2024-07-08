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
      "<img class='slick-slider-btn slick-prev' src='./assets/icons/circle_chevron_left_light.svg'>",
    nextArrow:
      "<img class='slick-slider-btn slick-next' src='./assets/icons/circle_chevron_right_light.svg'>",
  });

  // PORTRAIT GALLERY SLIDER
  $(".portrait-gallery-slider").slick({
    dots: false,
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
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
      "<img class='slick-slider-btn slick-prev' src='./assets/icons/arrow_left_black.svg'>",
    nextArrow:
      "<img class='slick-slider-btn slick-next' src='./assets/icons/arrow_right_black.svg'>",
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
  const headerNavGroup = document.querySelector(".header-nav-group");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const target = button.getAttribute("data-mega-menu-target");
      const targetMenu = document.querySelector(`.${target}`);

      megaMenus.forEach((menu) => {
        if (menu !== targetMenu) {
          menu.classList.remove("show");
        }
      });

      buttons.forEach((btn) => {
        if (btn !== button) {
          btn
            .querySelector(".nav-link-dropdown-icon")
            .classList.remove("rotate-180");
          btn.classList.remove("active");
        }
      });

      targetMenu.classList.toggle("show");
      button.classList.toggle("active");
      button
        .querySelector(".nav-link-dropdown-icon")
        .classList.toggle("rotate-180");
    });
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".header-nav-left") &&
      !event.target.closest(".header-mega-menu-item")
    ) {
      megaMenus.forEach((menu) => {
        menu.classList.remove("show");
        $(".nav-link-dropdown-icon").removeClass("rotate-180");
      });
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth < 1200) {
      // Add 'show' class to header-nav-group if any mega menu is active
      if ([...megaMenus].some((menu) => menu.classList.contains("show"))) {
        headerNavGroup.classList.add("show");
      } else {
        headerNavGroup.classList.remove("show");
      }
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

  // PASSWORD ICONS TOGGLE
  const passwordFormElem = $(".password-form-elem .form-elem-icon");
  $(passwordFormElem).on("click", function (event) {
    const button = $(this);
    const input = button.siblings("input");

    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $(button).addClass("show-password");
    } else {
      input.attr("type", "password");
      $(button).removeClass("show-password");
    }
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
