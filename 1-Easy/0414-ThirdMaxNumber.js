// 414 Easy
// https://leetcode.com/problems/third-maximum-number/

// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

// Example 1:
// Input: [3, 2, 1]

// Output: 1

// Explanation: The third maximum is 1.
// Example 2:
// Input: [1, 2]

// Output: 2

// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
// Input: [2, 2, 3, 1]

// Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.


// Runtime: 48 ms, faster than 97.56% of JavaScript online submissions for Third Maximum Number.
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for Third Maximum Number.

function ThirdMax(arr) {
    let max = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    if( arr.length === 1 ) {
        return arr[0];
    };

    if( arr.length === 2 ) {
        if( arr[0] > arr[1] ) {
            max = arr[0];
            max2 = arr[1];
        } else {
            max = arr[1];
            max2 = arr[0];
        };
        return max;
    };
    
    if( arr.length > 2 ) {
        for( let i=0; i<arr.length; i++ ) {
            if( arr[i] > max ) {
                max3 = max2;
                max2 = max;
                max = arr[i];
            };
        };
        for( let j=0; j<arr.length; j++ ) {
            if( arr[j] > max2 && arr[j] < max ) {
                max3 = max2;
                max2 = arr[j];
            };
        };
        for( let k=0; k<arr.length; k++ ) {
            if( arr[k] > max3 && arr[k] < max2 ) {
                max3 = arr[k];
            };
        };
        if( max2 === -Infinity || max3 === -Infinity ) {
            return max;
        };
    };
    
    return max3;
};

const arr1 = [2, 2, 3, 1];
const arr2 = [1, 2];
const arr3 = [2, 2, 4];
const arr4 = [3, 1, 2];
const arr5 = [1];
const arr6 = [3, 2, 1];

console.log( ThirdMax(arr1) );