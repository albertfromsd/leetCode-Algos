// Medium
// https://leetcode.com/problems/max-consecutive-ones-iii/

// Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

// Return the length of the longest (contiguous) subarray that contains only 1s. 

// Example 1:
// Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
// Output: 6
// Explanation: 
// [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.

// Example 2:
// Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
// Output: 10
// Explanation: 
// [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.

// Note:
// 1 <= A.length <= 20000
// 0 <= K <= A.length
// A[i] is 0 or 1 

const maxConsecutiveOnes = ( arr, k ) => {

   let oneTracker = [];
   let start = arr[0];
   let sameCount = 0;
   let countingOnes = true;
   for( let i=0; i<arr.length; i++ ) {
      if( arr[i] === 1 ) {
         if( countingOnes===false && sameCount>0 ) {
            oneTracker.push( sameCount );
            sameCount = 0;
         };

         sameCount++;
         countingOnes = true;
      } else {
         if( countingOnes===true && sameCount>0 ) {
            oneTracker.push( sameCount );
            sameCount = 0;
         };
         
         sameCount++;
         countingOnes = false;
      };

      if( i===arr.length-1 ) oneTracker.push( sameCount );
   };

   console.log( {oneTracker} );
   console.log( {start} );
   // oneTracker stores alternating lengths of 0s and 1s
   // array is deciphered using the start variable, storing the first element ( 0 or 1 )

   // loop through, add 1 or 2 to each set of 1s, storing the resulting max along the way
   // if the gap of the 0 is 1 or 2, there is a max-value comparison between both sides of the 0

   let max = 0;
   let pointsLeft = k;
   for( let i=0; i<oneTracker.length; i++ ) {
      if( i%2 === 0 ) {
         
      } else {

      }
   };


};

const arr1 = [1,1,1,0,0,0,1,1,1,1,0];
const arr2 = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];

maxConsecutiveOnes( arr1 );
// maxConsecutiveOnes( arr2 );