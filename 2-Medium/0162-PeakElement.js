// 162 Med
// https://leetcode.com/problems/find-peak-element/

// A peak element is an element that is greater than its neighbors.
// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
// You may imagine that nums[-1] = nums[n] = -∞.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 1 or 5 
// Explanation: Your function can return either index number 1 where the peak element is 2, 
//              or index number 5 where the peak element is 6.

// Follow up: Your solution should be in logarithmic complexity.

// [ 2020-05-29 @ 1300 ]
// Runtime: 68 ms, faster than 22.15% of JavaScript online submissions for Find Peak Element.
// Memory Usage: 36.1 MB, less than 12.50% of JavaScript online submissions for Find Peak Element.
function findPeakElement( arr ) {

    for( let i=0; i<arr.length; i++ ) {
        if( ( arr[i-1] === undefined ? -Infinity : arr[i-1] ) < arr[i]
                &&
            ( arr[i+1] === undefined ? -Infinity : arr[i+1] ) < arr[i] ) {
                return i;
        };
    };

    return null;
};

const arr1 = [1,2,3,1];
const arr2 = [1,2,1,3,5,6,4];

console.log( findPeakElement( arr1 ) );