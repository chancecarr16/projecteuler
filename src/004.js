// Problem: "A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers."
// Goal: Have loop multiply all 3-digit numbers together, check if result is palindromic by converting digits into numbers in an array, and comparing the corresponding array spots (1 and 5/6, 2 and 4/5, 3 and 3/4.) If it is palindromic, replace var largestPal with the new value.
// Plan: Create var largestPal and make it equal 0.  Create loop that multiplies all 3-digit numbers together (100-999.) Create funciton isPal and have it checked in an if statement. If isPal = true, replace largestPal with current value.

var palArray = [];

var equalStrings = function(productString, reverseString) {
    productString = product.toString();
    reverseString =
        Array.prototype.map.call(productString, function(x) {
            return x;
        }).reverse().join('');
    if (productString === reverseString) {
        return true;
    }
    return false;
};

for (var i = 100; i <= 999; i++) {
    for (var j = 100; j <= 999; j++) {
        var product = i*j;
        if (equalStrings(true)){
            palArray.push(product);
        }
    }
}
var largestPal = Math.max.apply(Math, palArray);

console.log("Donezo!");
console.log("The largest palindromic product is " + largestPal + "!");

// Very messy code, I know, but I learned a lot about functions and native actions