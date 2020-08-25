// Easy
// https://leetcode.com/problems/find-common-characters/

// Given an array A of strings made only from lowercase letters, 
// return a list of all characters that show up in all strings within the list (including duplicates).  
// For example, if a character occurs 3 times in all strings but not 4 times, 
// you need to include that character three times in the final answer.

// You may return the answer in any order.

// Example 1:
// Input: ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: ["cool","lock","cook"]
// Output: ["c","o"]
 

// Note:
// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter


// Runtime: 236 ms, faster than 5.70% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 45.6 MB, less than 10.96% of JavaScript online submissions for Find Common Characters.
const findCommonChars = words => {
 
   let allCharTrackers = [];
   for( let i=0; i<words.length; i++ ) {

      let charTracker = {};

      for( let j=0; j<words[i].length; j++ ) {
         const char = words[i][j];
         charTracker[char] = charTracker[char]+1 || 1;
      };

      allCharTrackers.push( charTracker );
   };

   let finalCharTracker = {};
   for( let i=0; i<allCharTrackers.length; i++ ) {
      for( const char in allCharTrackers[i] ) {
         let minCharCount = allCharTrackers[i][char];

         for( let j=0; j<allCharTrackers.length; j++ ) {
            if( i === j ) continue;

            if( !allCharTrackers[j][char] ) {
               minCharCount = 0;
               if( finalCharTracker[char] ) delete finalCharTracker[char];

               break;
            } else {
               minCharCount = Math.min( allCharTrackers[j][char], minCharCount );
               finalCharTracker[char] = minCharCount;
            }
         }

      }
   }

   let finalArr = [];
   for(const char in finalCharTracker) {
      for( let i=0; i<finalCharTracker[char]; i++ ) {
         finalArr.push(char);
      };
   };

   console.log( finalArr );
   return finalArr;
};



// Runtime: 120 ms, faster than 47.15% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 39.9 MB, less than 63.38% of JavaScript online submissions for Find Common Characters.
const findCommonChars2 = words => {

   let charTracker = {};
   for( const char of words[0] ) {
      charTracker[char] = charTracker[char]+1 || 1;
   };

   for( let i=1; i<words.length; i++ ) {
      for( const char of Object.keys(charTracker) ) {
         const thisCharCount = countChars( words[i], char );
         if( thisCharCount === 0 ) {
            delete charTracker[char];
         } else {
            charTracker[char] = Math.min( thisCharCount, charTracker[char] )
         }
      }
   };

   function countChars( string, target ) {
      let count = 0;
      for( const char of string ) {
         if( char === target ) count++;
      };

      return count;
   };

   let finalArr = [];
   for( const char in charTracker ) {
      for( let i=0; i<charTracker[char]; i++ ) {
         finalArr.push( char );
      };
   };

   console.log( finalArr );
   return finalArr;
};



// Runtime: 156 ms, faster than 24.34% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 44 MB, less than 21.93% of JavaScript online submissions for Find Common Characters.
const findCommonChars3 = words => {
   let charTracker = {};
   for( const char of words[0] ) {
      charTracker[char] = charTracker[char]+1 || 1;
   };

   for( let i=1; i<words.length; i++ ) {
      for( const char of Object.keys(charTracker) ) {
         const thisCharCount = countChars( words[i], char );
         
         if( thisCharCount === 0 ) delete charTracker[char];
         else charTracker[char] = Math.min( thisCharCount, charTracker[char] );
      };
   };

   function countChars( string, target ) {
      const regExp = new RegExp( target, 'g' );
      return (string.match(regExp) || 0).length;
   };

   let finalArr = [];
   for( const char in charTracker ) {
      for( let i=0; i<charTracker[char]; i++ ) {
         finalArr.push( char );
      };
   };

   console.log( finalArr );
   return finalArr;

};

// https://leetcode.com/problems/find-common-characters/discuss/250620/short-javascript-solution
// Runtime: 76 ms, faster than 97.15% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 38.7 MB, less than 83.77% of JavaScript online submissions for Find Common Characters.
const findCommonChars4 = A => {
   let originalChars = A[0].split('');
   for (let i = 1; i < A.length; i++) {
       let tempChars = A[i].split('');
       originalChars = originalChars.filter(char => {
           let ind = tempChars.indexOf(char);
           return ind > -1 ? tempChars[ind] = true : false;
       });
   };
   // console.log( originalChars );
   return originalChars;
};

const words1 = ["bella","label","roller"];
const words2 = ["cool","lock","cook"];

// https://leetcode.com/problems/find-common-characters/discuss/250620/short-javascript-solution
// - Similar to above but with more explicit if statements
// - Note runtime performance difference between the two
// Runtime: 108 ms, faster than 55.92% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 38.6 MB, less than 86.40% of JavaScript online submissions for Find Common Characters.
var commonChars = function(A) {
   let start = A[0].split('');
    
    for(let word of A) {
        const chars = word.split('');
        start = start.filter(sChar => {
            const idx = chars.indexOf(sChar);
            
            // if the char has been found, set it a value so it doesnt get discovered again
            if (idx > -1) {
                chars[idx] = 'found';
                return true;
            }
            
            return false;
        });
    }
    
   //  console.log( start );
    return start;
};

findCommonChars4( words1 );