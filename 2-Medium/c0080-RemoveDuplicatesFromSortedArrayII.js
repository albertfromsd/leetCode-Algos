// Medium
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

// Given a sorted array nums, 
// remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Given nums = [1,1,1,2,2,3],
// Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It doesn't matter what you leave beyond the returned length.

// Example 2:
// Given nums = [0,0,1,1,1,1,2,3,3],
// Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.
// It doesn't matter what values are set beyond the returned length.


// Clarification:
// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);
// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }



// Runtime: 84 ms, faster than 85.29% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
// Memory Usage: 38.8 MB, less than 28.06% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
function removeDupes( nums ) {
   let i = nums.length-1;
   while( i >= 2 ) {
      if( nums[i] === nums[i-1] && nums[i] === nums[i-2] ) nums.splice( i, 1 );
      i--;
   };
   // console.log( nums );
   // console.log( nums.length );
   return nums.length;
};

const nums1 = [1,1,1,2,2,3];
const nums2 = [0,0,1,1,1,1,2,3,3];

console.log( removeDupes( nums1 ) );
console.log( removeDupes( nums2 ) );

// console.log( removeDupes2( nums1 ) );
// console.log( removeDupes2( nums2 ) );
// console.log( removeDupes2( nums3 ) );