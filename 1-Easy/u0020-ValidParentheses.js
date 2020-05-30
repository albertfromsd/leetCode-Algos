// 20 Easy
// https://leetcode.com/problems/valid-parentheses/

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true



// Runtime: 52 ms, faster than 86.83% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 37.7 MB, less than 6.67% of JavaScript online submissions for Valid Parentheses.
function validParentheses( string ) {

    let tracker = [];

    for( let i=0; i<string.length; i++ ) {
        switch( string[i] ) {
            case "{":
                tracker.push( string[i] );
                continue;
            case "}":
                if( tracker[tracker.length-1] !== "{" ) return false;
                else {
                    tracker.pop();
                    continue;
                };
            case "(":
                tracker.push( string[i] );
                continue;
            case ")":
                if( tracker[tracker.length-1] !== "(" ) return false;
                else {
                    tracker.pop();
                    continue;
                };
            case '[':
                tracker.push( string[i] );
                continue;
            case "]":
                if( tracker[tracker.length-1] !== "[" ) return false;
                else {
                    tracker.pop();
                    continue;
                };
            default:
                continue;
        };
    };

    return ( tracker.length === 0 );
};

const str1 = "()";
const str2 = "()[]{}";
const str3 = "(]";
const str4 = "([)]";
const str5 = "{[]}";

console.log( validParentheses( str5 ) );