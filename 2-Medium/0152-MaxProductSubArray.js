// 152 Med
// https://leetcode.com/problems/maximum-product-subarray/

// Given an integer array nums, find the contiguous subarray within an array 
// (containing at least one number) which has the largest product.

// Example 1:
// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


// [ not working ]
function maxProductSubArray( arr ) {
   
   let maxProduct = arr[0];
   for( let i=0; i<arr.length; i++ ) {
      let tempProduct = arr[i];
      for( let j=i+1; j<arr.length; j++ ) {
         console.log( {i, j, tempProduct, maxProduct} );
         if( arr[j]*tempProduct > tempProduct ) tempProduct = arr[j]*tempProduct;
         else break;
      };
      maxProduct = Math.max( maxProduct, tempProduct );
   };

   console.log( maxProduct );
   return maxProduct;
};

function maxProductSubArray2( arr ) {
   // thinking of using the sliding window technique to account for multiple negative numbers (arr7);
   // loop through entire array and see if there are any 0s 
   // also check for even number of negatives
   // if even number and no 0s, multiply entire array
   // if a single 0 with no negatives, compare the product of both sides of the 0
   // if there is an odd number of negatives, check the products of the non-zeros and non-single negative stretches
};

const arr1 = [2,3,-2,4];
const arr2 = [-2,0,-1];
const arr3 = [-2];
const arr4 = [-3,-1,-1];
const arr5 = [-1,-1];
const arr6 = [0,2];
const arr7 = [-2,3,-4];

maxProductSubArray( arr1 );
maxProductSubArray( arr2 );
maxProductSubArray( arr3 );
maxProductSubArray( arr4 );
maxProductSubArray( arr5 );
maxProductSubArray( arr6 );
maxProductSubArray( arr7 );