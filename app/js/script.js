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
});
