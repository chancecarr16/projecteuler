// Problem: "The sum of the squares of the first ten natural numbers is, 12 + 22 + ... + 102 = 385. The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025. Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640. Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum."
// Goal: Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum. Use an incrementing loop to add up the squares of the numbers in the set.  Stick the sum in a variable.  Use another incrementing loop to get the square of the sum of the same numbers.  Stick that in another variable and get the difference.
// Steps:

var difference = 0;
var sumOfSquares = 0;
var squareOfSum = 0;
var sumBeforeSquare = 0;

for (var i = 1; i <= 10; i++){
    sumOfSquares = sumOfSquares + i*i;
}

for (var j = 1; j <= 10; i++){
    sumBeforeSquare = sumBeforeSquare + j;
}

squareOfSum = sumBeforeSquare*sumBeforeSquare;

difference = squareOfSum - sumOfSquares;
console.log("The final answer is " + difference + "!");