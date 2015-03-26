//Screencast:  Basic Function Structure


//function definition
/*
function outptMsg() {
    console.log("Hello World.");
}

function calcArea() {
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

*/


//Screencast:  Function Invocation - Telling the function to run

/*
//function call
calcArea();//invoke the function
*/



//Screencast:  Variable Scope - Inside and outside of functions
/*
var width = 5; //scoped to larger area

function calcArea() {
    var width = 20;//scoped to only this function
    var height = 30;
    var area = width * height;
    //console.log(area);
}
console.log(width);//used the variable outside the function
calcArea();

*/


//Screencast:  Arguments and Parameters - Getting stuff into a function

/*
//function call
funcName(argument1, argument2);
function funcName(parameter1, parameter2) {
    //code the function runs
}
 */
/*
calcArea(30, 20);//what's getting stored

function calcArea(w, h){ //storage bins - w=30, h=20
    var area = w * h;
    console.log(area);
}
    */
/*
function dogYears(age){//parameters
    //var age = 4;
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.");
}
//passing values to arguments.
var age1 = 4;
dogYears(age1);//arguments
dogYears(4);
dogYears(5);

*/



//screencast:  returning values - getting values back from a function

/*
var total = calcArea(30, 20);


function calcArea(w, h){
    var area = w * h;
   return area; //function spitting the info out
}
console.log(total);

*/




//screencast:  Function vs Procedures
//both are functions
//functions return values and procedures dont'

/*

//this is a function
function calcArea(width, height){
    var area = width * height;
    return area;
}

//this is a procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}
*/




//Screencast:  Anonymous Functions - Masked heros of the JavaScript world
//also called closures
//created as it runs

/*
var functionName = function(){
//code teh function runs
}
functionName();
 */

//works the same way just in a different order

/*
var calcArea = function(width, height){ //defining
    var area = width * height;
    return area;
}
var a = calcArea(20, 30); //invoking

console.log(a);
    */

//Loops

console.log("-----loops-----");

var b = 50; //sets up the index

while (b > 0) { //checks the condition
    console.log(b + "kegs on the wall.");
    b--;    //increments or decrements the index
    //counts down from var b.
}


console.log("-----Do While Loops-----");

var c = 10;

do {
    console.log(c + " kegs on the wall.");
    c--;
}
while (c > 0);

//tells it to run the code inside of do as long as the condition inside while is true.
//it will be run before it can decide if the condtion is true or false.




//for loops - Shorthand version compared to while & do while loops
console.log("-----For Loops-----");

for (var i = 10; i > 0; i --) {
    console.log(i + " kegs on the wall.");
}



/*
Math.ceil() --- returns the highest number
Math.floor() --- returns the lowest number
Math.round() --- returns the nearest equivalent integer
parseInt() --- returns the number as
Math.random() --- choses a random number between 0 and .999 but not 1. a random percentage but not 100%
Math.pow() --- raises the number to a specified power using 2 parameters
fix() --- will fix a number to a ceratin amount of decimal places
toFixed() --- cuts a number off after a certain point
max() --- set a value for a maximum number
min () --- set a value for a minimum number
 */


document.write("--- Chapter 5 Example:  Rounding Methods Results Calcualtor ---");

var myNumber = prompt("Enter the number to be rounded.", 87.8658768);

document.write("<h3>The number you entered was " + myNumber + "</h3><br />");
document.write("<p>The rounding results for this number are</p>");
document.write("<table width='150' border='1'>");
document.write("<tr<th>Method</th><th>Result</th></tr>");
document.write("<tr><td>parseInt()</td><td>" + parseInt(myNumber) + "</td></tr>");
document.write("<tr><td>ceil()</td><td>" + Math.ceil(myNumber) + "</td></tr>");
document.write("<tr><td>floor()</td><td>" + Math.floor(myNumber) + "</td></tr>");
document.write("<tr><td>round()</td><td>" + Math.round(myNumber) + "</td></tr>");
document.write("</table>");



document.write("--- The random() Method --- <br>");
document.write("  ");


var throwCount;
var diceThrow;
for (throwCount = 0; throwCount < 10; throwCount++){
    diceThrow = (Math.floor(Math.random() * 6) + 1);
    document.write(diceThrow + "<br>");
}

document.write("--- Using pow() --- <br>");

function fix(fixNumber, decimalPlaces){
    var div = Math.pow(10,decimalPlaces);
    fixNumber = Math.round(fixNumber * div) / div;
    return fixNumber;
}

var number1 = prompt("Enter the number with decimal places you want to fix", 54.87476576);
var number2 = prompt("How many decimal places do you want?", 2);

document.write(number1 + " fixed to " + number2 + " decimal places is: <br />");
document.write(fix(number1,number2) + "<br />");


document.write("--- Number Object -- <br>");
var firstNumber = new Number(123);  //as number
var secondNumber = new Number('123');   //as string
var myNumber = 123.765; //as number
var myNumber = "123.567";   //as string


document.write("--- The toFixed() Method ---<br>");
var itemCost = 9.99;
var itemCostAfterTax = 9.99 * 8.25;
document.write("Item cost is $" + itemCostAfterTax + "<br />");
itemCostAfterTax = itemCostAfterTax.toFixed(2);
document.write("Item cost fixed to 2 decimal places is $" + itemCostAfterTax + "<br />");




