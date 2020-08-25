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


// Runtime: 80 ms, faster than 72.87% of JavaScript online submissions for Valid Mountain Array.
// Memory Usage: 39.9 MB, less than 34.60% of JavaScript online submissions for Valid Mountain Array.
const validMountainArray = numsArr => {
    console.time( 'validMountainArray' );
    let n = numsArr.length;
    let i = 0;
    let j = n-1;

    while( i+1 < n && numsArr[i] < numsArr[i+1] ) i++;
    while( 0 <= j-1 && numsArr[j] < numsArr[j-1] ) j--;

    console.timeEnd( 'validMountainArray' );
    return 0<i && i == j && j < n-1;
};


// Runtime: 120 ms, faster than 12.30% of JavaScript online submissions for Valid Mountain Array.
// Memory Usage: 38.9 MB, less than 84.14% of JavaScript online submissions for Valid Mountain Array.
const validMountainArray2 = A => {
   console.time( 'validMountainArray2' );
   if(A.length < 3) return false;
   
   let isDecreasing = false;
   let isIncreasing = false;

   for(let i = 1, j = 0; i < A.length; i++, j++){
       
       if(A[j] <= A[i] && !isDecreasing){
           isIncreasing = true;
           continue;
       }

       isDecreasing = true;

       if(A[j] <= A[i]) return false;

   }
   console.timeEnd( 'validMountainArray2' );
   return isDecreasing && isIncreasing;
};

// Runtime: 92 ms, faster than 34.48% of JavaScript online submissions for Valid Mountain Array.
// Memory Usage: 40.1 MB, less than 18.05% of JavaScript online submissions for Valid Mountain Array.
const validMountainArray3 = A => {
   console.time( 'validMountainArray3' );
   if (A.length < 3) return false;
   
   let prev = A[0];
   let index = 1;
   let increase = 0;
   let decrease = 0;
   
   while (prev < A[index]) {
       prev = A[index];
       increase++;
       index++;
   }
   
   while (prev > A[index]) {
       prev = A[index];
       decrease++;
       index++;
   }
   console.timeEnd( 'validMountainArray3' );
   return index === A.length && increase > 0 && decrease > 0;
};

const arr1 = [2, 1];
const arr2 = [3, 5, 5];
const arr3 = [0, 3, 2, 1];
const arr4 = [1,2,3,4,5,6,8,9,10,11,12,13,10];

console.log( validMountainArray(arr4) );