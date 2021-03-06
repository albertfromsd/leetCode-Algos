// Medium
// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

// There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

 

// Example 1:

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
// Example 2:

// Input: cardPoints = [2,2,2], k = 2
// Output: 4
// Explanation: Regardless of which two cards you take, your score will always be 4.
// Example 3:

// Input: cardPoints = [9,7,7,9,7,7,9], k = 7
// Output: 55
// Explanation: You have to take all the cards. Your score is the sum of points of all cards.
// Example 4:

// Input: cardPoints = [1,1000,1], k = 1
// Output: 1
// Explanation: You cannot take the card in the middle. Your best score is 1. 
// Example 5:

// Input: cardPoints = [1,79,80,1,1,1,200,1], k = 3
// Output: 202
 

// Constraints:
// 1 <= cardPoints.length <= 10^5
// 1 <= cardPoints[i] <= 10^4
// 1 <= k <= cardPoints.length

function findMax( arr, k ) {
    if( k === arr.length ) return arr.reduce( (acc, cum) => acc + cum );

    let windowSum = 0;
    for( let i=0; i<k; i++ ) windowSum += arr[i];
    
    let max = windowSum;
    let l = 0;
    let r = k-1;
    let c = 0;
    while( r !== arr.length-1 ) {
        if( l < 0 ) l = arr.length-1;
        if( r < 0 ) r = arr.length-1;
        
        windowSum = windowSum - arr[r] + arr[l];
        console.log( {max, windowSum, l, r} );
        max = Math.max( windowSum, max );


        if( r === arr.length-1) break;
        l--;
        r--;
        c++;
    };
    console.log( {max} );
    return max;
};

const arr1 = [1,2,3,4,5,6,1], k1 = 3;
const arr2 = [2, 2, 2], k2 = 2;
const arr3 = [9,7,7,9,7,7,9], k3 = 7;
const arr4 = [1,1000,1], k4 = 1;
const arr5 = [1,79,80,1,1,1,200,1], k5 = 3;
const arr6 = [100,40,17,9,73,75], k6 = 3;

findMax( arr6, k6 );