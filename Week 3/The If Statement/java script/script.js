/**
 * Created by Alys1 on 3/17/15.
 */


var degFarhen = Number(prompt("Enter the degrees Fahrenheit",32))
var degCent;

degCent = 5/9 * (degFarhen - 32);

console.log(degFarhen + "\xB0 Fahrenheit is " + degCent + "\xB0 centigrade<br />");

if (degCent < 0)
{
    console.log("That's below the freezing point of water.");
}

if (degCent == 100)
console.log("That's the boiling point of water.");



/*
prompt - enter "31" Get:
31° Fahrenheit is -0.5555555555555556° centigrade<br />
That's below the freezing poing of water.

enter "212" Get:
212° Fahrenheit is 100° centigrade<br />
That's the boiling point of water.

*/
