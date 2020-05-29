// 1365 Easy
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Example 2:
// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]

// Example 3:
// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

// Runtime: 72 ms, faster than 87.82% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
// Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.

function numsSmallerThanCurrent(arr) {
    let newArr = [];
    let count = 0;

    for( let i=0; i<arr.length; i++ ) {
        for( let j=0; j<arr.length; j++ ) {
            if( arr[i] > arr[j] ) {
                count += 1;
            };
        };
        newArr.push(count);
        count = 0;
    };

    return newArr;
};

const arr0 = [8, 1, 2, 2, 3];
const arr1 = [6, 5, 4, 8];
const arr2 = [7, 7, 7, 7];

console.log( numsSmallerThanCurrent(arr2) );