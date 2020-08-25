// Easy
// https://leetcode.com/problems/three-consecutive-odds/

// Given an integer array arr, 
// return true if there are three consecutive odd numbers in the array. 
// Otherwise, return false.
 
// Example 1:
// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.

// Example 2:
// Input: arr = [1,2,34,3,4,5,7,23,12]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.
 
// Constraints:
// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000

// Runtime: 76 ms, faster than 69.44% of JavaScript online submissions for Three Consecutive Odds.
// Memory Usage: 36.6 MB, less than 66.67% of JavaScript online submissions for Three Consecutive Odds.
const threeConsecutiveOdds = nums => {
   // if( nums.filter( num => num%2 !== 0 ).length < 3 ) return false;
   console.time( 'threeConsecutiveOdds' );
   
   let oddCount = 0;
   let i = 0;
   while( i < nums.length ) {
      if( nums[i]%2 !== 0 ) {
         oddCount++;
         if( oddCount === 3 ) return true;
      } else {
         oddCount = 0;
      };

      i++;
   };

   console.timeEnd( 'threeConsecutiveOdds' );
   return false;
};


const nums1 = [2,6,4,1];
const nums2 = [1,2,34,3,4,5,7,23,12];
const nums3 = [1, 1, 1];
console.log( threeConsecutiveOdds( nums3 ) );
