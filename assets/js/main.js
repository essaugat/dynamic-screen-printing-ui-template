const headerNavOpenBtn = document.querySelector(".header-nav-open-btn");
if(headerNavOpenBtn){
  headerNavOpenBtn.addEventListener("click", () => {
    document.querySelector(".header-nav-group").classList.toggle("show");
  });
}

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

$(document).ready(function () {
  const colorVariants = $(".color-variant-item");
  $(colorVariants[0]).find(".color-variant-item-check").attr("checked", true);

  $("input[type='radio'][name='color_variant']").change(function () {
    const currentItem = $(this);
    const dataColorId = currentItem.next().attr("data-color-id");
    const productPreviewFull = $(".product-preview-full");
    productPreviewFull
      .find(".product-preview-img")
      .attr("src", `assets/images/variant${dataColorId}.jpeg`);

    $(".preview-thumb-item").each(function () {
      const colorThumbItem = $(this);
      $(colorThumbItem).find("img")
      .attr("src", `assets/images/variant${dataColorId}.jpeg`);
      // const colorThumbId = colorThumbItem.find("img").attr("data-color-id");

      // if (colorThumbId === dataColorId) {
      //   $(".preview-thumb-item").removeClass("preview-selected");
      //   colorThumbItem.addClass("preview-selected");
      // }
    });
  });

  // const previewThumbs = $(".preview-thumb-item");

  // $(".preview-thumb-item").each(function (idx, previewThumbItem) {
  //   $(previewThumbItem).click(function () {
  //     const currentThumbItem = $(this);
  //     const dataThumbColorId = $(currentThumbItem)
  //       .find("img")
  //       .attr("data-color-id");

  //     $(".color-variant-item").each(function () {
  //       const colorVariantItem = $(this);
  //       const colorVariantId = colorVariantItem
  //         .find(".color-variant-item-box")
  //         .attr("data-color-id");

  //       if (colorVariantId === dataThumbColorId) {
  //         colorVariantItem
  //           .find(".color-variant-item-check")
  //           .prop("checked", true);
  //       }
  //     });
  //   });
  // });

  // function resetColorVariants() {
  //   $(".color-variant-item-box").each(function (idx, colorVariantItemBox) {
  //     $(colorVariantItemBox).prev().attr("checked", false);
  //   });
  // }

  const productQtyValInput = $("#product-quantity-val");
  let productQtyVal = 1;
  $(productQtyValInput).val(productQtyVal);
  setProductPrice();

  $(productQtyValInput).on("change keyup", function () {
    productQtyVal = $(productQtyValInput).val();
    setProductPrice(productQtyVal);
  });

  function setProductPrice(qtyVal = 1) {
    if (qtyVal <= 499) {
      $("#product-price-value").text(`$${13.5 * qtyVal}`);
    } else if (qtyVal <= 999) {
      $("#product-price-value").text(`$${12.5 * qtyVal}`);
    } else {
      $("#product-price-value").text(`$${11 * qtyVal}`);
    }
  }

  $(productQtyValInput).on("blur", function () {
    $(productQtyValInput).val(productQtyVal);
    if (productQtyVal == "" || productQtyVal == 0) {
      $(productQtyValInput).val(1);
    }
  });
});
