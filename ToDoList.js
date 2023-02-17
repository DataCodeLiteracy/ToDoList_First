const $logoBars = document.querySelector(".logoBars");
const $navbar = document.querySelector(".navbar");
const $mainBody = document.querySelector(".mainBody");

$logoBars.addEventListener("click", function () {
  $navbar.classList.toggle("active");
});
// ------------------------------------------------------------
