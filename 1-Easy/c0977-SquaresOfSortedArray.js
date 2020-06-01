// 977 Easy
// https://leetcode.com/problems/squares-of-a-sorted-array/

// Given an array of integers A sorted in non-decreasing order, 
// return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Example 2:
// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 
// Note:
// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.


// Runtime: 120 ms, faster than 68.30% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 43.4 MB, less than 62.96% of JavaScript online submissions for Squares of a Sorted Array.
function squareSortedArray( arr ) {
    let newArr = [];
    for( let i=0; i<arr.length; i++ ) {
        newArr.push( Math.pow( arr[i], 2) );
    };

    return newArr.sort( (a,b) => a-b );
};

const arr1 = [-4,-1,0,3,10];
const arr2 = [-7,-3,2,3,11];

console.log( squareSortedArray( arr2 ) );