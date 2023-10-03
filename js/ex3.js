//Exercise 3
// Ask the user for a day of the week abbreviation
var userInput = prompt("Please enter a three-letter abbreviation in lower-case for a day of the week (e.g., sun, mon, tue, etc.):");

// Initialize variables
var dayEntered = "";
var followingDay = "";

//Set dayEntered and followingDay based on the input
switch (userInput) {
    case "sun":
        dayEntered = "Sunday";
        followingDay = "Monday";
        break;
    case "mon":
        dayEntered = "Monday";
        followingDay = "Tuesday";
        break;
    case "tue":
        dayEntered = "Tuesday";
        followingDay = "Wednesday";
        break;
    case "wed":
        dayEntered = "Wednesday";
        followingDay = "Thursday";
        break;
    case "thu":
        dayEntered = "Thursday";
        followingDay = "Friday";
        break;
    case "fri":
        dayEntered = "Friday";
        followingDay = "Saturday";
        break;
    case "sat":
        dayEntered = "Saturday";
        followingDay = "Sunday";
        break;
    default:
        // Invalid Input
        console.log("Invalid input. Please enter a day from the following :sun, mon, tue, wed, thu, fri, or sat.");
        break;
}

// Output the result
if (dayEntered !== "" && followingDay !== "") {
    console.log("You entered: " + dayEntered);
    console.log("The following day is: " + followingDay);
}
