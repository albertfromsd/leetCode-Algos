// Medium
// https://leetcode.com/problems/largest-number/

// Given a list of non negative integers, arrange them such that they form the largest number.

// Example 1:
// Input: [10,2]
// Output: "210"

// Example 2:
// Input: [3,30,34,5,9]
// Output: "9534330"

// Note: The result may be very large, so you need to return a string instead of an integer.

function largestNum( nums ) {

   let sortNums = nums.sort().reverse();
   for( let i=0; i<nums.length; i++ ) {
      let numTenI = nums.indexOf(nums[i]*10);
      if( numTenI !== -1 ) [ nums[i], nums[numTenI] ] = [ nums[numTenI], nums[i] ];
   };

   let finalNums = sortNums.join('');
   console.log( {sortNums, finalNums} );
   return finalNums;
};

const nums1 = [ 10, 2 ]; // 210
const nums2 = [ 3, 30, 34, 5, 9 ];
const nums3 = [ 0, 900, 72, 91, 1, 17, 68, 26 ];
const nums4 = [ 121, 12 ]; // 12121

largestNum( nums1 )
largestNum( nums2 )
largestNum( nums3 );