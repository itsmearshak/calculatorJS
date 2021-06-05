const number = document.querySelectorAll(".numbers div");
const display = document.querySelector(".input");
const operators = document.querySelectorAll(".operators div");
const equal = document.querySelector(".equal");

let value = "";
// ///////////////display-numbers///////////////////
number.forEach((el) =>
  el.addEventListener("click", function () {
    if (el.textContent === "C") {
      display.textContent = "";
      value = "";
      return;
    }
    display.textContent += el.textContent;
    value += el.textContent;
    flag = true;
  })
);
// //////diplay-operators////////////////////////
operators.forEach((el, i) =>
  el.addEventListener("click", function () {
    display.textContent += el.textContent;
    if (i < 2) {
      value += el.textContent;
    }
    if (i === 2) {
      value += "*";
    }
    if (i === 3) {
      value += "/";
    }
  })
);
// /////equal-operator/////////////////////////
equal.addEventListener("click", function () {
  display.textContent = eval(value);
});
