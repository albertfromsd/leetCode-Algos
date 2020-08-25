// Easy
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// Given a string S of lowercase letters, a duplicate removal consists of choosing 
// two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  
// It is guaranteed the answer is unique.

 
// Example 1:
// Input: "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are 
// adjacent and equal, and this is the only possible move.  
// The result of this move is that the string is "aaca", 
// of which only "aa" is possible, so the final string is "ca".
 
// Note:
// 1 <= S.length <= 20000
// S consists only of English lowercase letters.



// Runtime: 396 ms, faster than 20.87% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
// Memory Usage: 60.7 MB, less than 6.67% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
const removeDuplicates = str => {
   let strArr = str.split('');

   let i = 0;
   while( i < strArr.length ) {
      if( strArr[i] === strArr[i+1] ) {
         strArr = strArr.slice(0, i).concat(strArr.slice(i+2) );

         i > 0
            ? i -= 1
            : i = 0;
      } else {
         i++;
      };
   };

   const finalArr = [];
   for( let i=0; i<strArr.length; i++ ) {
      if( strArr[i] ) finalArr.push( strArr[i] );
   };

   const finalStr = finalArr.join('');

   console.log( finalStr );
   return finalStr;
};



// Runtime: 124 ms, faster than 44.93% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
// Memory Usage: 44 MB, less than 70.58% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
const removeDuplicates2 = str => {
   let strCopy = str;
   let i = 0;
   while( i < strCopy.length-1 ) {
      if( strCopy[i] === strCopy[i+1] ) {
         strCopy = strCopy.substring(0, i) + strCopy.substring(i+2);

         i > 0
            ? i -= 1
            : i = 0;
      } else {
         i++;
      };
   };

   console.log( strCopy );
   return strCopy;
};

const str1 = 'abbaca';
removeDuplicates2(str1);