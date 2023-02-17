// navbar Sliding
const $logoBars = document.querySelector(".logoBars");
const $navbar = document.querySelector(".navbar");
const $mainBody = document.querySelector(".mainBody");

$logoBars.addEventListener("click", function () {
  $navbar.classList.toggle("active");
});

// ------------------------------------------------------------

// span -> input

const spanBox = document.querySelector(".txt");
const inputBox = document.createElement("input");
inputBox.classList.add("inputSearch");

spanBox.addEventListener("click", function () {
  spanBox.replaceWith(inputBox);
});

inputBox.addEventListener("blur", function () {
  inputBox.replaceWith(spanBox);
});

// ------------------------------------------------------------
