/**
 * Created by Alys1 on 3/17/15.
 */


//alert("Javascript works!");

//variables
var myAddress       = "123 Elm Street";   //string variable
var myFavoriteStore = "\"Publix\" Supermarket"; //string with escapes
var milesToStore    = 6.5; //miles to the store
var construction    = false;   //Boolean indicating construction

// outputs
console.log("I live at " + myAddress + ".");
console.log("I shop at " + myFavoriteStore + ".");
console.log("It's only " + milesToStore + " miles to the store.");
console.log("It is " + construction + " that there is construction.");


// confirm - return true if OK is clicked and false if Cancel is clicked
construction = confirm("Is there still construction? Ok for true, or Cancel for false.");

// Boolean Conditional
//asking a question
if (construction === true) {
    //code that runs if construction is true
    //console.log("Yes, there is construction!");
    var extraMiles = prompt("How many more miles is it to the store?");
    extraMiles = Number(extraMiles);

    if (extraMiles >= 3) {
     //ths code runs if construction is true AND extraMiles >= 3
    extraMiles = extraMiles + milesToStore;
        console.log("The total miles will be " + extraMiles + ".");
    }


    else {
        //code runs if construction is tue AND extraMiles < 3
        console.log("We aren't adding much to the ride.");
    }

}




else {
    //code that runs if construction is false
   // console.log("Nope, no construction today!");
    console.log("No, the road is clear.");
    var myEmptyString = prompt("What store would you like to visit?");

    if (myEmptyString === "") {

        myEmptyString = prompt("Hey! You need to enter a store name.");
        console.log("You want to go to " + myEmptyString + ".");

    } else {
        console.log("Okay, let's go to there!");
    }

}

console.log ("Let's go to the store!");
