let displayValue = "";
let currentOperator = null;
let firstOperand = null;
//let functionEnabled = "non";

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

function disablePButtons() {
  document.getElementById("point").disabled = true;
}

function enablePButtons() {
  document.getElementById("point").disabled = false;
}

function disableButtons() {
  document.getElementById("sept").disabled = true;
  document.getElementById("huit").disabled = true;
  document.getElementById("neuf").disabled = true;
  document.getElementById("quatre").disabled = true;
  document.getElementById("cinq").disabled = true;
  document.getElementById("six").disabled = true;
  document.getElementById("un").disabled = true;
  document.getElementById("deux").disabled = true;
  document.getElementById("trois").disabled = true;
  document.getElementById("zéro").disabled = true;
  document.getElementById("égal").disabled = true;
  document.getElementById("÷").disabled = true;
  document.getElementById("plus").disabled = true;
  document.getElementById("moins").disabled = true;
  document.getElementById("del").disabled = true;
  document.getElementById("point").disabled = true;
  document.getElementById("x").disabled = true;
}

function enableButtons() {
  document.getElementById("sept").disabled = false;
  document.getElementById("huit").disabled = false;
  document.getElementById("neuf").disabled = false;
  document.getElementById("quatre").disabled = false;
  document.getElementById("cinq").disabled = false;
  document.getElementById("six").disabled = false;
  document.getElementById("un").disabled = false;
  document.getElementById("deux").disabled = false;
  document.getElementById("trois").disabled = false;
  document.getElementById("zéro").disabled = false;
  document.getElementById("égal").disabled = false;
  document.getElementById("÷").disabled = false;
  document.getElementById("plus").disabled = false;
  document.getElementById("moins").disabled = false;
  document.getElementById("del").disabled = false;
  document.getElementById("point").disabled = false;
  document.getElementById("x").disabled = false;
}

function calculate() {
  //functionEnabled = "oui";
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

//document.addEventListener("click", (event) => {
//if (event.target.tagName === "BUTTON") {
//console.log(functionEnabled);
//}
// });

//if ((functionEnabled = "oui")) {
//console.log("oui");
//}

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
  disablePButtons();
});

const CEbtn = document.querySelector("#CE");
CEbtn.addEventListener("click", () => {
  clearDisplay();
  enableButtons();
  enablePButtons();
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
  disableButtons();
  console.log(disableButtons());
  calculate();
});

const delbt = document.querySelector("#del");
delbt.addEventListener("click", () => {
  deleteLastChar();
});
