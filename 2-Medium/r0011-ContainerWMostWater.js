// 0011 (Medium)
// https://leetcode.com/problems/container-with-most-water/

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.


// Example:
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

// Find shared max-minimum and draw a line across the lesser of the two bars' peaks
// things that matter: 
    // 1) The height of two highest numbers
    // 2) Indices of both highest numbers
    // 3) Values in between those indices
    // ***
    // Consider that an array can have both highest numbers in the beginning, and a bunch of smaller numbers at the end
    // Must compare those two values
    // ***
    // Does taking the average value of the array help?
    
// two pointer method

// Runtime: 72 ms, faster than 50.05% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 37.6 MB, less than 9.09% of JavaScript online submissions for Container With Most Water.
const containerWithMostWater = ( arr ) => {
    let max = 0, temp = 0, height = 0, p1 = 0, p2 = arr.length-1;
    
    while( p1 < p2 ) {
        if( arr[p1] < arr[p2] ) {
            height = arr[p1];
            p1++;
        } else {
            height = arr[p2];
            p2--;
        };
        temp = height*(p2-p1+1);
        max = temp > max 
            ? temp 
            : max;
    };
    return max;
}

const arr1 = [1,8,6,2,5,4,8,3,7];
const arr2 = [1,8,7,2,5,4,8,3,1];
const arr3 = [5,8,6,2,5,4,1,9,10];
const arr4 = [1, 1];

console.log( containerWithMostWater1( arr1 ) );