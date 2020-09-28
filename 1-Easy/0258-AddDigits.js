// Easy
// https://leetcode.com/problems/add-digits/

// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:
// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?


// Runtime: 100 ms, faster than 43.28% of JavaScript online submissions for Add Digits.
// Memory Usage: 40.7 MB, less than 5.14% of JavaScript online submissions for Add Digits.
function addDigits( num ) {
    let finalNum = num;
    
    while( finalNum > 9 ) {
        let numStr = finalNum.toString();
        let tempNum = 0;
        for( const num of numStr ) {
            tempNum += +num;
        };

        finalNum = tempNum;
    }
    console.log( {finalNum} );
    return finalNum;
};

const num1 = 38;
const num2 = 137262;

addDigits( num2 );