$(document).ready(function () {
  const colorVariants = $(".color-variant-item");
  $(colorVariants[0]).find(".color-variant-item-check").attr("checked", true);

  $("input[type='radio'][name='color_variant']").change(function () {
    const currentItem = $(this);
    const dataColorId = currentItem.next().attr("id");
    const refinedDataColorId = dataColorId.replace("color_variant_", "");
    let currentPreviewImgSrc = "";

    $(".preview-thumb-item").each(function (colorThumbItem) {
      let itemImg = $(colorThumbItem).find("img");
      let itemImgSrc = itemImg.attr("src");
      let hasColorText =
        itemImgSrc.toLowerCase().indexOf(refinedDataColorId) > -1;

      if (hasColorText) {
        currentPreviewImgSrc = itemImgSrc;
        const productPreviewImg = $(".product-preview-img");
        $(productPreviewImg).attr("src", currentPreviewImgSrc);
      }
    });
  });
});
