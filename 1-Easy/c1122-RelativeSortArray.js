// 1122 Easy
// https://leetcode.com/problems/relative-sort-array/

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, 
// and all elements in arr2 are also in arr1.
// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
// Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
 
// Constraints:
// arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// Each arr2[i] is distinct.
// Each arr2[i] is in arr1.


// Runtime: 76 ms, faster than 78.87% of JavaScript online submissions for Relative Sort Array.
// Memory Usage: 37 MB, less than 47.66% of JavaScript online submissions for Relative Sort Array.
function relativeSort( arr1, arr2 ) {
   let newArr = [];
   for( let i=0; i<arr2.length; i++ ) {
      
      while( arr1.indexOf(arr2[i]) !== -1 ) {
         let numIndex = arr1.indexOf(arr2[i]);
         newArr.push( arr1[numIndex] )
         arr1[numIndex] = false;
      };
   };

   const arr1leftover = arr1.filter( val => val !== false );
   const finalArr = newArr.concat( arr1leftover.sort((a,b) => a-b) );

   return finalArr;
};

const arr1 = [2,3,1,3,2,4,6,7,9,2,19];
const arr2 = [2,1,4,3,9,6];

relativeSort( arr1, arr2 );