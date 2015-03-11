/**
 * Created by Alys1 on 3/10/15.
 */
//Assignment Operators

//An expression with an assignment

var a = 3;
a + 4;
console.log(a);
//prints:  "3"


var a = 3;
a = a + 4; //assign an expression to "a" using "="
console.log(a);
//prints:  "7"



//+= assignment operator

var a = 3;
a += 4;
console.log(a);
//prints:  "7"

var a = 3;
a *= 4;  // same as a = a * 4;
console.log(a);
//prints:  "12"

var a = 3;
a /= 4;  // same as a = a / 4;
console.log(a);
//prints:  ".75"

var a = 3;
a -= 4;  // same as a = a 1 4;
console.log(a);
//prints:  "-1"

var a = 3;
a ++ ; //a = a + 1 // a += 1
console.log(a);
//prints:  4

var a = 3;
a -- ; //a = a - 1 // a -= 1
console.log(a);
//prints:  "2"