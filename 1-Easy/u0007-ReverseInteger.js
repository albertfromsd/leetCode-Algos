// 7 Easy
// https://leetcode.com/problems/reverse-integer/

// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


// Runtime: 92 ms, faster than 22.56% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 37.4 MB, less than 5.21% of JavaScript online submissions for Reverse Integer.
const reverse = num => {
    if( Math.abs(num) > Math.pow(2, 31) ) return 0;

    let string = num.toString();
    let newString = "";
    
    for (let i=string.length-1; i>=0; i--) {
        if( string[i] === '-') {
            newString = string[i] + newString;
        } else {
            newString += string[i];
        };
    };

    let newNum = parseInt( newString );
    if( Math.abs( newNum ) > Math.pow(2, 31) ) return 0;
    else return newNum;
};

const num1 = 123;
const num2 = -321;
const num3 = 1534236469;
const num4 = 1563847412;

console.log( reverse( num4 ) ); 