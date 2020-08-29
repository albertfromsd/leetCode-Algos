// Medium
// https://leetcode.com/problems/reverse-words-in-a-string/

// Given an input string, reverse the string word by word.

// Example 1:
// Input: "the sky is blue"
// Output: "blue is sky the"

// Example 2:
// Input: "  hello world!  "
// Output: "world! hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
// Input: "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 
// Note:
// A word is defined as a sequence of non-space characters.
// Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.


// Runtime: 72 ms, faster than 76.30% of JavaScript online submissions for Reverse Words in a String.
// Memory Usage: 37.6 MB, less than 28.23% of JavaScript online submissions for Reverse Words in a String.
const reverseWords = str => {
   let ogWordsArr = str.split(' ');
   let trimmedWordsArr = ogWordsArr.filter( word => word.length > 0 );
   
   let finalStr = trimmedWordsArr.reverse();
   finalStr = finalStr.join(' ');
   console.log( {finalStr} );
   return finalStr;   
};

const str1 = "the sky is blue";
const str2 = "  hello world!  ";
const str3 = "a good   example";

// reverseWords( str1 );
// reverseWords( str2 );
// reverseWords( str3 );