// global variable

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

// Add List Button

const $cntItemsTodo = document.querySelector(".cntItemsTodo");
const $plusBtnTodo = document.querySelector(".plusBtnTodo");
const $cntItemsInpro = document.querySelector(".cntItemsInpro");
const $plusBtnInpro = document.querySelector(".plusBtnInpro");
const $cntItemsCompl = document.querySelector(".cntItemsCompl");
const $plusBtnCompl = document.querySelector(".plusBtnCompl");

function addList(ul) {
  // li 요소 생성
  const $li = document.createElement("li");
  // ul태그에 li요소 자식으로 추가
  ul.appendChild($li);
  // li요소에 클래스 생성
  $li.classList.add("cntItem");
  // div 요소 생성
  const $div = document.createElement("div");
  // li요소에 div 요소 자식으로 추가
  $li.appendChild($div);
  // input 요소 생성
  const $input = document.createElement("input");
  // div 요소에 input 요소 자식으로 추가
  $div.appendChild($input);
  // input type checkbox로 변경
  $input.type = "checkbox";
  // li 요소에 input 요소 추가후 id 생성
  const $input2 = document.createElement("input");
  $li.appendChild($input2);
  $input2.id = "txt";
  const $div2 = document.createElement("div");
  $li.appendChild($div2);
  $div2.className = "logos";
  const $div3 = document.createElement("div");
  $div2.appendChild($div3);
  const $button = document.createElement("button");
  $div3.appendChild($button);
  $button.className = "logoMinus";
  $button.innerHTML = '<i class="fa-solid fa-minus"></i>';
  const $div4 = document.createElement("div");
  $div2.appendChild($div4);
  const $button2 = document.createElement("button");
  $div4.appendChild($button2);
  $button2.className = "logoTrash";
  $button2.innerHTML = '<i class="fa-solid fa-trash"></i>';
}

$plusBtnTodo.addEventListener("click", function () {
  addList($cntItemsTodo);
});

$plusBtnInpro.addEventListener("click", function () {
  addList($cntItemsInpro);
});

$plusBtnCompl.addEventListener("click", function () {
  addList($cntItemsCompl);
});

// ------------------------------------------------------------

// Enter Contents to inputBox

function createCntEnterTodo() {
  $cntItemsTodo.addEventListener("focusin", function (e) {
    e.target.addEventListener("keypress", function (key) {
      key.stopPropagation();
      if (e.target.value == "") return;
      else {
        if (key.key == "Enter") {
          if (
            $cntItemsTodo.lastElementChild.getElementsByTagName("input")[1]
              .value == ""
          ) {
            return;
          } else {
            e.target.innerHTML = e.target.value;
            addList($cntItemsTodo);
            $cntItemsTodo.lastElementChild
              .getElementsByTagName("input")[1]
              .focus();
            countTodo();
            countAll();
          }
        }
      }
    });
  });
}

function createCntEnterInpro() {
  $cntItemsInpro.addEventListener("focusin", function (e) {
    e.target.addEventListener("keypress", function (key) {
      if (e.target.value == "") return;
      else {
        if (key.key == "Enter") {
          if (
            $cntItemsInpro.lastElementChild.getElementsByTagName("input")[1]
              .value == ""
          ) {
            return;
          } else {
            e.target.innerHTML = e.target.value;
            addList($cntItemsInpro);
            $cntItemsInpro.lastElementChild
              .getElementsByTagName("input")[1]
              .focus();
            countInpro();
            countAll();
          }
        }
      }
    });
  });
}

function createCntEnterCompl() {
  $cntItemsCompl.addEventListener("focusin", function (e) {
    e.target.addEventListener("keypress", function (key) {
      if (e.target.value == "") return;
      else {
        if (key.key == "Enter") {
          if (
            $cntItemsCompl.lastElementChild.getElementsByTagName("input")[1]
              .value == ""
          ) {
            return;
          } else {
            e.target.innerHTML = e.target.value;
            addList($cntItemsCompl);
            $cntItemsCompl.lastElementChild
              .getElementsByTagName("input")[1]
              .focus();
            countCompl();
            countAll();
          }
        }
      }
    });
  });
}

createCntEnterTodo();
createCntEnterInpro();
createCntEnterCompl();

// ------------------------------------------------------------

// remove ContentsBox

function removeContentsTodo() {
  $cntItemsTodo.addEventListener("focusin", function (e) {
    if (e.target.className == "logoTrash") {
      e.target.parentElement.parentElement.parentElement.remove();
      countTodo();
      countAll();
    }
  });
}

function removeContentsInpro() {
  $cntItemsInpro.addEventListener("focusin", function (e) {
    if (e.target.className == "logoTrash") {
      e.target.parentElement.parentElement.parentElement.remove();
      countInpro();
      countAll();
    }
  });
}

function removeContentsCompl() {
  $cntItemsCompl.addEventListener("focusin", function (e) {
    if (e.target.className == "logoTrash") {
      e.target.parentElement.parentElement.parentElement.remove();
      countCompl();
      countAll();
    }
  });
}

removeContentsTodo();
removeContentsInpro();
removeContentsCompl();

// ------------------------------------------------------------

// contents Count

$countListTodo = document.querySelector(".countListTodo");
$countListInpro = document.querySelector(".countListInpro");
$countListCompl = document.querySelector(".countListCompl");
$countListAll = document.querySelector(".countListAll");

function countAll() {
  let countAll = 0;
  countAll =
    Number($countListTodo.innerHTML) +
    Number($countListInpro.innerHTML) +
    Number($countListCompl.innerHTML);
  $countListAll.innerHTML = countAll;
}

function countTodo() {
  $cntItemsTodoLi = $cntItemsTodo.getElementsByTagName("li");
  let countTodo = 0;
  for (const item of $cntItemsTodoLi) {
    if (item.getElementsByTagName("input")[1].value == "") {
      return;
    } else {
      countTodo++;
      $countListTodo.innerHTML = countTodo;
    }
  }
}

function countInpro() {
  $cntItemsInproLi = $cntItemsInpro.getElementsByTagName("li");
  let countInpro = 0;
  for (const item of $cntItemsInproLi) {
    if (item.getElementsByTagName("input")[1].value == "") {
      return;
    } else {
      countInpro++;
      $countListInpro.innerHTML = countInpro;
    }
  }
}

function countCompl() {
  $cntItemsComplLi = $cntItemsCompl.getElementsByTagName("li");
  let countCompl = 0;
  for (const item of $cntItemsComplLi) {
    if (item.getElementsByTagName("input")[1].value == "") {
      return;
    } else {
      countCompl++;
      $countListCompl.innerHTML = countCompl;
    }
  }
}

// ------------------------------------------------------------
