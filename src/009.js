// Problem: "A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2. For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2. There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc."
// Goal: Create a loop, 3 layers deep, that increments.  On each increment check to see if the numbers happen to be a pythagorean triplet. The params are clear: a<b<c, a^2 + b^2 = c^2. If both parameters are met, check if a + b + c = 1000. If so, stop and finish. If not, keep going.  In the end, once you find the correct triple, log the product of abc.

function checkTriple(){
    for (var a = 1; a < 1000; a++){
        for (var b = 1; b < 1000; b++){
            for (var c = 1; c < 1000; c++){
                var finalAnswer = a * b * c;
                if (a < b && b < c && Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)){
                    console.log("I found a pythagorean triple! It includes " + a + ", " + b + ", and " + c);
                    if (a + b + c === 1000){
                        console.log("The correct triple is " + a + ", " + b + ", and " + c);
                        console.log("The final answer is " + finalAnswer);
                        return;
                    }
                }
            }
        }
    }
}


checkTriple();

// Got it to work. All of the code is mine, and it was incredibly easy to figure out once I learned about the Math.pow function.  My goals were on point for this one, because I was able to follow them exactly.