// 66

// https://leetcode.com/problems/plus-one/

// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Runtime: 68 ms, faster than 18.91% of JavaScript online submissions for Plus One.
// Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions for Plus One.


function plusOne( arr ) {

    arr[arr.length-1] += 1;
    for( let i=arr.length-1; i>=0; i-- ) {
        if( arr[i] < 10 ) return arr;
        if( arr[i] >= 10 ) {
            if( i === 0 ) {
                arr.unshift( Math.floor( arr[i]/10 ) );
                arr[i] = arr[i] % 10;
                arr[i+1] = arr[i+1] % 10;
            } else {
                arr[i-1] +=1;
                arr[i] = arr[i] % 10;
            };
        };
        
    };
    return arr;
};

const arr1 = [9];
const arr2 = [9, 9];
const arr3 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
plusOne( arr2 );