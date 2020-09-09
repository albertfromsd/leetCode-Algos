// Medium
// https://leetcode.com/problems/single-number-ii/

// Given a non-empty array of integers, every element appears three times 
// except for one, which appears exactly once. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. 
// Could you implement it without using extra memory?

// Example 1:
// Input: [2,2,3,2]
// Output: 3
// Example 2:

// Input: [0,1,0,1,0,1,99]
// Output: 99


// Runtime: 68 ms, faster than 98.36% of JavaScript online submissions for Single Number II.
// Memory Usage: 38.8 MB, less than 30.96% of JavaScript online submissions for Single Number II.
function singleNumber( nums ) {
    
    let map = {};
    let len = nums.length;
    for( let i=0; i<len; i++ ) {
        let num = nums[i];
        map[num] = map[num]+1 || 1;
    };

    for( const num in map ) {
        if( map[num] === 1 ) return num;
    };
};

const nums1 = [2,2,3,2];
const nums2 = [0,1,0,1,0,1,99];

console.log( singleNumber( nums2 ) );