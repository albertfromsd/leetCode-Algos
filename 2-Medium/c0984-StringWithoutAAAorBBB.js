// Medium
// https://leetcode.com/problems/string-without-aaa-or-bbb/

// Given two integers A and B, return any string S such that:

// S has length A + B and contains exactly A 'a' letters, and exactly B 'b' letters;
// The substring 'aaa' does not occur in S;
// The substring 'bbb' does not occur in S.
 
// Example 1:
// Input: A = 1, B = 2
// Output: "abb"
// Explanation: "abb", "bab" and "bba" are all correct answers.

// Example 2:
// Input: A = 4, B = 1
// Output: "aabaa"
 
// Note:
// 0 <= A <= 100
// 0 <= B <= 100
// It is guaranteed such an S exists for the given A and B.



// Runtime: 76 ms, faster than 76.25% of JavaScript online submissions for String Without AAA or BBB.
// Memory Usage: 37.4 MB, less than 16.25% of JavaScript online submissions for String Without AAA or BBB.
function stringAsBs( A, B ) {
   let finalStr = '';

   let char1 = 'a', char2 = 'b';
   if( B > A ) [A, B, char1, char2] = [B, A, char2, char1];

   let freq = A-B > 1 ? 2 : 1;
   while( A || B ) {
      if( A-B < 2 ) freq = 1;   
      
      let endI = Math.min( A, freq );
      for( let i=0; i<endI; i++, A-- ) {
         finalStr += char1;
      };
   
      let endJ = Math.min( B, 1 );
      for( let j=0; j<endJ; j++, B-- ) {
         finalStr += char2;
      };
   };
   console.log( {finalStr} );
   return finalStr;
};

function stringNo3a3b( A, B ) {
   let newArr = new Array(A+B).fill(null);
   let char1 = 'a', char2 = 'b';
   if(B>A ) [ A, B, char1, char2 ] = [ B, A, char2, char1 ];

   let freq = A-B > 1 ? 2 : 1;
   while( A || B ) {
      if( A-B < 2 ) freq = 1;
      // enter switch for character here
      for( let i=0; i<A+B; i++ ) {
         // add items to array then .join('')
         // don't know if that will be efficient but worth experimenting and seeing
      };
   }

};


// [ copied ]
// https://leetcode.com/problems/string-without-aaa-or-bbb/submissions/
// Runtime: 76 ms, faster than 76.25% of JavaScript online submissions for String Without AAA or BBB.
// Memory Usage: 37 MB, less than 47.50% of JavaScript online submissions for String Without AAA or BBB.
var strWithout3a3b = function(A, B) {
   var result = "";
    var set = (A>=B)?"ab":"ba";
    var min = (A >= B)?B:A;
    var dif = Math.abs(A-B);
    for(var i=0;i<min;i++){
        if(dif > 0){
            if(A >= B){
                result += 'a'; 
            }else{
                result += 'b';
            }
            dif--;
        }
        result += set;
    }
    if(dif > 0){
        for(var j=0;j<dif;j++){
            result += (A>=B)?'a':'b';
        }
    }
    return result;
};

// stringAsBs( 1, 1 );
// stringAsBs( 1, 2 );
// stringAsBs( 2, 3 );
// stringAsBs( 4, 1 );
// stringAsBs( 1, 4 );
// stringAsBs( 2, 5 );
// stringAsBs( 4, 4 );
// stringAsBs( 6, 7 );
// stringAsBs( 1, 4 );
// stringAsBs( 27, 33 );
