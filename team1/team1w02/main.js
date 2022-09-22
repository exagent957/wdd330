//WDD330 W02 Team exercise
//Part 1. Input text. Submit with button. Use JS to return entry into a div
//function declaration (Stretch challenge). Called when part1Button is clicked
function processEntry() {
  const textEntry = document.getElementById("part1Input").value; // text input
  const reply = document.getElementById("textEntered"); //this is the empty div
  reply.innerHTML = `You entered ${textEntry}`; //fill div with this
}
//Part2 - input integer. Sum all parts of integer from 1 to integer and show result in div
//function is called when part2Button is clicked
function processNumber() {
  const numberEntry = parseInt(document.getElementById("part2Input").value);
  const result = document.getElementById("sumResult"); //empty div
  if (numberEntry !== NaN) {
    result.innerHTML = `Calculated total = ${sum(numberEntry)}`;
  }
}
//function to sum all integers up to and including integer entered
//(Stretch challenge - function expression)
const sum = function (number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += i;
  }
  return answer;
};
//Part3 - input and add two numbers and show result in div
//function is called when part3Button is clicked
function addNumbers() {
  const firstNumber = parseInt(document.getElementById("part3Input1").value);
  const secondNumber = parseInt(document.getElementById("part3Input2").value);
  const total = document.getElementById("part3Result");

  if (firstNumber !== NaN && secondNumber !== NaN) {
    total.innerHTML = `The sum of your two integers is ${sumTwoNumbers(
      firstNumber,
      secondNumber
    )}`;
  }
}
//function is called when part3Button2 is clicked
//has to be a better way...this is repeating lots of code (just like the addNumbers() function above)
function multiplyNumbers() {
  const firstNumber = parseInt(document.getElementById("part3Input1").value);
  const secondNumber = parseInt(document.getElementById("part3Input2").value);
  const total = document.getElementById("part3Result");

  if (firstNumber !== NaN && secondNumber !== NaN) {
    total.innerHTML = `Your multiplication result is ${multiply(
      firstNumber,
      secondNumber
    )}`;
  }
}
//function to sum the two integers inputed
//Stretch challenge - create arrow functions
const sumTwoNumbers = (first, second) => first + second;
const multiply = (first, second) => first * second;
