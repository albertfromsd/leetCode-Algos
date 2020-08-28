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



// Runtime: 504 ms, faster than 5.66% of JavaScript online submissions for Simplified Fractions.
// Memory Usage: 43.4 MB, less than 30.19% of JavaScript online submissions for Simplified Fractions.
function simplifiedFractions( num ) {

   let finalArr = [];

   for( let i=num; i>1; i-- ) {
      for( let j=1; j<num; j++ ) {
         if( ( j>1 && i%j === 0 ) || j-i >= 0 ) continue;

         let tempI = i, tempJ = j, gcd = findGCD( j, i );
         if( gcd > 1 ) {
            tempI = i/gcd;
            tempJ = j/gcd;
         };

         let tempStr = `${tempJ}/${tempI}`;
         if( finalArr.indexOf( tempStr ) === -1 ) finalArr.push( tempStr );
      };
   };

   function findGCD( x, y ) {
      if( (typeof x !== 'number') || (typeof y !== 'number') ) return false;
         x = Math.abs(x);
         y = Math.abs(y);
      while(y) {
         var t = y;
         y = x % y;
         x = t;
      }
      return x;
   }

   console.log( finalArr );
   return finalArr;
};
// 6 should output ["1/2","1/3","1/4","1/5","1/6","2/3","2/5","3/4","3/5","4/5","5/6"]
simplifiedFractions( 6 )
