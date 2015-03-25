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





/*
Screencast:  Logical Operators
Comparing pairs of TRUE or FALSE
 */

/*
Reusable code

comparison results in true or false
used for comparisons or boolean variables

&&  and
        true && true = true
        true && false = false
        false && true = false
        false && false = false

||  Or
    requires at least one pair to be true for the whole pair to be true.
        true || true = true
        true || false = true
        false || true = true
        false || false = false

^   Exclusive or (xor)
    translates as "either one or the other but not both."

!   Not
    used to flip the meaning of the object
    if more than one are true, the result is false
    a!=b the same as !(a===b)
    a<b same as !(a<b)
    a === b && b === c

 */

/*
AND OPERARTOR
 */
var budget = 300;
var iPhonePrice = 199.99;
var parCheck = 200;

//if the price of the phone is less than our budget AND if our paycheck is over 300.
if(iPhonePrice < budget && parCheck > 300){
    console.log("We can buy the phone!");

}else{
    console.log("NO PHONE FOR YOU!");
}


/*
OR OPERATOR
 */

var budget2 = 100;
var iPhonePrice2 = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget OR if our paycheck is over 300.
if(iPhonePrice2 < budget2 || wonLottery === true){
    console.log("We won the lottery! We can buy the phone!");

}else{
    console.log("No lottery. No phone!");
}


/*
Screencast:  Ternary Operators
decision making on one line
 */

/*if(condition){
    do if true;
}else{
    do if false;
}

(condition) ? do if true : do if false;
*/


var gpa = 48;
//if the gpa is over the min 2.0 score the student can graduate
/*
if(gpa > 2.0){
    console.log("You can graduate");
}else{
    console.log("GPA is too low");
}
*/

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA too low!");


var age = 11;
var book;

//if the child is under 10 they get green eggs and ham, otherwise they get the time machine

if(age < 10){
    book =  "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}
console.log(book);


book = (age > 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);