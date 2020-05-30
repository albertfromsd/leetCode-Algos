// 848 Med
// https://leetcode.com/problems/shifting-letters/

// We have a string S of lowercase letters, and an integer array shifts.
// Call the shift of a letter, the next letter in the alphabet, 
// (wrapping around so that 'z' becomes 'a'). 
// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
// Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

// Return the final string after all such shifts to S are applied.

// Example 1:
// Input: S = "abc", shifts = [3,5,9]
// Output: "rpl"
// Explanation: 
// We start with "abc".
// After shifting the first 1 letters of S by 3, we have "dbc".
// After shifting the first 2 letters of S by 5, we have "igc".
// After shifting the first 3 letters of S by 9, we have "rpl", the answer.

// Note:
// 1 <= S.length = shifts.length <= 20000
// 0 <= shifts[i] <= 10 ^ 9

function shiftingLetters( string, arr ) {

    let stringCopy = [...string];

    for( let i=0; i<stringCopy.length; i++ ) {
        stringCopy[i] = stringCopy[i].charCodeAt(0);
    };

    // console.log( stringCopy );

    for( let i=0; i<stringCopy.length; i++ ) {
        let count = 0;
        while( count <= i ) {
            stringCopy[count] += arr[i]%26;

            count++;
        };
    };

    console.log( stringCopy );

    // a=97, z=122
    for( let i=0; i<stringCopy.length; i++ ) {
        if( stringCopy[i] > 122 ) {
            stringCopy[i] = (stringCopy[i] % 122) + 96;
        };
    };

    for( let i=0; i<stringCopy.length; i++ ) {
        stringCopy[i] = String.fromCharCode( stringCopy[i] );
    };

    let newString = stringCopy.join('');

    // console.log( newString );
    return newString;
};


// [ COPIED ]
// incorrect; just use as inspiration for your own solution
var shiftingLetters1 = function(S, shifts) {
    let newString = "";
    for (let i = shifts.length-2; i >= 0; i--) {
        shifts[i] += shifts[i+1];
    }
    return getShiftedString(S, shifts);
};
    
function getShiftedString(str, shifts) {
    let result = "";
    const alph = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < shifts.length; i++) {
        result += alph.charAt((alph.indexOf(str.charAt(i)) + shifts[i])%alph.length)
    }
    return result;
}


const str1 = "abc";
const arr1 = [3, 5, 9];

const str2 = "bad";
const arr2 = [10, 20, 30];

const str3 = "z";
const arr3 = [52];

const str4 = "zvhez";
const arr4 = [10, 16, 10, 26, 26];

console.log( shiftingLetters1( str4, arr4 ) );