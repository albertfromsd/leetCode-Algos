// Medium
// https://leetcode.com/problems/jump-game/

// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 
// Constraints:
// 1 <= nums.length <= 3 * 10^4
// 0 <= nums[i][j] <= 10^5


// Runtime: 64 ms, faster than 98.91% of JavaScript online submissions for Jump Game.
// Memory Usage: 39.8 MB, less than 15.92% of JavaScript online submissions for Jump Game.
const jumpGame = nums => {
   console.time( 'jumpGame' );
   
   if( nums.length === 1 ) return true;
   if( nums[0] < 1 ) return false;

   function counter( targetIndex ) {
      if( targetIndex < 1 ) return true;
      
      for( let i=targetIndex-1; i>=0; i-- ) {
         console.log( { i, 'nums[i]':nums[i], targetIndex } );
         
         if( nums[i] >= targetIndex-i ) {
            if( i === 0 ) return true;
            else return counter( i );
         };
      };
      return false;
   };

   console.timeEnd( 'jumpGame' );
   return counter( nums.length-1 );
};


const nums1 = [2,3,1,1,4]; // true
const nums2 = [3,2,1,0,4]; // false
const nums3 = [0]; // true
const nums4 = [0,2,3]; // false
const nums5 = [2,0,0]; // true
const nums6 = [2,5,0,0]; // true
const nums7 = [3,0,8,2,0,0,1]; // true
const nums8 = 
   // [0,1,2,3,4,5,6,7,8,9,0,1]
      [5,9,3,2,1,0,2,3,3,1,0,0]; // true
console.log( jumpGame( nums8 ) );