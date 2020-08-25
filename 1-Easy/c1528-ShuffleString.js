// Easy
// https://leetcode.com/problems/shuffle-string/

// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at 
// the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Example 1:
// Input: s = "codeleet", indices = [4,5,6,7,0,1,2,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// Example 2:
// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

// Example 3:
// Input: s = "aiohn", indices = [3,1,4,2,0]
// Output: "nihao"

// Example 4:
// Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
// Output: "arigatou"

// Example 5:
// Input: s = "art", indices = [1,0,2]
// Output: "rat"

// Constraints:
// s.length == indices.length == n
// 1 <= n <= 100
// s contains only lower-case English letters.
// 0 <= indices[i] < n
// All values of indices are unique (i.e. indices is a permutation of the integers from 0 to n - 1).



// Runtime: 92 ms, faster than 49.85% of JavaScript online submissions for Shuffle String.
// Memory Usage: 38.2 MB, less than 72.40% of JavaScript online submissions for Shuffle String.
const decodeString = ( str, indices ) => {
   console.time( 'decodeStr' );
   
   let finalStr = '';
   for( let i=0; i<indices.length; i++ ) {
      let indexPosition = indices.indexOf(i);
      finalStr += str[indexPosition];
   };
   console.log( {finalStr} );
   console.timeEnd( 'decodeStr' );
   return finalStr;
};



// Runtime: 92 ms, faster than 49.85% of JavaScript online submissions for Shuffle String.
// Memory Usage: 38.2 MB, less than 82.20% of JavaScript online submissions for Shuffle String.
const decodeString2 = ( str, indices ) => {
   console.time( 'decodeStr2' );
   
   let strArr = [];
   
   for( let i=0; i<indices.length; i++ ) {
      let index = indices[i];
      strArr[index] = str[i];
   };

   let finalStr = strArr.join('');
   console.log( {finalStr} );
   console.timeEnd( 'decodeStr2' );
   return finalStr;
};


const str1 = "codeleet"
const indices1 = [4,5,6,7,0,1,2,3];
const str2 = "abc"
const indices2 = [0,1,2];
const str3 = "aiohn"
const indices3 = [3,1,4,2,0];
const str4 = "aaiougrt"
const indices4 = [4,0,2,6,7,3,1,5];
const str5 = "art"
const indices5 = [1,0,2];

decodeString2( str1, indices1 );
decodeString2( str2, indices2 );
decodeString2( str3, indices3 );
decodeString2( str4, indices4 );
decodeString2( str5, indices5 );