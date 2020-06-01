// 58 Easy
// https://leetcode.com/problems/length-of-last-word/

// Given a string s consists of upper/lower-case alphabets and empty space characters ' '
// return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

// Runtime: 44 ms, faster than 97.57% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 33.9 MB, less than 46.15% of JavaScript online submissions for Length of Last Word.

function lastWordLength(str) {
    if( str.length === 0 ) return 0;
    
    let count = 0;
    let tempStr = str.trim();
    let i = tempStr.length-1;
    while( i>=0 ) {
        if( tempStr[i] !== " " ) {
            count += 1;

            i -= 1;
        } else {
            return count;
        };
    };

    return count;
};

console.log( lastWordLength("Hello world") );