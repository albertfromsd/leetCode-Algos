// Easy
// https://leetcode.com/problems/move-zeroes/

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: [1, 2, 0, 0, 3, 0, 6]

// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


// Runtime: 80 ms, faster than 88.78% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 40.2 MB, less than 21.30% of JavaScript online submissions for Move Zeroes.
function moveZeroes(nums) {
    let numL = nums.length, zCount = 0;
    for( let i=0; i<numL; i++ ) {
        let num = nums[i];
        if( num === 0 || typeof(num) !== 'number' ) {
            zCount++;
        } else if( zCount > 0 ) {
            nums[i-zCount] = nums[i];
            nums[i] = 0;
        };
    };

    return nums;
};

let a1 = [0, 1, 0, 3, 12]; // [1, 3, 12, 0, 0];
let a2 = [1, 2, 0, 0, 3, 0, 6]; // [1, 2, 3, 6, 0, 0, 0];
let a3 = [1, 2, 0, 0, null, 3, 0, 6]; // [1, 2, 3, 6, 0, 0, 0];

console.log( moveZeroes(a3) );