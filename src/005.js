// Problem: "2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?"
// Goal: Create a loop that checks if the current number is divisible by all of the numbers in a specified set.  Have the loop stop if it is not divisible.  If not, increment and try again.
// Steps:

var isDivisible = 0;
var currentNum = 1;
var onOff = 0;

while (onOff == 0) {
    var counter = 1;
    while (counter <= 10) {
        if (currentNum % counter == 0){
            if (counter == 10){
                onOff = 1;
                break;
            }
            counter++;
        }
        else{
            console.log(currentNum + " is not divisible by " + counter);
            currentNum++;
            break;
        }
    }
}
isDivisible = currentNum;
console.log(isDivisible + " is the smallest number that is divisible by all of the numbers in the set!");

// Also, the new workspace I created won't run anything.  I think it's time to switch to jetbrains.