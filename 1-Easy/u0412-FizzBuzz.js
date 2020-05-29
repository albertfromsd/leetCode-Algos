// 412 Easy
// https://leetcode.com/problems/fizz-buzz/

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]


// Runtime: 64 ms, faster than 63.62% of JavaScript online submissions for Fizz Buzz.
// Memory Usage: 37.7 MB, less than 5.00% of JavaScript online submissions for Fizz Buzz.
function FizzBuzz(n) {
    let newArr=[];
    for( let i=1; i<=n; i++ ) {
        if( i % 15 === 0 ) {
            newArr.push("FizzBuzz");
        } else if( i % 3 === 0 ) {
            newArr.push("Fizz");
        } else if( i % 5 === 0 ) {
            newArr.push("Buzz");
        } else {
            newArr.push(i.toString());
        };
    };

    return newArr;
};

FizzBuzz(31);