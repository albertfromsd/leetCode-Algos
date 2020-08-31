// 3 Medium
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


// [ first answer ]
// Runtime: 136 ms, faster than 52.90% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 43 MB, less than 35.81% of JavaScript online submissions for Longest Substring Without Repeating Characters.
function findSubString( str ) {
   let charObj = {};
   let maxL = 0;
   let start = 0;
   let runner = 0;

   while( runner < str.length ) {
      let char = str[runner];
      charObj[char] = charObj[char]+1 || 1;

      if( charObj[char] > 1 ) {
         maxL = Math.max( maxL, runner-start );
      
         while( charObj[char] > 1 ) {
            let startChar = str[start];
            charObj[startChar]--;

            start++;
         };
      };
      if( runner === str.length-1 ) maxL = Math.max( maxL, runner-start+1 );

      runner++;
   };
   console.log( maxL );
   return maxL;
};

// [ refactor of #3 using object ]
// still slower; initializing the entire array beforehand seems to improve performance and memory usage

// Runtime: 140 ms, faster than 50.10% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 42 MB, less than 59.63% of JavaScript online submissions for Longest Substring Without Repeating Characters.
function findSubString2( str ) {
   if( str.length < 2 ) return str.length;
   
   let charMap = {};
   let maxL = 0;

   for( let i=0, last=-1; i<str.length; i++ ) {
      let char = str[i];
      if( charMap[char] == null ) charMap[char] = -1;
      last = Math.max( last, charMap[char] );
      maxL = Math.max( maxL, i-last );
      charMap[char] = i;
   };
   
   return maxL;
};


// [ copied ]
// https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/504179/Javascript-and-C%2B%2B-solutions
// Runtime: 108 ms, faster than 80.68% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 39.2 MB, less than 91.03% of JavaScript online submissions for Longest Substring Without Repeating Characters.
function findSubStringCopied(s, map = Array(128).fill(-1), ans = 0) {
   // create a new array with indices for each of the possible character codes
   // save memory heap by not having to shrink or increase size of array
   // O(n) runtime
   // will loop through the array and use keycodes to mirror the index numbers in array
   // the values stored indicate the index number that that character was last seen
   // temp values are compared then stored 

   for( let i = 0, last = -1; i < s.length; i++ ) {
      // initializes the loop with the last variable set to the same -1 as above

      let c = s[i].charCodeAt(0);
      // find c (charcode) to use as array indices

       last = Math.max(last, map[c]);
       // last time the character was seen; is the current index or the last index higher?

       ans = Math.max(ans, i - last);
       // the temp max length = the max between: 
       // global max length vs. i - index of last occurence
          // for one character strings, 0 - (-1) = 1
       // bc forward traversal, the current index should always(?) be larger than the previous

       map[c] = i;
       // update the index of last occurence
   }
   console.log( ans );
   return ans;
};

const str1 = "abcabcbb";
const str2 = "bbbbb";
const str3 = "pwwkew";
const str4 = 'abcdabcd';
const str5 = ' ';

findSubString( str1 );
findSubString2( str1 );
findSubStringCopied( str1 );
console.log( '---------------------' );

findSubString( str2 );
findSubString2( str2 );
findSubStringCopied( str2 );
console.log( '---------------------' );

findSubString( str3 );
findSubString2( str3 );
findSubStringCopied( str3 );
console.log( '---------------------' );

findSubString( str4 );
findSubString2( str4 );
findSubStringCopied( str4 );
console.log( '---------------------' );

findSubString( str5 );
findSubString2( str5 );
findSubStringCopied( str5 );
console.log( '---------------------' );