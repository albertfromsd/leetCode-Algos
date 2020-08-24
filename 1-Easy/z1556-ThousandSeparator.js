// Easy
// https://leetcode.com/problems/thousand-separator/

// Given an integer n, add a dot (".") as the thousands separator and return it in string format.

// Example 1:
// Input: n = 987
// Output: "987"

// Example 2:
// Input: n = 1234
// Output: "1.234"

// Example 3:
// Input: n = 123456789
// Output: "123.456.789"

// Example 4:
// Input: n = 0
// Output: "0"

// Constraints:
// 0 <= n < 2^31


// Runtime: 84 ms, faster than 73.26% of JavaScript online submissions for Thousand Separator.
// Memory Usage: 36.8 MB, less than 40.11% of JavaScript online submissions for Thousand Separator.
const thousandSeparator = num => {
   if( !num ) return;

   const numString = num.toString(10);

   let finalStr = '';
   let count = 0;
   for( i=numString.length-1; i>=0; i-- ) {
      finalStr = numString[i] + finalStr;
      count++;

      if( i !== 0 && count === 3 ) {
         finalStr = '.' + finalStr;
         count = 0;
      };
   };

   console.log( finalStr );
   return finalStr;
};


// Runtime: 80 ms, faster than 77.54% of JavaScript online submissions for Thousand Separator.
// Memory Usage: 36.6 MB, less than 73.26% of JavaScript online submissions for Thousand Separator.
const thousandSeparator2 = num => {
   if( num === undefined || num === null ) return;

   const numString = num.toString(10);
   if( numString.length < 4 ) return numString;
   
   let finalStr = '';
   let i = numString.length;
   let j = numString.length-1-2;
   while( i > 0 ) {
      
      if( j > 0 ) finalStr = '.' + numString.substring( j, i ) + finalStr;
      else finalStr = numString.substring( 0, i ) + finalStr;

      i -= 3;
      j -= 3;
   };

   console.log( finalStr );
   return finalStr;
};


// Runtime: 80 ms, faster than 77.54% of JavaScript online submissions for Thousand Separator.
// Memory Usage: 36.6 MB, less than 71.12% of JavaScript online submissions for Thousand Separator.
const thousandSeparator3 = num => {
   if( num === undefined || num === null ) return;

   const numString = num.toString(10);
   if( numString.length < 4 ) return numString;

   const numArr = numString.split('');
   
   let tempArr = [];
   while( numArr.length ) {

      if( numArr.length > 3 ) {
         tempArr = ['.'].concat( numArr.splice( numArr.length-3 ).concat( tempArr ))
      } else {
         tempArr = numArr.splice( 0 ).concat( tempArr );
      };
   };

   const finalStr = tempArr.join('');

   return finalStr;
};

const num1 = 987;
const num2 = 1234;
const num3 = 123456789;
const num4 = 0;
const num5 = 12345;

console.log( thousandSeparator3( num4 ) );