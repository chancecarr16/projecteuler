// Problem: "The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million."
// Goal: Create incrementing loop from 2 to 2 million.  Check each time to see if a number is prime.  If so, push to an array.  In the end, use the .reduce function to find the sum of all the integers in the array.

var primeArray = [2];

function sumArray(primeArray){
    for (var i = 0, sum = 0; i < primeArray.length; sum += primeArray[i++]){
    }
    return sum;
}

for (var a = 2; a < 2000000; a++){
    for (var b = 2; b <= a; b++){
        if (a % b == 0){
            break;
        }
        else {
            if (b == a - 1){
                primeArray.push(a);
                console.log(a + " is a prime number!");
            }
        }
    }
}

console.log(sumArray(primeArray));

// I just ran this.  It took like 30 minutes. Super inefficient, i know, but it works!
// Also, I looked up that sieve of Eratosthenes.  It's efficient as s**t!  If I ever come back to this problem, rewrite it using the sieve!