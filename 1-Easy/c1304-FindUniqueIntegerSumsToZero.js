// Easy
// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// Example 2:
// Input: n = 3
// Output: [-1,0,1]

// Example 3:
// Input: n = 1
// Output: [0]
 
// Constraints:
// 1 <= n <= 1000

// Runtime: 92 ms, faster than 30.64% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
// Memory Usage: 36.9 MB, less than 59.00% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
const findUniqueSumToZero = length => {
   if( typeof length !== Number ) return console.log('Argument must be a number' );

   let finalArr = [];
   let i = Math.floor(length/2);
   while( finalArr.length < length-1 ) {
      finalArr.push(i, -i);
      i--;
   };

   if( finalArr.length !== length ) finalArr.push(0);

   console.log( finalArr );   
   return finalArr;

};

findUniqueSumToZero();
