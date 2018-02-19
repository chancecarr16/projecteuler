// Problem: "The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143?"
// Goal: First create a variable factoredNumber. Then create a variable largestPrimeFactor. Create a loop that finds all the factors of factoredNumber, checks which ones are prime, and prints out the largest one.  Find the largest prime factor for 600851475143.
// Steps: Create a for loop that checks a few things: increment i from 0 to factoredNumber / 2 and check each iteration if factoredNumber % i == 0. If so, have another for loop that increments j from 0 to i and checks if i % j == 0. If it returns false everytime, i is a prime factor of factoredNumber!  Replace largestPrimeFactor with i.  Then go again.  At the end print out the largest prime factor.

/* (this code is correct but it isn't efficient enough to deal with this huge number.)
 var factoredNumber = 600851475143;
 var largestPrimeFactor = 1;
 var isPrime = true;

 for (var i = 2; i < factoredNumber / 2; i++) {
 if (factoredNumber % i == 0) {
 console.log (i + " is a factor of " + factoredNumber + "! I will now check if it is prime.");
 for (var j = 2; j < i / 2; j++) {
 if (i % j == 0) {
 isPrime = false;
 }
 else {
 isPrime = true;
 }
 if (isPrime == false) {
 console.log (i + " is not a prime factor of " + factoredNumber + ".");
 { break; }
 }
 }
 if (isPrime == true) {
 console.log (i + " is a prime factor of " + factoredNumber + "! I will now replace the former largest prime factor with this new number!");
 largestPrimeFactor = i;
 }
 }
 }

 console.log ("The largest prime factor of " + factoredNumber + " is " + largestPrimeFactor + "!");
 */

// New Goal: Create a way for the computer to use prime factorization; have it try numbers and if one happens to be a prime factor, add it to an array.  At the end, find the largest value in the array and that is the answer.

var originalTarget = 600851475143;
var target = originalTarget;
var i = 2;
var factorArray = [];
while (i<target) {
    while (target % i === 0) {
        (function(newTarget) {
            console.log (target + " can be divided by " + i + ", which gives me " + newTarget);
            target = newTarget;
            factorArray.push(i);
        })(target / i);
    }
    i++;
}
factorArray.push(target);

var largest = Math.max.apply(Math, factorArray);

console.log ("It seems like " + largest + " is the biggest prime factor of " + originalTarget + "!");

/* Got myself a little lost, mainly because I don't have a very good grasp of javascript syntax.
 Since I had correct code before, I felt no guilt in looking for an alternate solution on Github.
 Their code worked for this specific problem, but with a few tests I realized it wouldn't work with
 some more simple problems. I added the array function which makes it work for every situation.
 */