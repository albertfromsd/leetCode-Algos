// 844 Easy
// https://leetcode.com/problems/backspace-string-compare/

// Given two strings S and T, return if they are equal 
// when both are typed into empty text editors. # means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".

// Example 2:
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".

// Example 3:
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".

// Example 4:
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

// Note:
// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:
// Can you solve it in O(N) time and O(1) space?


// Runtime: 72 ms, faster than 9.93% of JavaScript online submissions for Backspace String Compare.
// Memory Usage: 37.5 MB, less than 33.33% of JavaScript online submissions for Backspace String Compare.
function backspaceCompare( str1, str2 ) {

    let tempStr1 = '';
    let i = 0;
    while( i<str1.length ) {
        if( str1[i] !== "#" ) tempStr1 += str1[i];
        else tempStr1 = tempStr1.substring( 0, tempStr1.length-1 )

        i++;
    };

    let tempStr2 = '';
    i = 0;
    while( i<str2.length ) {
        if( str2[i] !== "#" ) tempStr2 += str2[i];
        else {
            tempStr2 = tempStr2.substring( 0, tempStr2.length-1 )
        };

        i++;
    };
    console.log( tempStr1 );
    console.log( tempStr2 );

    console.log( tempStr1 === tempStr2 );
    return ( tempStr1 === tempStr2 );
}

const str1 = "ab#c", str2 = "ad#c";
const str3 = "ab##", str4 = "c#d#"
const str5 = "a##c", str6 = "#a#c"
const str7 = "a#c", str8 = "b"
const str9 = "xywrrmp", str10 = "xywrrmu#p"

backspaceCompare( str9, str10 );