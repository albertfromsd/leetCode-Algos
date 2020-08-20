// Easy
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

// Given a list of sorted characters letters containing only lowercase letters, 
// and given a target letter target, find the smallest element in the list 
// that is larger than the given target.

// Letters also wrap around. 
// For example, if the target is target = 'z' and letters = ['a', 'b'], 
// the answer is 'a'.

// Examples:
// Input:
// letters = ["c", "f", "j"]
// target = "a"
// Output: "c"

// Input:
// letters = ["c", "f", "j"]
// target = "c"
// Output: "f"

// Input:
// letters = ["c", "f", "j"]
// target = "d"
// Output: "f"

// Input:
// letters = ["c", "f", "j"]
// target = "g"
// Output: "j"

// Input:
// letters = ["c", "f", "j"]
// target = "j"
// Output: "c"

// Input:
// letters = ["c", "f", "j"]
// target = "k"
// Output: "c"

// Note:
// letters has a length in range [2, 10000].
// letters consists of lowercase letters, and contains at least 2 unique letters.
// target is a lowercase letter.

const findLetter = ( arr, target ) => {

   const targetCode = target.charCodeAt(0);
   // console.log( targetCode );

   let charCode = targetCode;
   // console.log( charCode );

   for( let i=0; i<arr.length; i++ ) {
      console.log( arr[i] );

      // need a modulus operator starting at 97
      if( arr[i] > target ) {
         console.log( 'forloop: ' + arr[i].charCodeAt(0) );
         // need an arithmetic equation below to account for starting number ~65
         charCode = Math.min( charCode, arr[i].charCodeAt(0) );
         console.log( charCode );
      };
   };

   console.log( charCode );
   console.log( String.fromCharCode(charCode) );

   return String.fromCharCode(charCode);
};

const arr1 = ['a', 'b'];
const arr2 = ["c", "f", "j"];

console.log( findLetter(arr1, 'a') );