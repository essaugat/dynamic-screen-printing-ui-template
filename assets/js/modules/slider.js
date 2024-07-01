export function initializeSlider() {
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
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpped: 5000,
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
}
