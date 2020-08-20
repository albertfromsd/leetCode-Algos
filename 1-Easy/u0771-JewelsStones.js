// Easy
// https://leetcode.com/problems/jewels-and-stones/

// ou're given strings J representing the types of stones that are jewels, 
// and S representing the stones you have.  
// Each character in S is a type of stone you have.  
// You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. 
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:
// Input: J = "z", S = "ZZ"
// Output: 0

// Note:
// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.


// Runtime: 92 ms, faster than 31.41% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 38.1 MB, less than 11.52% of JavaScript online submissions for Jewels and Stones.
const jewelCount = ( j, s ) => {
   let jewelList = {};
   for( const jewel of j ) {
      jewelList[jewel] = true;
   };

   let jewelCount = 0;
   for( const stone of s ) {
      if( jewelList[stone] ) jewelCount++
   };

   return jewelCount;
};


const jewelCount2 = ( j, s ) => {

};

const j1 = 'aA';
const s1 = 'aAAbbbb';

const j2 = 'z';
const s2 = 'ZZ';

console.log( jewelCount(j2, s2) );