// Easy
// https://leetcode.com/problems/contains-duplicate-ii/

// Given an array of integers and an integer k, 
// find out whether there are two distinct indices i and j in the array 
// such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


// Runtime: 88 ms, faster than 71.89% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 44.7 MB, less than 17.06% of JavaScript online submissions for Contains Duplicate II.
function containsDupes( nums, k ) {
   let map = {}

   for( let i=0; i<nums.length; i++ ) {
      let num = nums[i];
      if( map[num] !== undefined && Math.abs( i - map[num] ) <= k ) return true;
      map[num] = i;
   };

   return false;
};


// Runtime: 5044 ms, faster than 5.07% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 38.3 MB, less than 86.02% of JavaScript online submissions for Contains Duplicate II.
function containsDupes2( nums, k ) {
   for( let i=0; i<nums.length; i++ ) {
      for( let j=i+1; j<=i+k; j++ ) {
         if( nums[j] === nums[i] ) return true;
      };
   };

   return false;
};

const nums1 = [1, 2, 3, 1];
const nums2 = [1, 0, 1, 1];
const nums3 = [1, 2, 3, 1, 2, 3];

console.log( containsDupes2(nums3, 2) );