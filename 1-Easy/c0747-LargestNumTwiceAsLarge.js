// Easy
// https://leetcode.com/problems/largest-number-at-least-twice-of-others/

// In a given integer array nums, there is always exactly one largest element.
// Find whether the largest element in the array is at least twice as much as every other number in the array.
// If it is, return the index of the largest element, otherwise return -1.

// Example 1:
// Input: nums = [3, 6, 1, 0]
// Output: 1
// Explanation: 6 is the largest integer, and for every other number in the array x,
// 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 
// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: -1
// Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
 
// Note:
// nums will have a length in the range [1, 50].
// Every nums[i] will be an integer in the range [0, 99].


// Runtime: 80 ms, faster than 57.60% of JavaScript online submissions for Largest Number At Least Twice of Others.
// Memory Usage: 36.7 MB, less than 47.08% of JavaScript online submissions for Largest Number At Least Twice of Others.
const findLargestDouble = nums => {

   let max = -Infinity;
   let maxI;
   let secondMax = -Infinity;
   let secondMaxI;

   for( let i=0; i<nums.length; i++ ) {
      if( 
         nums[i] > max 
         && nums[i] > secondMax 
      ) {
         secondMax = max;
         secondMaxI = maxI;
         max = nums[i];
         maxI = i;
      } else if( nums[i] > secondMax ) {
         secondMax = nums[i];
         secondMaxI = i;
      };
   };

   console.log( {max, secondMax} );
   if( max >= secondMax*2 ) return maxI;
   else return -1;

};

const nums1 = [3, 6, 1, 0]; // 1
const nums2 = [1, 2, 3, 4]; // -1
const nums3 = [0, 0, 3, 2];

console.log( findLargestDouble(nums3) );