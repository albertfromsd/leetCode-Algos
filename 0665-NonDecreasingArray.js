// 0665
// https://leetcode.com/problems/non-decreasing-array/

// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

// Example 1:
// Input: nums = [4,2,3]
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

// Example 2:
// Input: nums = [4,2,1]
// Output: false
// Explanation: You can't get a non-decreasing array by modify at most one element.


// Constraints:
// 1 <= n <= 10 ^ 4
// - 10 ^ 5 <= nums[i] <= 10 ^ 5

function nonDecreasingArray(arr) {
    let decCount = 0;
    let numCheck;
    // maybe need pre/post numChecks

    for( let i=0; i<arr.length; i++ ) {
        if( arr[i+1] !== undefined && arr[i+1] > arr[i] ) {
            decCount += 1;
            numCheck = arr[i];
        };
        if( decCount > 1 ) {
            return false;
        };
    };

    // need code to check if numCheck can be changed to make everything increasing

};