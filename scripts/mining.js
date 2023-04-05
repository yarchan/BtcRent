let dropDownTop = document.getElementById("dropDownTop");
let textBoldTop = document.getElementById("textBoldTop");
let textLightTop = document.getElementById("textLightTop");
let dropDownClickTop = document.getElementById("dropDownClickTop");
let coditionTop = false;

dropDownTop.addEventListener("click", () => {
  coditionTop = !coditionTop;
  if (coditionTop == true) {
    dropDownClickTop.classList.add("transform");
    dropDownTop.classList.add("drop-down-open-top");
    textBoldTop.classList.add("hidden");
    textLightTop.classList.add("visible");
  } else {
    dropDownClickTop.classList.remove("transform");
    dropDownTop.classList.remove("drop-down-open-top");
    textBoldTop.classList.remove("hidden");
    textLightTop.classList.remove("visible");
  }
});

let dropDownBottom = document.getElementById("dropDownBottom");
let textBoldBottom = document.getElementById("textBoldBottom");
let textLightBottom = document.getElementById("textLightBottom");
let dropDownClickBottom = document.getElementById("dropDownClickBottom");
let coditionBottom = false;

dropDownBottom.addEventListener("click", () => {
  coditionBottom = !coditionBottom;
  if (coditionBottom == true) {
    dropDownClickBottom.classList.add("transform");
    dropDownBottom.classList.add("drop-down-open-bottom");
    textBoldBottom.classList.add("hidden");
    textLightBottom.classList.add("visible");
  } else {
    dropDownClickBottom.classList.remove("transform");
    dropDownBottom.classList.remove("drop-down-open-bottom");
    textBoldBottom.classList.remove("hidden");
    textLightBottom.classList.remove("visible");
  }
});
