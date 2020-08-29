// Medium
// https://leetcode.com/problems/simplified-fractions/

// Given an integer n, return a list of all simplified fractions between 0 and 1 (exclusive) 
// such that the denominator is less-than-or-equal-to n. The fractions can be in any order.

// Example 1:
// Input: n = 2
// Output: ["1/2"]
// Explanation: "1/2" is the only unique fraction with a denominator less-than-or-equal-to 2.

// Example 2:
// Input: n = 3
// Output: ["1/2","1/3","2/3"]

// Example 3:
// Input: n = 4
// Output: ["1/2","1/3","1/4","2/3","3/4"]
// Explanation: "2/4" is not a simplified fraction because it can be simplified to "1/2".

// Example 4:
// Input: n = 1
// Output: []
 
// Constraints:
// 1 <= n <= 100


// Runtime: 112 ms, faster than 92.45% of JavaScript online submissions for Simplified Fractions.
// Memory Usage: 42.7 MB, less than 77.36% of JavaScript online submissions for Simplified Fractions.
function simplifiedFractions( num ) {
   const findGCD = ( x, y ) => x===0 ? y : findGCD( y%x, x );

   let finalArr = [];

   for( let i=1; i<num; i++ ) {
      for( let j=i+1; j<=num; j++ ) {
         if( findGCD( j, i ) === 1 ) finalArr.push( `${i}/${j}` );
      };
   };

   console.log( finalArr );
   return finalArr;
};


// 6 should output ["1/2","1/3","1/4","1/5","1/6","2/3","2/5","3/4","3/5","4/5","5/6"]
simplifiedFractions( 6 )
