// Runtime: 112 ms, faster than 34.31% of JavaScript online submissions for Two Sum.
// Memory Usage: 34.8 MB, less than 49.59% of JavaScript online submissions for Two Sum.

var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        let j = i+1
        while( j<nums.length ) {
            if( ( nums[i] + nums[j] ) == target ) {
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