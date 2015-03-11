/*
Emily Davis
SDI 1503
First foray into expressions

 */

//add alert to test the file
//alert("JavaScript works!");

//variables  --- keep variables together in one spot to cut down on confusion.

var myAddress             ="123 Elm Street";   //string variable
var milesToStore          =15.5;  // number variable
var isThereConstruction   =true;  //boolean variable
var myState               = "Texas";  //string variable
/*var myFirstName;    //value will be given through prompts
var myLastName;*/
var myFirstName, myLastName;
var myAge, myAnswer;



//prompts
// TODO:  add prompts
myFirstName = prompt("Please enter your first name:"); //prompts the user to input text that will be used as the variable's value
myLastName = prompt("Please enter your last name:");
/*myAge =prompt("What is your age?")*/
myAge = Number (prompt("What is your age?"));
/*myAge = Number(myAge); //determines the type of variable in order to get correct output.*/
myState = prompt("What state do you live in?");
myAnswer = confirm("It is true?");

// outputs
//   todo:  add some outputs
console.log("Your name is " + myFirstName + " " + myLastName + ".");  //result will show up in the console
console.log("Your age in two years will be " + (myAge + 2) + "."); //output will be the number entered with a "2" added to the end.
//unless you change the variable to be a number variable.



