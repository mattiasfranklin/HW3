//Exercise 7
//Inputs
var hr = Number(prompt('What Hour is it: '));
var min = Number(prompt('What Minute is it: '));
var sec = Number(prompt('What Second is it: '));

//Validate inputs, output if valid
if (isNaN(hr) || !Number.isInteger(hr) || hr < 0 || hr > 23) {
  console.log("Invalid Hour Input. Please try again.");
} else if (isNaN(min) || !Number.isInteger(min) || min < 0 || min > 59) {
  console.log("Invalid Minute Input. Please try again.");
} else if (isNaN(sec) || !Number.isInteger(sec) || sec < 0 || sec > 59) {
  console.log("Invalid Second Input. Please try again.");
} else {
  console.log(`Time input: ${hr}h${min}m${sec}s`);
  
  //adds second to time
  if (sec !== 59) {
    sec++;
  } else if (sec === 59 && min !== 59) {
    min++;
    sec = 0;
  } else if (sec === 59 && min === 59 && hr !== 23) {
    hr++;
    min = 0;
    sec = 0;
  } else {
    hr = 0;
    min = 0;
    sec = 0;
  }

  //output second after
  console.log(`One Second Later: ${hr}h${min}m${sec}s`);
}