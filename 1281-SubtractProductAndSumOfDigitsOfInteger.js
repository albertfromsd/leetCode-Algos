// 1281
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.


// Example 1:
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

// Example 2:
// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21


// Constraints:
// 1 <= n <= 10^5

// Runtime: 44 ms, faster than 98.34% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.

function subtractProductSumOfDigits(num) {
    let numString = num.toString();
    let newArr = numString.split('');
    let resultTracker = {
        "product": 1,
        "sum": 0
    };

    for( let i=0; i<newArr.length; i++ ) {
        resultTracker["product"] *= parseInt(newArr[i], 10) ;
        resultTracker["sum"] += parseInt(newArr[i], 10) ;
    };

    return resultTracker["product"] - resultTracker["sum"];
};

const num1 = 234;
const num2 = 4421;

console.log( subtractProductSumOfDigits(num2) );