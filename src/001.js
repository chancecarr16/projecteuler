// Problem: "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.  Find the sum of all the multiples of 3 or 5 below 1000."
// Goal: Create a variable finalNumber and have it be equal to the sum of all the multiples of 3 or 5 below 1000
// Steps: Is the number a multiple of 3 or 5; Is it below 1000; If so, add to the total

var finalNumber = 0;
var maxNumber = 1000;

for (var i = 0; i < maxNumber; i++) {
    if (i % 3 == 0 || i %  5 == 0) {
        finalNumber = finalNumber + i;
        console.log (i + " is a multiple of 3 or 5!");
        console.log (i + " has been added to the former sum. The new sum is " + finalNumber + "!");
    }
}

console.log ("The final number is " + finalNumber);