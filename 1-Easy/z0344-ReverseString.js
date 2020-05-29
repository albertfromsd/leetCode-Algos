// 344 Easy
// https://leetcode.com/problems/reverse-string

// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


// Runtime: 92 ms, faster than 99.56% of JavaScript online submissions for Reverse String.
// Memory Usage: 42.5 MB, less than 100.00% of JavaScript online submissions for Reverse String.
function ReverseStringArray(arr) {
    for( let i=0; i<Math.floor(arr.length/2); i++ ) {
        let temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    };

    return arr;
};

const arr1 = ["a", "b", "c", "d", "e"];

console.log(ReverseStringArray(arr1));