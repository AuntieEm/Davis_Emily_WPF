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