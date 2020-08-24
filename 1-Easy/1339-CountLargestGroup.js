// Easy
// https://leetcode.com/problems/count-largest-group/

// Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 
// Return how many groups have the largest size.

// Example 1:
// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.

// Example 2:
// Input: n = 2
// Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.

// Example 3:
// Input: n = 15
// Output: 6

// Example 4:
// Input: n = 24
// Output: 5
 
// Constraints:
// 1 <= n <= 10^4

// Runtime: 88 ms, faster than 76.85% of JavaScript online submissions for Count Largest Group.
// Memory Usage: 38.9 MB, less than 57.41% of JavaScript online submissions for Count Largest Group.
const countLargestGroup = num => {
   if( num < 10 ) return num;

   let sumTracker = {
      1: [1],
      2: [2],
      3: [3],
      4: [4],
      5: [5],
      6: [6],
      7: [7],
      8: [8],
      9: [9],
   };

   let maxLength = 0;

   for( let i=10; i<=num; i++ ) {
      let sum = 0;
      let tempNum = i;
      while( tempNum > 0 ) {
         sum += tempNum % 10;
         tempNum = Math.floor(tempNum/10);
      };
      
      if( sumTracker[sum] ) sumTracker[sum].push( i );
      else sumTracker[sum] = [ i ];

      if( sumTracker[sum].length > maxLength ) {
         maxLength = sumTracker[sum].length;
      };
   };

   let count = 0;
   for (const sum in sumTracker) {
      if( sumTracker[sum].length === maxLength ) count++;
   }

   console.log( count );
   return count;
};

countLargestGroup(24);