// 189 Easy
// https://leetcode.com/problems/rotate-array/

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
 

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:
// 1 <= nums.length <= 2 * 10^4
// It's guaranteed that nums[i] fits in a 32 bit-signed integer.
// k >= 0



// Runtime: 80 ms, faster than 61.25% of JavaScript online submissions for Rotate Array.
// Memory Usage: 36.8 MB, less than 5.26% of JavaScript online submissions for Rotate Array.
function rotateArray( arr, k ) {

    let tempArr = arr.splice( arr.length-k, k);
    arr.splice( 0, 0, ...tempArr );

    return arr;
};

// Runtime: 104 ms, faster than 24.83% of JavaScript online submissions for Rotate Array.
// Memory Usage: 37.2 MB, less than 5.26% of JavaScript online submissions for Rotate Array.
function rotateArray1( arr, k ) {
    for( let i=arr.length-1; i>arr.length-1-k; i-- ) {
        arr.unshift( arr.pop() );
    };

    return arr;
};

const arr1 = [1,2,3,4,5,6,7];
const arr2 = [-1,-100,3,99];

console.log( rotateArray1( arr1, 3 ) );