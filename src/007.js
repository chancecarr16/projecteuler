// Problem: "By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10 001st prime number?"
// Goal: Use incrementing loop, check if each number is prime.  If so, add the number to an array. Stop once the array reaches 10,000 in length and print out the last value.

var primeNums = [];
var num = 2;
function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num !== 1;
}

while (primeNums.length < 10001){
    if (isPrime(num) == true){
        console.log(num + " is a prime number!");
        primeNums.push(num);
        console.log("The array currently has " + primeNums.length + " items");
        num++;
    }
    else{
        num++;
    }
}

console.log("The 10,001st prime number is " + primeNums[10000]);

// I found the funcion isPrime on Stack Overflow.  It's really efficient, so I think I'm going to use it in every prime problem from now on.