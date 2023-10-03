//Exercise 1
var num = Number(prompt("Enter a number between 1-100."));
if (!isNaN(num) && Number.isInteger(num) && (num >= 0) && (num <= 100)) {
  console.log(`Thank you! You entered ${num}, a valid number`);
} else {
  console.log(`Sorry, ${num} is not a valid entry`);
}