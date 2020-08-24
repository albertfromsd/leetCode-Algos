// 1207 Easy
// https://leetcode.com/problems/unique-number-of-occurrences/

// Given an array of integers arr, write a function that 
// returns true if and only if the number of occurrences of each value in the array is unique.

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:
// Input: arr = [1,2]
// Output: false

// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

// Constraints:
// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000


// Runtime: 64 ms, faster than 97.35% of JavaScript online submissions for Unique Number of Occurrences.
// Memory Usage: 37.2 MB, less than 32.28% of JavaScript online submissions for Unique Number of Occurrences.
const findUniqueNums = nums => {
   let numCounter = {};
   nums.forEach( num => {
      numCounter[num] = numCounter[num]+1 || 1 
   });

   let countTracker = {};
   for( const num in numCounter ) {
      if( numCounter.hasOwnProperty(num) ) {

         if( !countTracker[numCounter[num]] ) {
            countTracker[numCounter[num]] = true;
         } else {
            return false;
         };
      };
   };
   return true;
};

const nums1 = [1,2,2,1,1,3]; // true
const nums2 = [1,2]; // false
const nums3 = [-3,0,1,-3,1,1,1,-3,10,0]; // true

console.log( findUniqueNums(nums1) );
console.log( findUniqueNums(nums2) );
console.log( findUniqueNums(nums3) );