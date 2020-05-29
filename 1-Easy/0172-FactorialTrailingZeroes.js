// 172 Easy
// https://leetcode.com/problems/factorial-trailing-zeroes/

// Given an integer n, return the number of trailing zeroes in n!.

// Example 1:
// Input: 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Example 2:
// Input: 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

// Note: Your solution should be in logarithmic time complexity.


// Runtime: 68 ms, faster than 43.49% of JavaScript online submissions for Factorial Trailing Zeroes.
// Memory Usage: 36 MB, less than 25.00% of JavaScript online submissions for Factorial Trailing Zeroes.

// number of 0s depends on the number of multiples of 5s in the factorial
// every multiple of 5 results in one 0
// if the num/5 is greater than 5, repeat the process to get additional multiples of 5 until num is less than 5
function factorialTrailingZeroes ( num ) {
    let zeroCount = 0;
    while( num >= 5 ) {
        num = Math.floor( num/5 );
        zeroCount += num;
    };

    return zeroCount;
}

console.log( factorialTrailingZeroes( 30 ) );