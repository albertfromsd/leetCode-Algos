// 1397 Easy
// https://leetcode.com/problems/find-lucky-integer-in-an-array/

// Given an array of integers arr, a lucky integer is 
// an integer which has a frequency in the array equal to its value.
// Return a lucky integer in the array. 
// If there are multiple lucky integers return the largest of them. 
// If there is no lucky integer return -1.

 

// Example 1:
// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

// Example 2:
// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

// Example 3:
// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.

// Example 4:
// Input: arr = [5]
// Output: -1

// Example 5:
// Input: arr = [7,7,7,7,7,7,7]
// Output: 7
 

// Constraints:
// 1 <= arr.length <= 500
// 1 <= arr[i] <= 500


// Runtime: 68 ms, faster than 35.93% of JavaScript online submissions for Find Lucky Integer in an Array.
// Memory Usage: 37.1 MB, less than 100.00% of JavaScript online submissions for Find Lucky Integer in an Array.
function luckyInt( arr ) {
    let intObj = {};

    for( let i=0; i<arr.length; i++ ) {
        if( arr[i] - ( intObj[arr[i]] || 0 ) > arr.length ) continue;
        intObj[arr[i]] = ( intObj[arr[i]] || 0 ) + 1;
    };

    let luckyArr = [];
    for( let prop in intObj ) {
        if( intObj[prop] == prop ) luckyArr.push( prop );
    };

    if( luckyArr.length ) return Math.max( ...luckyArr );
    else return -1;
};

const arr1 = [2,2,2,3,3];
const arr2 = [1,2,2,3,3,3];

console.log( luckyInt( arr2 ) );