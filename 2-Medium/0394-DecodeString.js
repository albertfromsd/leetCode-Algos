// Medium
// https://leetcode.com/problems/decode-string/

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets 
// is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; 
// No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits 
// and that digits are only for those repeat numbers, k. 
// For example, there won't be input like 3a or 2[4].

// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:
// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Example 4:
// Input: s = "abc3[cd]xyz"
// Output: "abccdcdcdxyz"

function decodeString( str ) {

   let tempStr = '';
   for( let i=0; i<str.length; i++ ) {
      let char = str[i];
      let current = '';
      if( char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58 ) {
         // numbers

      } else if( 
         (char.charCodeAt(0) > 65 && char.charCodeAt(0) < 91) 
         || (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123 ) 
      ) {
         // capital letters || lowercase letters

      } else if( char.charCodeAt(0) === 91 ) {
         // '['
         
      } else if( char.charCodeAt(0) === 93 ) {
         // ']'
      }
   };

};

function mapCharCodes() {
   let map = {};
   for( let i=0; i<128; i++ ) {
      let char = String.fromCharCode(i);
      map[i] = char;
   };
   console.log( map );
   return map;
};

const str1 = "3[a]2[bc]";
const str2 = "3[a2[c]]";
const str3 = "2[abc]3[cd]ef";
const str4 = "2[abc]3[cd]ef";
const str5 = "abc3[cd]xyz";

mapCharCodes();