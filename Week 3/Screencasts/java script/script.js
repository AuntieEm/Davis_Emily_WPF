/*
Screencast:  Conditionals Example
Basic Conditional Statement
    Decision making for the machine
    Conditional Logic
*/

//var oldEnough = true;
var oldEnough = false;
//if the child is old enough, print to the console "you can ride!"

if (oldEnough){
    //code performed in condition is true
    console.log("You can ride the coaster!");
}
console.log("What comes after?");

//Prints:  "What comes after?"



/*
Screencast:  Rational Expressions
Relational Expressions
Comparing objects for decision making
conditional logic - Relational Expressions
 */

var kidHeight = 45;
var kidHeight2 = 47;
var kidHeight3 = 50;
var kidHeight4 = 52
var minHeight = 48

if (kidHeight > minHeight){
    //code performed in condition is true
    //if the kid is over 48 inches in height
    console.log("You can ride the coaster!");
}
console.log("What comes after?");

//Prints:  "What comes after?"


/*
Screencast:  Condition with Expression
conditional logic - with an expression
 */

sneakerLift = 2;

if ((kidHeight + sneakerLift) > minHeight){
    //code performed in condition is true
    //if the kid is over 48 inches in height
    console.log("You can ride the coaster!");
}

//Prints:  "you can ride the coaster!"


/*
Screencast:  If and else
If and Else
Choosing between two blocks of code
 */



if (kidHeight2 > minHeight){
    //code performed in condition is true
    //if the kid is over 48 inches in height
    console.log("You can ride the coaster!");
}
if (kidHeight2 < minHeight){
    console.log("Sorry kid, you've got some growing to do first.");
}
//prints:  Sorry kid....

if (kidHeight3 > minHeight){
    //code performed in condition is true
    //if the kid is over 48 inches in height
    console.log("You can ride the coaster!");
}
if (kidHeight3 < minHeight){
    console.log("Sorry kid, you've got some growing to do first.");
}
//prints:  you can ride!

if (kidHeight4 > minHeight){
    //code performed in condition is true
    //if the kid is over 48 inches in height
    console.log("You can ride the coaster!");
}
if (kidHeight4 <= minHeight){
    console.log("Sorry kid, you've got some growing to do first.");
}
//prints:  you can ride!


if (kidHeight4 > minHeight){
    //code performed in condition is true
    //if the kid is over 48 inches in height
    console.log("You can ride the coaster!");
}
else{
    //code performed if condition is false
    console.log("Sorry kid, you've got some growing to do first.");
}
//prints:  you can ride