// 1
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Runtime: 112 ms, faster than 34.31% of JavaScript online submissions for Two Sum.
// Memory Usage: 34.8 MB, less than 49.59% of JavaScript online submissions for Two Sum.

var twoSum = function(arr, target) {
    for(let i=0; i<arr.length; i++) {
        let j = i+1
        while( j<arr.length ) {
            if( ( arr[i] + arr[j] ) == target ) {
                return [i, j]
            }
            j++
        }
    }
    return "Not found"
};

const arr1 = [0, 3, -2, 4, 5, 2, 1];
const arr2 = [-1, -2, -3, -4, -5];

console.log( twoSum(arr2, -8) );