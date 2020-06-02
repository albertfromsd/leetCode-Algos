// 1287 Easy
// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/

// Given an integer array sorted in non-decreasing order, 
// there is exactly one integer in the array that occurs more than 25% of the time.

// Return that integer.

// Example 1:
// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
 

// Constraints:
// 1 <= arr.length <= 10^4
// 0 <= arr[i] <= 10^5



// Runtime: 68 ms, faster than 49.09% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
// Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
function moreThanQuarter( arr ) {
    let freqTracker = {};

    for( let i=0; i<arr.length; i++ ) {
        if( (arr[i] === arr[i+1]) || !arr[i+1] ) {
            freqTracker[arr[i]] = ( freqTracker[arr[i]] || 0 ) + 1;
            
            if( freqTracker[arr[i]] > arr.length/4 ) return arr[i];
        } else {
            continue;
        };
    };
};

const arr1 = [1,2,2,6,6,6,6,7,10];

console.log( moreThanQuarter( arr1 ) );