//Exercise 5
//Input Password
var password = prompt('Enter a Password: ');

//initialize variable
var correct_password = 'secret';
var attempts = 1;

//Password Check loop
while(attempts <3){
  if(password === correct_password){
    console.log(`You entered the correct password after ${attempts} attempt(s)!`);
    break;
  } else{
    password = prompt('Incorrect Password. Try again: ');
    attempts++;
    if(attempts === 3){
      console.log(`Your account is locked! You failed to enter the correct password ${attempts} times.`);
    }
  }
}