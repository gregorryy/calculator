let displayValue = "0";
let currentOperator = null;
let firstOperand = null;

function clearDisplay() {
  displayValue = "";
  currentOperator = null;
  firstOperand = null;
  updateDisplay();
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (firstOperand === null && displayValue !== "") {
    firstOperand = parseFloat(displayValue);
    currentOperator = operator;
    displayValue = "";
  }
}

function deleteLastChar() {
  let value = (displayValue.textContent = displayValue.slice(0, -1));
  displayValue = value;
  updateDisplay();
}

function disableButtons() {
  document.getElementById("point").disabled = true;
}

function enableButtons() {
  document.getElementById("point").disabled = false;
}

function calculate() {
  if (currentOperator !== null && displayValue !== "") {
    const secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (currentOperator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
    }

    displayValue = result.toString();
    currentOperator = null;
    firstOperand = null;
    updateDisplay();
  }
}

if (appendOperator("/") && appendNumber("0")) {
  console.log("test");
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = displayValue;
}

const SEPTbtn = document.querySelector("#sept");
SEPTbtn.addEventListener("click", () => {
  appendNumber("7");
});

const HUITbtn = document.querySelector("#huit");
HUITbtn.addEventListener("click", () => {
  appendNumber("8");
});

const NEUFbtn = document.querySelector("#neuf");
NEUFbtn.addEventListener("click", () => {
  appendNumber("9");
});

const QUATREbtn = document.querySelector("#quatre");
QUATREbtn.addEventListener("click", () => {
  appendNumber("4");
});

const CINQbtn = document.querySelector("#cinq");
CINQbtn.addEventListener("click", () => {
  appendNumber("5");
});

const SIXbtn = document.querySelector("#six");
SIXbtn.addEventListener("click", () => {
  appendNumber("6");
});

const TROISbtn = document.querySelector("#trois");
TROISbtn.addEventListener("click", () => {
  appendNumber("3");
});

const DEUXbtn = document.querySelector("#deux");
DEUXbtn.addEventListener("click", () => {
  appendNumber("2");
});

const UNbtn = document.querySelector("#un");
UNbtn.addEventListener("click", () => {
  appendNumber("1");
});

const ZIZOUbtn = document.querySelector("#zéro");
ZIZOUbtn.addEventListener("click", () => {
  appendNumber("0");
});

const ptnbtn = document.querySelector("#point");
ptnbtn.addEventListener("click", () => {
  appendNumber(".");
  disableButtons();
});

const CEbtn = document.querySelector("#CE");
CEbtn.addEventListener("click", () => {
  clearDisplay();
  enableButtons();
});

const divbtn = document.querySelector("#÷");
divbtn.addEventListener("click", () => {
  appendOperator("/");
});

const mulbtn = document.querySelector("#x");
mulbtn.addEventListener("click", () => {
  appendOperator("*");
});

const subbtn = document.querySelector("#moins");
subbtn.addEventListener("click", () => {
  appendOperator("-");
});

const plusbtn = document.querySelector("#plus");
plusbtn.addEventListener("click", () => {
  appendOperator("+");
});

const Equbtn = document.querySelector("#égal");
Equbtn.addEventListener("click", () => {
  calculate();
});

const delbt = document.querySelector("#del");
delbt.addEventListener("click", () => {
  deleteLastChar();
});
