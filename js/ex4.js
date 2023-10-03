//Exercise 4
//Input for 2 integers
var num1 = Number(prompt("Enter an integer: "));
var num2 = Number(prompt("Enter a second ingeter: "));

//Validate input
if (isNaN(num1) || !Number.isInteger(num1) || isNaN(num2) || !Number.isInteger(num2)) {
  console.log("Invalid Input. One of the values entered is invalid, please try again.");
} else {
  //Output
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
}
