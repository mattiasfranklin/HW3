// Exercise 2
var name = prompt("Enter your name: ");
var num_units = Number(prompt("Enter the number of units you have completed so far: "));
var gradeStanding = ""
if (!isNaN(num_units) && Number.isInteger(num_units) && (num_units >= 0)) {
  switch(true){
    case(num_units <= 30):
      gradeStanding = "Freshman";
      break;
    case(num_units <= 60):
      gradeStanding = "Sophomore";
      break;
    case(num_units <= 90):
      gradeStanding = "Junior";
      break;
    case (num_units > 90):
      gradeStanding = "Senior";
      break;
  }
  console.log(`Hello ${name} \nYour grade standing is ${gradeStanding}`);
} else {
  console.log(`Sorry that is not a valid number of units`);
}