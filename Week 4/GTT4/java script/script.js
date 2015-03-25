/*
Go to training week 4
 */


/*
//Ternaries review

var myName = "Emily";

if (myName === "Lee")   {
    console.log("Hello, " + myName + ".");
}   else    {
    console.log("Who are you?");
}

(myName === "Lee") ? console.log("Welcome back, " + myName + ".") : console.log("Intruder alert!");
//question              what runs if true                           what runs if false

//works best for quick simple comparisons and results
*/


/*
 if (firstName === "")   {
 firstName = prompt("Do not leave this blank.\n\nPlease enter your first name:");
 }
 */

// variables
var myName = prompt("enter your name please:");//global (public) variable
var myRandom;

// functions
function nameValidation(firstName) {

    var timesClicked = 1;

    while (firstName === "") {  //firstName is a local (private) variable
        firstName = prompt("Do not leave this blank.\n\nPlease enter your first name:");

        timesClicked++;

        if (timesClicked === 10) {
            console.log("Enough! I haven't time to play today!");
            break;
        }
    }

    return firstName;

}

function randomNumGen(min, max, num) {

    var randomArray = [];

   //console.log("This is my new function.");
    //Math.random() * (max - min) + min
    for (var i = 0; i < num; i++) {

        var myRandomNumber = Math.round(Math.random() * (max - min) + min);

        //console.log(myRandomNumber);
        randomArray[i] = myRandomNumber;
    }

    return randomArray;
}

// main code
//nameValidation(myName);
//lines 35-58 are ENCAPSULATED into this function
//console.log(firsName);  //variable only works inside the above function

myName = nameValidation(myName); //sends the value of the variable to the value of myName
//if there's more than one variable, it will have to be sent via an array

console.log("Hello, " + myName + ". Welcome!");

myRandom = randomNumGen(10, 100, 5);
console.log(myRandom);
myRandom = randomNumGen(50, 1000, 10);
console.log(myRandom);





