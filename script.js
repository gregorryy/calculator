let number = 1;
let operator = "+";
let number2 = 2;

//ajouter
function add(n1, n2) {
  return n1 + n2;
}
//console.log(add(1, 2)); // affiche 3

//soustraire
function substarct(n1, n2) {
  return n1 - n2;
}
//console.log(substarct(1, 2)); // affiche -1

//multiplier
function multiply(n1, n2) {
  return n1 * n2;
}
//console.log(multiply(1, 2)); // affiche 2

//diviser
function divide(n1, n2) {
  return n1 / n2;
}
//console.log(divide(1, 2)); // affiche 0.5

function operate() {
  if (operator === "+") {
    return add(number, number2);
  } else if (operator === "-") {
    return substarct(number, number2);
  } else if (operator === "*") {
    return multiply(number, number2);
  } else if (operator === "/") {
    return divide(number, number2);
  }
}

console.log(operate());

const SEPTbtn = document.querySelector("#sept");
SEPTbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "7";
});

const HUITbtn = document.querySelector("#huit");
HUITbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "8";
});

const NEUFbtn = document.querySelector("#neuf");
NEUFbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "9";
});

const QUATREbtn = document.querySelector("#quatre");
QUATREbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "4";
});

const CINQbtn = document.querySelector("#cinq");
CINQbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "5";
});

const SIXbtn = document.querySelector("#six");
SIXbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "6";
});

const TROISbtn = document.querySelector("#trois");
TROISbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "3";
});

const DEUXbtn = document.querySelector("#deux");
DEUXbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "2";
});

const UNbtn = document.querySelector("#un");
UNbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "1";
});

const ZIZOUbtn = document.querySelector("#zéro");
ZIZOUbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "0";
});

const ptnbtn = document.querySelector("#point");
ptnbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = ".";
});

const CEbtn = document.querySelector("#CE");
CEbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "0";
});

const divbtn = document.querySelector("#÷");
divbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "÷";
});

const mulbtn = document.querySelector("#x");
mulbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "x";
});

const subbtn = document.querySelector("#moins");
subbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "-";
});

const plusbtn = document.querySelector("#plus");
plusbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = "+";
});

const Equbtn = document.querySelector("#égal");
Equbtn.addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  screen.textContent = add(number, number2);
});
