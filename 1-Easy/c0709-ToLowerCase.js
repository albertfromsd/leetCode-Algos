// Easy
// https://leetcode.com/problems/to-lower-case/

// Implement function ToLowerCase() that has a string parameter str, 
// and returns the same string in lowercase.


// Example 1:
// Input: "Hello"
// Output: "hello"

// Example 2:
// Input: "here"
// Output: "here"

// Example 3:
// Input: "LOVELY"
// Output: "lovely"


// Runtime: 76 ms, faster than 47.43% of JavaScript online submissions for To Lower Case.
// Memory Usage: 36.1 MB, less than 47.97% of JavaScript online submissions for To Lower Case.
const toLowerCase = ( str ) => {
   let stringArray = str.split('');
   
   for( let i=0; i<stringArray.length; i++ ) {
      if(   
         str[i] >= 'A' && 
         str[i] <= 'Z' 
      ) {
         let newChar = stringArray[i].charCodeAt(0) + 32;
         stringArray[i] = String.fromCharCode( newChar );
      };
   };

   let newString = stringArray.join('');
   console.log( newString );
   return newString;
};


// Runtime: 80 ms, faster than 34.10% of JavaScript online submissions for To Lower Case.
// Memory Usage: 36.2 MB, less than 45.24% of JavaScript online submissions for To Lower Case.
const toLowerCase2 = str => {
   let newStr = '';

   for( let i=0; i<str.length; i++ ) {
      if( 
         str.charCodeAt(i) > 64 && 
         str.charCodeAt(i) < 91 
      ) {
         let newChar = str[i].charCodeAt(0) + 32;
         newStr += String.fromCharCode( newChar );
      } else {
         newStr += str[i];
      };
   };

   console.log( newStr );
   return newStr;

};


const str1 = "AaBbCcXxYyZz";

toLowerCase( str1 );
toLowerCase2( str1 );