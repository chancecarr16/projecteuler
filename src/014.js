/* Problem:

 "n → n/2 (n is even)
 n → 3n + 1 (n is odd)

 Using the rule above and starting with 13, we generate the following sequence:

 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

 Which starting number, under one million, produces the longest chain?

 NOTE: Once the chain starts the terms are allowed to go above one million."
 */
// Goal: Create an incrementing loop that ends at one million. For each number, put it through the two rules until it ends at one.  For each new number in the chain, add one to a variable.  If the variable is larger than the former largest number of chain items, replace the old largest number.

function collatzNum(num){
    if (num % 2 === 0){
        return num / 2;
    }else{
        return (num * 3) + 1;
    }
}

function collatzSequence(num){
    var counter = 1;
    while (num != 1){
        num = collatzNum(num);
        counter++;
    }
    return counter;
}

function collatzFinal(num){
    var finalAnswer = 0;
    var max = 0;

    for (var i = 1; i < 1000000; i++){
        var sequence = collatzSequence(i);
        if (sequence > max){
            console.log(sequence + " is the new highest number");
            max = sequence;
            finalAnswer = i;
        }
    }
    console.log(finalAnswer);
}

collatzFinal();

// I had a different way of going about things, but I got a bit stuck.  I looked on stack overflow and found a really nice strategy in using these functions! It did what I planned on doing, but in a better and simpler way. I should use functions more often.