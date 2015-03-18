//Multiple conditions
//using and, or, & Not


var myAge = Number(prompt("Enter your age.",30));   //define variable

if (myAge >= 0 && myAge <= 10)
{
    console.log("My age is between 0 and 10.");
}

/*
 The ﬁ rst if statement is asking the question “Is myAge between 0 and 10?” You’ll take the LHS of the
 condition ﬁ rst, substituting your particular value for myAge. The LHS asks “Is 30 greater than or equal
 to 0?” The answer is true. The question posed by the RHS condition is “Is 30 less than or equal to 10?”
 The answer is false. These two halves of the condition are joined using &&, which indicates the AND
 operator. Using the AND results table shown earlier, you can see that if LHS is true and RHS is false,
 you have an overall result of false. So the end result of the condition for the if statement is false,
 and the code inside the braces won’t execute.
 */

if ( !(myAge >= 0 && myAge <= 10))
{
    console.log("My Age is NOT between 0 and 10.");
}

/*
 The second if statement is posing the question “Is myAge not between 0 and 10?” Its condition is similar
 to that of the ﬁ rst if statement, but with one small difference: You have enclosed the condition inside
 parentheses and put the NOT operator (!) in front.
 The part of the condition inside the parentheses is evaluated and, as before, produces the same result —
 false. However, the NOT operator reverses the result and makes it true. Because the if statement’s
 condition is true, the code inside the braces will execute this time, causing a document.write() to write
 a response to the page
 */

if (myAge >= 80 || myAge <= 10 )
{
    console.log("My age is 80 or above OR 10 or below.");
}

/*
 The third if statement asks, “Is myAge greater than or equal to 80, or less than or equal to 10?” Taking
 the LHS condition ﬁ rst —  ”Is 30 greater than or equal to 80?” —  the answer is false. The answer to the
 RHS condition —  ”Is 30 less than or equal to 10?” —  is again false. These two halves of the condition
 are combined using ||, which indicates the OR operator. Looking at the OR result table earlier in this
 section, you see that false OR false produces a result of false. So again the if statement’s condition
 evaluates to false, and the code within the curly braces does not execute.
 */

if ( (myAge >= 30 && myAge <= 39) || (myAge >= 80 && myAge <= 89) )
{
    console.log("My age is between 30 and 39 or my age is between 80 and 89.");
}

/*
 It asks the question, “Is myAge between 30 and 39 or between 80 and 89?” Let’s break the condition
 down into its component parts. There is a left-hand-side and a right-hand-side condition, combined by
 means of an OR operator. However, the LHS and RHS themselves have an LHS and RHS each, which
 are combined using AND operators. Notice how parentheses are used to tell JavaScript which parts of
 the condition to evaluate ﬁ rst, just as you would do with numbers in a mathematical calculation.
 Let’s look at the LHS of the condition ﬁ rst, namely (myAge >= 30 && myAge <= 39). By putting the condi-
 tion into parentheses, you ensure that it’s treated as a single condition; no matter how many conditions
 are inside the parentheses, it only produces a single result, either true or false. Breaking down the
 conditions in the parentheses, you have “Is 30 greater than or equal to 30?” with a result of true, and
 “Is 30 less than or equal to 39?” again with a result of true. From the AND table, you know true AND
 true produces a result of true.
 Now let’s look at the RHS of the condition, namely (myAge >= 80 && myAge <= 89). Again breaking the
 condition down, you see that the LHS asks, “Is 30 greater than or equal to 80?” which gives a false
 result, and the RHS asks, “Is 30 less than or equal to 89?” which gives a true result. You know that
 false AND true gives a false result.
 Now you can think of your if statement’s condition as looking like (true || false). Looking at the
 OR results table, you can see that true OR false gives a result of true, so the code within the braces
 following the if statement will execute, and a line will be written to the page.
 However, remember that JavaScript does not evaluate conditions where they won’t affect the ﬁ nal
 result, and the preceding condition is one of those situations. The LHS of the condition evaluated to
 true. After that, it does not matter if the RHS of the condition is true or false because only one of the
 conditions in an OR operation needs to be true for a result of true. Thus JavaScript does not actually
 evaluate the RHS of the condition. We did so simply for demonstration purposes.
 */


/*
Enter "30"
my age is NOT between 0 and 10
my age is between 30 and 39 or my age is between 80 and 89
 */



//Else & Else If Statements

if (myAge >= 0 && myAge <= 10)
{
    console.log("My age is between 0 and 10.");
}

if ( !(myAge >= 0 && myAge <= 10))
{
    console.log("My age is NOT between 0 and 10");
}

/*
 The ﬁ rst if statement tests whether myAge is between 0 and 10, and the second for the situation where
 myAge is not between 0 and 10. However, JavaScript provides an easier way of achieving this: with an
 else statement. Again, the use of the word else is similar to its use in the English language. You might
 say, “If it is raining, I will take an umbrella; otherwise I will take a sun hat.” In JavaScript you can say
 if the condition is true, then execute one block of code; else execute an alternative block. Rewriting
 the preceding code using this technique, you would have the following:
 */


if (myAge >= 0 && myAge <= 10)
{
    console.log("My age is between 0 and 10.");
}
else
{
    console.log("My age is NOT between 0 and 10");
}

/*
 Writing the code like this makes it simpler and therefore easier to read. Plus it also saves JavaScript from
 testing a condition to which you already know the answer.
 */

if (myAge >= 0 && myAge <= 10)
{
    console.log("My age is between 0 and 10.");
}
else if ( (myAge >= 30 && myAge <= 39) || (myAge >= 80 && myAge <= 89) )
{
    console.log("My age is between 30 and 39 " + "or my age is between 80 and 89.");
}
else
{
    console.log("My age is NOT between 0 and 10, " + "nor is it between 30 and 39, nor is it between 80 and 89.");
}

/*
 The ﬁ rst if statement checks whether myAge is between 0 and 10 and executes some code if that’s
 true. If it’s false, an else if statement checks if myAge is between 30 and 39 or 80 and 89, and
 executes some other code if either of those conditions is true. Failing that, you have a ﬁ nal else state-
 ment, which catches the situation in which the value of myAge did not trigger true in any of the earlier
 if conditions.
 */

if (myAge >= 0 && myAge <=10) {
    console.log("My age is between 0 and 10.");
    if (myAge == 5) {
        console.log("You are 5 years old.");
    }
}
else
{
    console.log("My age is NOT between 0 and 10.");
}
