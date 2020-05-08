// 371
// https://leetcode.com/problems/sum-of-two-integers

// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = -2, b = 3
// Output: 1

function SumOfTwoNumbers(a, b) {
    let sumA = 0;
    let sumB = 0;
    for( let i=1; i<=Math.abs(a); i++ ) {
        sumA += 1;
    };
    if( a < 0 ) {
        sumA *= -1;
    };
    
    for( let j=1; j<=Math.abs(b); j++ ) {
        sumB += 1;
    };
    if( b < 0 ) {
        sumB *= -1;
    };
    
    return sumA + sumB;
};

console.log( SumOfTwoNumbers(1, -1) );