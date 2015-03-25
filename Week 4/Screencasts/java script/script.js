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

var total = calcArea(30, 20);


function calcArea(w, h){
    var area = w * h;
   return area; //function spitting the info out
}
console.log(total);
