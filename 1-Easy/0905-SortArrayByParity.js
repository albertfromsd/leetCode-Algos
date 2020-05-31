// 905 Easy
// https://leetcode.com/problems/sort-array-by-parity/

// Given an array A of non-negative integers, 
// return an array consisting of all the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.

// Example 1:
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

// Note:
// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000


// Runtime: 108 ms, faster than 19.62% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 40.5 MB, less than 8.00% of JavaScript online submissions for Sort Array By Parity.
function sortByParity( arr ) {
    let evensArr = [];
    let oddsArr = [];

    let i = 0;
    while( arr.length ) {
        if( arr[i] % 2 === 0 ) { 
            evensArr.push( ...arr.splice( i, 1 ) );
        } else {
            oddsArr.push( ...arr.splice( i, 1 ) );
        }
    }

    let newArr = [...evensArr, ...oddsArr ];
    return newArr;
};

const arr1 = [3,1,2,4];
console.log( sortByParity( arr1 ) );