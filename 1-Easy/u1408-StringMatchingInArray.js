// 1408 Easy
// https://leetcode.com/problems/string-matching-in-an-array/

// Given an array of string words. Return all strings in words which is substring of another word in any order. 
// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].


// Example 1:
// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// Example 2:
// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

// Example 3:
// Input: words = ["blue","green","bu"]
// Output: []
 

// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// It's guaranteed that words[i] will be unique.



// Runtime: 92 ms, faster than 40.08% of JavaScript online submissions for String Matching in an Array.
// Memory Usage: 41.6 MB, less than 5.56% of JavaScript online submissions for String Matching in an Array.
const stringMatch = ( wordsArr ) => {
   const newArr = [];

   for( let i=0; i<wordsArr.length; i++ ) {
      for( let j=0; j<wordsArr.length; j++ ) {
         let regCheck = new RegExp( wordsArr[i], 'g' );
         if( 
            j !== i 
            && wordsArr[i].length <= wordsArr[j].length 
            && (wordsArr[j].match(regCheck) || []).length > 0
            && newArr.indexOf( wordsArr[i] ) === -1
         ) {
            newArr.push( wordsArr[i] );
         };
      };
   };
   console.log( newArr );
   return newArr;

};

const words1 = ["mass","as","hero","superhero"];
const words2 = ["leetcode","et","code"];
const words3 = ["blue","green","bu"];
const words4 = ["leetcoder","leetcode","od","hamlet","am"];

stringMatch(words4);