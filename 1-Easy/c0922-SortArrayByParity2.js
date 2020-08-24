// Easy
// https://leetcode.com/problems/sort-array-by-parity-ii/

// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
// You may return any answer array that satisfies this condition.

// Example 1:
// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
 
// Note:
// 2 <= A.length <= 20000
// A.length % 2 == 0
// 0 <= A[i] <= 1000


// Runtime: 104 ms, faster than 89.45% of JavaScript online submissions for Sort Array By Parity II.
// Memory Usage: 44.8 MB, less than 11.00% of JavaScript online submissions for Sort Array By Parity II.
const sortArray = arr => {
   const oddsArr = arr.filter( val => val%2 !== 0 );
   const evensArr = arr.filter( val => val%2 === 0 );

   const newArr = [];
   let i = 0;
   while( oddsArr.length || evensArr.length ) {
      if( i%2 === 0 ) {
         newArr.push( evensArr.pop() );
      } else {
         newArr.push( oddsArr.pop() );
      };

      i++;
   };

   console.log( newArr );
   return newArr;
};

const nums1 = [4,2,5,7];

sortArray( nums1 );