// Given an integer array, you need to find one continuous subarray that 
// if you only sort this subarray in ascending order, 
// then the whole array will be sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

// Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

// Note:
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=.




// Runtime: 84 ms, faster than 92.37% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
// Memory Usage: 39.8 MB, less than 62.74% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
const findUnsortedSubArray = ( arr ) => {

   let p1 = 0, p2 = arr.length-1;
   let end = -1, start = 0;
   let min  = Infinity, max = -Infinity;
    
   while( p2 >= 0 ) {
      arr[p1] >= max 
         ? max = arr[p1] 
         : end = p1;
      arr[p2] <= min 
         ? min = arr[p2] 
         : start = p2;
      
      p1++;
      p2--;
   }
    
   return end-start+1;

};

const arr1 = [ 2, 6, 4, 8, 10, 9, 15 ];

console.log( findUnsortedSubArray( arr1 ) );