export function initializeNav() {
  const headerNavOpenBtn = document.querySelector(".header-nav-open-btn");
  headerNavOpenBtn.addEventListener("click", () => {
    document.querySelector(".header-nav-group").classList.toggle("show");
  });

  $(".hamburger").on("click", function () {
    $(this).toggleClass("is-open");
  });
}
