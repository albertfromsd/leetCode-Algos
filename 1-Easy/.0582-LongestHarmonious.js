// Easy
// https://leetcode.com/problems/longest-harmonious-subsequence/

// We define a harmounious array as an array where the difference 
// between its maximum value and its minimum value is exactly 1.

// Now, given an integer array, you need to find the length 
// of its longest harmonious subsequence among all its possible subsequences.

// Example 1:

// Input: [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 

// Note: The length of the input array will not exceed 20,000.


// [ NOT WORKING 2020-08-14 ]
const findLHS = ( nums ) => {

   let start = 0, end = -1;
   let lhs = [ nums[0] ];

   let p1 = 1, p2 = 0;
   while( p1 <= nums.length-1 ) {
      

      p1++;
      p2++
   }

};

const nums1 = [1,3,2,2,5,2,3,7];