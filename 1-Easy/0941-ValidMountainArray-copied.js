// 941 Easy
// https://leetcode.com/problems/valid-mountain-array/

// Given an array A of integers, return true if and only if it is a valid mountain array.
// Recall that A is a mountain array if and only if:
// A.length >= 3
// There exists some i with 0 < i < A.length - 1 such that:
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]


// Example 1:
// Input: [2,1]
// Output: false

// Example 2:
// Input: [3,5,5]
// Output: false

// Example 3:
// Input: [0,3,2,1]
// Output: true

function validMountain( numsArr ) {
    let n = numsArr.length;
    let i = 0;
    let j = n-1;

    while( i+1 < n && numsArr[i] < numsArr[i+1] ) i++;
    while( j > 0 && numsArr[j-1] > numsArr[i+1] ) j--;
    while( j > 0 && numsArr[j-1] > numsArr[j] ) j--;

    return i>0 && i==j && j<n-1;
};

const arr1 = [2, 1];
const arr2 = [3, 5, 5];
const arr3 = [0, 3, 2, 1];

console.log( validMountain(arr3) );