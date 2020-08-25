// Easy
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

// Given an array arr, replace every element in that array with the greatest element 
// among the elements to its right, and replace the last element with -1.

// After doing so, return the array.
// Example 1:
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
 
// Constraints:
// 1 <= arr.length <= 10^4
// 1 <= arr[i] <= 10^5


// Runtime: 124 ms, faster than 56.64% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 40.2 MB, less than 41.87% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
const replaceWithLargestAfter1 = arr => {
   console.time( 'replaceWithLargestAfter1' );
   let maxTracker = [];
   for( let i=arr.length-1; i>=0; i-- ) {
      if( arr[i] > maxTracker[0] || !maxTracker.length ) maxTracker.unshift( arr[i] );
      else maxTracker.unshift( maxTracker[0] );
   };
   // console.log( maxTracker );
   
   for( let i=0; i<arr.length-1; i++ ) {
      arr[i] = maxTracker[i+1];
   };
   
   arr[arr.length-1] = -1;
   console.log( arr );
   console.timeEnd( 'replaceWithLargestAfter1' );
   return arr;
};

// Runtime: 1524 ms, faster than 5.01% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 44.1 MB, less than 15.30% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
const replaceWithLargestAfter2 = arr => {
   console.time( 'replaceWithLargestAfter2' );
   for( let i=0; i<arr.length-1; i++ ) {
      arr[i] = Math.max( ...arr.slice(i+1) );
   };
   arr[arr.length-1] = -1;
   console.timeEnd( 'replaceWithLargestAfter2' );
   return arr;
};


// Runtime: 108 ms, faster than 68.15% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 38.6 MB, less than 98.70% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
const replaceWithLargestAfter3 = arr => {
   console.time( 'replaceWithLargestAfter3' );
   
   let arrCopy = [ ...arr ];
   let arrLength = arrCopy.length;      
   let tempMax = arrCopy[arrLength-1];

   for( let i=arrLength-2; i>=0; i-- ) {
      let temp = tempMax;
      if( arr[i] > tempMax ) tempMax = arr[i];
      arrCopy[i] = Math.max( temp, arr[i+1] );
   };

   arrCopy[arrLength-1] = -1;
   console.log( arrCopy );
   console.timeEnd( 'replaceWithLargestAfter3' );
   return arrCopy;
};

const arr1 = [17,18,5,4,6,1]; // [18,6,6,6,1,-1]
// replaceWithLargestAfter1( arr1 );
// replaceWithLargestAfter2( arr1 );
// replaceWithLargestAfter3( arr1 );