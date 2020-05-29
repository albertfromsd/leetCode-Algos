// 633 Easy
// https://leetcode.com/problems/sum-of-square-numbers/

// Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:
// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5      
 
// Example 2:
// Input: 3
// Output: False


// Runtime: 560 ms, faster than 5.97% of JavaScript online submissions for Sum of Square Numbers.
// Memory Usage: 68.9 MB, less than 33.33% of JavaScript online submissions for Sum of Square Numbers.
function sumOfSquareNums1( num ) {
    let squareTracker = {};

    function addToTracker( int ) {
        let i = 0;
        while( i <= Math.sqrt(int) ) {
            squareTracker[Math.pow( i, 2 )] = i; 

            i++;
        };
    };
    addToTracker( num );

    for( let key in squareTracker ) {
        if( (num - key) in squareTracker ) {
            console.log( true );
            return true;
        };
    };

    console.log( false );
    return false;

};

sumOfSquareNums1( 85 );