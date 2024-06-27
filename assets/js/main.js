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
  $(".hero-product-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  $(".quote-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpped: 5000,
    prevArrow:
      "<img class='slick-slider-btn slick-prev' src='../../assets/icons/circle_chevron_left_light.svg'>",
    nextArrow:
      "<img class='slick-slider-btn slick-next' src='../../assets/icons/circle_chevron_right_light.svg'>",
  });

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
