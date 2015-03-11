/**
 * Created by Alys1 on 3/10/15.
 */
//Casting
// treating strings like numbers and vice versa

var stringVar = "6";
var result = 7 + stringVar;
console.log(result);
//prints:  "76" - concatenating


var stringVar = "6";
var result = 7 + Number(stringVar); //casting using Number() to convert a string to a number
console.log(result);
//prints:  "13" - coverted and added

//think of casting like casting actors to play people that don't actually exist. The audience treats the actor being cast as a character as that character.


var areaCode = 407;
var firstPart = 203;
var secPart = 4529;

var phoneNo = areaCode + firstPart + secPart;
console.log(phoneNo);
//prints:  "5139" --The sum of the numbers above
// we want them to string together to get a phone number.

var areaCode = 407;
var firstPart = 203;
var secPart = 4529;

var phoneNo = String(areaCode) + String(firstPart) + String(secPart);
console.log(phoneNo);
//prints:  "4072034529"

var areaCode = 407;
var firstPart = 203;
var secPart = 4529;

var phoneNo = "(" + String(areaCode) + ")" + "-" + String(firstPart) + "-" + String(secPart);
console.log(phoneNo);
//prints:  "(407)-203-4529"