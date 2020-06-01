// 912 Medium
// https://leetcode.com/problems/sort-an-array/

// Given an array of integers nums, sort the array in ascending order.


// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
 

// Constraints:
// 1 <= nums.length <= 50000
// -50000 <= nums[i] <= 50000

// [ Cheating Method]
// Runtime: 92 ms, faster than 90.08% of JavaScript online submissions for Sort an Array.
// Memory Usage: 42.4 MB, less than 42.86% of JavaScript online submissions for Sort an Array.
function sortArrayCheating( arr ) {
    return arr.sort( (a,b) => a-b )
};


const arr1 = [5, 2, 3, 1];
console.log( sortArrayCheating(arr1) );


// manual method - TERRIBLE
// Runtime: 3692 ms, faster than 7.84% of JavaScript online submissions for Sort an Array.
// Memory Usage: 44.3 MB, less than 42.86% of JavaScript online submissions for Sort an Array.
function sortArray1( arr ) {
    let arrCopy = [...arr];
    let newArr = [];

    while( arrCopy.length ) {
        let tempMinIndex = arrCopy.indexOf( Math.min(...arrCopy) );
        newArr.push( ...arrCopy.splice( tempMinIndex, 1 ) );
    };

    console.log( newArr );
    return newArr;
};

// sortArray1(arr1);