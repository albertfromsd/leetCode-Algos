// 557 Easy
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// Given a string, you need to reverse the order of characters in each word 
// within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.



function reverseString1( str ) {

    let finalStr = "";
    let tempStr = "";
    for( let i=str.length-1; i>=0; i-- ) {
        if( str[i] !== " " ) tempStr += str[i];

        if( str[i] === " " ) {
            if( i === str.length-1 ) finalStr = tempStr;
            else finalStr = tempStr + " " + finalStr;
            tempStr = "";
        };
    };
    console.log( finalStr );
    console.log( finalStr.length === str.length );
    return finalStr.trim();
};


// Runtime: 80 ms, faster than 55.30% of JavaScript online submissions for Reverse Words in a String III.
// Memory Usage: 43 MB, less than 22.80% of JavaScript online submissions for Reverse Words in a String III.
function reverseString3( str ) {

    let tempArr1 = str.split(" ");
    let finalStr = ""

    for( let i=tempArr1.length-1; i>=0; i-- ) {
        let tempSubStr = tempArr1[i].split('').reverse().join('');
        if( i=== tempArr1.length-1 ) finalStr = tempSubStr;
        else finalStr = tempSubStr + " " + finalStr;
    };

    return finalStr;
};


const str1 = "Let's take LeetCode contest"; // Output: "s'teL ekat edoCteeL tsetnoc"

reverseString1( str1 );
// reverseString2( str1 );