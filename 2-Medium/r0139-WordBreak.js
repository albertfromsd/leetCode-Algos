// 139 (Medium)
// https://leetcode.com/problems/word-break

// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
// determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.

// Example 1:
// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false



// [ not working: returns false on 'aaaaaaa' when it should be true? ]
const wordBreak = ( str, wordDict ) => {
   let finalArr = [];
   let tempStr = '';
   

   for( let i=str.length-1; i>=0; i-- ) {
      tempStr = str[i] + tempStr;
      if( wordDict.includes(tempStr) ) {
         finalArr.unshift( tempStr );
         tempStr = '';
      };
   };
   
   console.log( finalArr );
   return str.length === finalArr.join('').length;
};



// [ copied: review ]
// Runtime: 68 ms, faster than 98.48% of JavaScript online submissions for Word Break.
// Memory Usage: 39 MB, less than 38.11% of JavaScript online submissions for Word Break.
function wordBreak2(str, wordDict) {
   const newWordTracker = new Array(str.length + 1).fill(false);
   newWordTracker[0] = true;
   
   for( let i = 1; i<=str.length; i++ ) {
      for( let j = 0; j<i; j++ ) {
         console.log( {i, j} );
         const word = str.slice( j, i );
         if( newWordTracker[j] === true && wordDict.includes(word) ) {
            console.log( 'index:', i, '=== true' );
            console.log( newWordTracker );

            newWordTracker[i] = true;
            break;
         }
      }
   }
   
   return newWordTracker[str.length];
}


const str1 = "catsandog"; // true
const wordDict1 = ["cats", "dog", "sand", "and", "cat"];

const str2 = 'leetcode'; // true
const wordDict2 = ["leet", "code"];

const str3 = "aaaaaaa"; // true
const wordDict3 = ['aaaa', 'aaa'];


console.log( wordBreak(str3, wordDict3) );
console.log( wordBreak2(str3, wordDict3) );