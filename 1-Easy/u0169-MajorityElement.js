// 169 Easy
// https://leetcode.com/problems/majority-element/

// Given an array of size n, find the majority element. 
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority 
// element always exist in the array.

// Example 1:
// Input: [3,2,3]
// Output: 3

// Example 2:
// Input: [2,2,1,1,1,2,2]
// Output: 2


// Runtime: 76 ms, faster than 22.50% of JavaScript online submissions for Majority Element.
// Memory Usage: 38.4 MB, less than 7.14% of JavaScript online submissions for Majority Element.
function majorityElement( arr ) {
    let tracker = {};

    for( let i=0; i<arr.length; i++ ) {
        tracker[arr[i]] = ( tracker[arr[i]] || 0 ) + 1;
        if( tracker[arr[i]] > arr.length/2 ) return arr[i];
    };
};