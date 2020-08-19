// Easy
// https://leetcode.com/problems/valid-palindrome-ii/

// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True

// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

const validPalindrome2 = ( str ) => {

   let tempStr = str.toLowerCase();
   // double pointer

   let charTracker = {};
   let charOddCount = 0;

   for( let i=0; i<tempStr.length; i++ ) {
      charTracker[tempStr[i]] = charTracker[tempStr[i]]+1 || 1;
   };
   console.log( charTracker );

   for( const key in charTracker ) {
      if( charTracker[key] % 2 !== 0 ) charOddCount++;
      if( charOddCount > 2 ) return false;
   };

   let leftP = 0, rightP = str.length-1;
   let centerChecker = false;
   let freeCharUsed = false;

};

const str1 = 'aba';
const str2 = 'abca';

console.log( validPalindrome2(str1) );