// Medium
// https://leetcode.com/problems/maximum-of-absolute-value-expression/

// Given two arrays of integers with equal lengths, return the maximum value of:
// |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|

// where the maximum is taken over all 0 <= i, j < arr1.length.

// Example 1:
// Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
// Output: 13

// Example 2:
// Input: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
// Output: 20
 
// Constraints:
// 2 <= arr1.length == arr2.length <= 40000
// -10^6 <= arr1[i], arr2[i] <= 10^6



// Runtime: 7488 ms, faster than 42.86% of JavaScript online submissions for Maximum of Absolute Value Expression.
// Memory Usage: 41.6 MB, less than 40.00% of JavaScript online submissions for Maximum of Absolute Value Expression.
function maxAbsValue( arr1, arr2 ) {

   let maxReturn = -Infinity;
   for( let i=0; i<arr1.length; i++ ) {
      for( let j=0; j<arr2.length; j++ ) {
         let tempMax = Math.abs( arr1[i]-arr1[j] ) + Math.abs( arr2[i]-arr2[j] ) + Math.abs( i-j )
         maxReturn = Math.max( tempMax, maxReturn );
      };
   };
   // console.log( maxReturn );
   return maxReturn;

};

const arr1 = [1,2,3,4], arr2 = [-1,4,5,6];
const arr3 = [1,-2,-5,0,10], arr4 = [0,-2,-1,-7,-4];

// maxAbsValue( arr1, arr2 );
maxAbsValue( arr3, arr4 );