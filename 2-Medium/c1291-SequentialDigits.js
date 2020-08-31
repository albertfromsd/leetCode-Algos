// 1291 Medium
// https://leetcode.com/problems/sequential-digits/

// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.


// Example 1:
// Input: low = 100, high = 300
// Output: [123,234]

// Example 2:
// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]
 
// Constraints:
// 10 <= low <= high <= 10^9



// Runtime: 68 ms, faster than 88.24% of JavaScript online submissions for Sequential Digits.
// Memory Usage: 36.7 MB, less than 23.53% of JavaScript online submissions for Sequential Digits.
function sequentialDigits( low, high ) {
   let finalArr = [];

   let i = findNextValidNum( low );
   while( i <= high ) {
      finalArr.push(i);
      i = findNextValidNum( i );
   };

   function findNextValidNum( num ) {
      let digitCount = Math.log(num) * Math.LOG10E+1 | 0;
      if( digitCount < 1 ) return 1; 
      else if( digitCount === 1 && num !== 9) return num+1;

      let startDigit = Math.floor( num / Math.pow(10, digitCount-1) );
      if( startDigit + digitCount > 10 ) {
         digitCount++;
         startDigit = 1;
      }
      
      let tempStr = '';
      for( let j=startDigit; j<startDigit+digitCount; j++ ) {
         tempStr += j.toString();
      };

      let nextValidNum = parseInt( tempStr, 10 ); 
      if( nextValidNum === num && nextValidNum !== finalArr[finalArr.length-1] ) {
         return nextValidNum;
      };
      if( nextValidNum === num || nextValidNum < low ) {
         return findNextValidNum( nextValidNum + Math.pow(10, digitCount-1) );
      };
      return nextValidNum;
   };

   // function findDelta( number ) {
   //    let tempStr = '';
   //    let digitCount = Math.log(number) * Math.LOG10E+1 | 0;
   //    for( let k=0; k<digitCount; k++ ) {
   //       tempStr += '1';
   //    };

   //    return parseInt( tempStr, 10 );
   // }

   console.log( {finalArr} );
   return finalArr;
};


// [ copied ]
// https://leetcode.com/problems/sequential-digits/discuss/455969/Javascript-and-C%2B%2B-solutions
// Runtime: 72 ms, faster than 79.41% of JavaScript online submissions for Sequential Digits.
// Memory Usage: 36.9 MB, less than 5.88% of JavaScript online submissions for Sequential Digits.
function sequentialDigits2( low, high, d='123456789', ans = new Set() ) {
   let N = d.length;
    for (let i = 0; i < N; ++i) {
        for (let j = 1; j <= N; ++j) {
            let x = Number(d.substring(i, j));
            if (low <= x && x <= high)
                ans.add(x);
        };
    };
    console.log( [...ans].sort((a, b) => a - b) );
    return [...ans].sort((a, b) => a - b);
};


// [ copied ] 
// https://leetcode.com/problems/sequential-digits/discuss/509021/Javascript%3A-math
// Runtime: 72 ms, faster than 79.41% of JavaScript online submissions for Sequential Digits.
// Memory Usage: 36.8 MB, less than 8.82% of JavaScript online submissions for Sequential Digits.
function sequentialDigitsCopied1(low, high) {
   const a = [1,2,3,4,5,6,7,8,9,0];
   const ones = [1,1,1,1,1,1,1,1,1,1];
   const seq = [];

   let l = (''+low).length;
   let start = +a.slice(0, l).join('');
   let step = +ones.slice(0, l).join('');
   console.log( {start, step} );
   
   while (start <= high) {
       if (low <= start) {
           seq.push(start);
       }
       
       start+=step;
       
       if(start % 10 === 0) {
           l++;
           start = +a.slice(0, l).join('');
           step = +ones.slice(0, l).join('');
       }
   }
   return seq;
};

sequentialDigits( 100, 300 );
// sequentialDigits( 13, 100 );
// sequentialDigits( 100, 1000 );
// sequentialDigits( 1000, 10000 );
// sequentialDigits( 123, 6789 );
// sequentialDigitsCopied1( 234, 2345 );
// sequentialDigits2( 58, 2345 );
// sequentialDigits( 0, 13000 );

// 0-10: range 10, size=1, 9 combos
// 1
// 2
// 3
// 4
// 4
// 5
// 6
// 7
// 8
// 9

// 10-100: range 100, size=2, 8 combos, 11 delta
// 12
// 23
// 34
// 45
// 56
// 67
// 78
// 89

// 100-1000: range 900, size=3, 7 combos, 111 delta
// 123
// 234
// 345
// 456
// 567
// 678
// 789

// 1000-10000: range 9000, size 4, 6 combos, 1111 delta
// 1234
// 2345
// 3456
// 4567
// 5678
// 6789