// Easy
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// Example 1:
// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

// Example 2:
// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].
 
// Constraints:
// 0 <= low <= high <= 10^9



// Runtime: 3764 ms, faster than 12.93% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
// Memory Usage: 35.8 MB, less than 99.43% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
const countOdds1 = ( start, end ) => {
   let oddCount = 0;
   for( let i=start; i<=end; i++ ) {
      if( i%2 !== 0 ) oddCount++;
   };
   return oddCount;
};



// Runtime: 76 ms, faster than 81.03% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
// Memory Usage: 36.2 MB, less than 87.35% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
const countOdds2 = ( start, end ) => {
   let oddCount = 0;
   if( start%2 !== 0 ) oddCount += 0.5;
   if( end%2 !== 0) oddCount += 0.5;

   oddCount += (end-start)/2;
   return Math.floor(oddCount);
};



// Runtime: 80 ms, faster than 70.11% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
// Memory Usage: 36.2 MB, less than 88.50% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
const countOdds3 = ( start, end ) => {
   return Math.floor( ((end-start) / 2) + ((start%2) / 2) + ((end%2) / 2) );
};



// countOdds2(3, 7); // 3
// countOdds2(3, 8); // 3
// countOdds2(3, 9); // 4
// countOdds2(2, 6); // 2
// countOdds2(2, 7); // 3
// countOdds2(2, 8); // 3

countOdds3(3, 7); // 3
countOdds3(3, 8); // 3
countOdds3(3, 9); // 4
countOdds3(2, 6); // 2
countOdds3(2, 7); // 3
countOdds3(2, 8); // 3