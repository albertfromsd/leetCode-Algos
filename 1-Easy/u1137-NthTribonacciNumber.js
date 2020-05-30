// 1137 Easy
// https://leetcode.com/problems/n-th-tribonacci-number/

// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

// Example 1:
// Input: n = 4
// Output: 4

// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

// Example 2:
// Input: n = 25
// Output: 1389537

// Constraints:
// 0 <= n <= 37
// The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.


// Runtime: 64 ms, faster than 21.01% of JavaScript online submissions for N-th Tribonacci Number.
// Memory Usage: 32.7 MB, less than 100.00% of JavaScript online submissions for N-th Tribonacci Number.
function tribonacci( index ) {
    if( index < 0 ) return null;

    let tribTracker = 
        {
            0: 0,
            1: 1,
            2: 1,
        };

    if( index < 3 ) return tribTracker[index];

    let i = 3;
    while( i <= index ) {
        tribTracker[i] = tribTracker[i-1] + tribTracker[i-2] + tribTracker [i-3];

        i++;
    };

    return tribTracker[index];
};

tribonacci( 25 );


// time limit exceeded on leetcode.com, but functional on local computer
function tribonacciRecursive( index ) {
    if( index < 0 ) return 0;
    if( index < 2 ) return index;
    
    return ( tribonacciRecursive(index-1) + tribonacciRecursive(index-2) + tribonacciRecursive(index-3) );
};

// console.log( tribonacciRecursive( 4 ) );