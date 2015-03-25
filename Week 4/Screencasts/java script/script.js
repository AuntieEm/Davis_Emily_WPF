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

var width = 5; //scoped to larger area

function calcArea() {
    var width = 20;//scoped to only this function
    var height = 30;
    var area = width * height;
    //console.log(area);
}
console.log(width);//used the variable outside the function
calcArea();