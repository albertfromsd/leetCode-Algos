// 27 Easy
//  https://leetcode.com/problems/remove-element/

// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example 1:
// Given nums = [3,2,2,3], val = 3,
// Your function should return length = 2, with the first two elements of nums being 2.
// It doesn't matter what you leave beyond the returned length.

// Example 2:
// Given nums = [0,1,2,2,3,0,4,2], val = 2,
// Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
// Note that the order of those five elements can be arbitrary.
// It doesn't matter what values are set beyond the returned length.

// Clarification:
// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
// Internally you can think of this:
// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeElement(nums, val);
// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }


// Runtime: 60 ms, faster than 47.98% of JavaScript online submissions for Remove Element.
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Remove Element.
function removeElement( arr, target ) {

    let i = 0;
    while( i < arr.length ) {
        if( arr[i] == target ) {
            // O(n - (arr.length-i) ) time everytime you splice
            arr.splice( i, 1 );
            continue;
        }
        i++;
    };

    return arr.length;
};

const arr1 = [3, 2, 2, 3]
console.log( removeElement( arr1, 3 ) );




// doesn't return the expected output
function removeElement1( arr, target ) {

    let i = 0;
    let count = 0;
    while( i < arr.length ) {
        if( arr[i] == target ) {
            count++;
        }
        i++;
    };

    // how to type coerce arr.length to an integer?
    // bc its passed in by reference as explained above, arr.length returns the first # of elements in the input array
    return (arr.length+0) - count;
};


 
