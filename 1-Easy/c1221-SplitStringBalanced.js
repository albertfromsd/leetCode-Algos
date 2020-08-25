// Easy
// https://leetcode.com/problems/split-a-string-in-balanced-strings/

// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.

// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Example 2:
// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

// Example 3:
// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

// Example 4:
// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
 
// Constraints:
// 1 <= s.length <= 1000
// s[i] = 'L' or 'R'



// Runtime: 76 ms, faster than 65.81% of JavaScript online submissions for Split a String in Balanced Strings.
// Memory Usage: 36.4 MB, less than 58.01% of JavaScript online submissions for Split a String in Balanced Strings.
const balanceStrings = ( str ) => {
   
   let rCount = 0, lCount = 0, total = 0;
   let i = 0;
   while( i < str.length ) {
      
      str[i] === 'L'
         ? lCount++
         : rCount++;
      
      // switch(str[i]) {
      //    case 'L': 
      //       lCount++; 
      //       break;
      //    case 'R':
      //       rCount++;
      //       break;
      //    default:
      //       break;
      // };

      if( rCount && rCount === lCount) {

         total++;
         rCount = 0;
         lCount = 0;
      };

      i++;
   };
   return total;
};

const str1 = "RLRRLLRLRL";
const str2 = "RLLLLRRRLR";
const str3 = "LLLLRRRR";
const str4 = "RLRRRLLRLL";

balanceStrings( str4 );