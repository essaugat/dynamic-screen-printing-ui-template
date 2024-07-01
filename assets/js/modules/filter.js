export function initalizeFilter() {
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
}
