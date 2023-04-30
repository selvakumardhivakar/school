const buttons = document.querySelectorAll(".button");
const clear = document.querySelector(".clear");
const screen = document.querySelector(".screen");

buttons.forEach((button) => {
  button.addEventListener("click", () => calculate(button));
});

let expression = [];
let evalExpression = "";

function calculate(button) {
  let value = button.textContent;
  if (value == "=") {
    if (evalExpression.length == 0) {
      return;
    } else {
      evalExpression = Math.floor(eval(evalExpression), 4);
      expression = [];
      expression.push(evalExpression);
    }
  } else {
    if (value == "+" || value == "-" || value == "*" || value == "/") {
      let prevValue = expression[expression.length - 1];
      if (
        prevValue == "+" ||
        prevValue == "-" ||
        prevValue == "*" ||
        prevValue == "/"
      ) {
        expression[expression.length - 1] = value;
      } else {
        expression.push(button.textContent);
      }
    } else {
      expression.push(button.textContent);
    }
    evalExpression = expression.join("");
  }
  screen.textContent = evalExpression;
}

clear.addEventListener("click", () => {
  screen.textContent = "|";
  expression = [];
});
