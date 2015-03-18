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




/*
Screencast:  else if
choosing between three or more blocks of code
 */

var kidHeight5 = 52;
var minHeight2 = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to the console "you can ride."
//if the kid is over 48 inches in heiths
if(kidHeight5 > minHeight2){
    //you can ride!
    console.log("You can ride the coaster!");
}else if(kidHeight5 > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}
//prints:  sorry...

var kidHeight6 = 43;
var minHeight3 = 48;
var wParentHeight2 = 50; //the height of the kid with the parent

//if the child is old enough, print to the console "you can ride."
//if the kid is over 48 inches in heiths
if(kidHeight6 > minHeight3){
    //you can ride!
    console.log("You can ride the coaster!");
}else if(kidHeight6 < wParentHeight2){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}

//prints:  only with parent




/*
Screencast:  Relational Operators
comparing 2 variables or values
comparison results in true or false
 */

// = assigns value
//  equality    ==
        //  read as "same as"    compares values
// strict equality  ===     "The same value AND the same type" compares value and type
        //best practice-faster-more efficient
// inequality   !=
    //"is not the same as"
// greater than >
// less than    <
//greater than or equal to  >=
//less than or equal to     <=


