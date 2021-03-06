// 593 Med
// https://leetcode.com/problems/valid-square/

// Given the coordinates of four points in 2D space, 
// return whether the four points could construct a square.
// The coordinate (x,y) of a point is represented by an integer array with two integers.

// Example:
// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// Output: True
 

// Note:
// All the input integers are in the range [-10000, 10000].
// A valid square has four equal sides with positive length and four equal angles (90-degree angles).
// Input points have no order.



// why does leetcode give only two index points that return true? 
function validSquare( index1, index2, index3, index4 ) {
   if( index1.length !== 2 ||
      index2.length !== 2 ||
      index3.length !== 2 ||
      index4.length !== 2 ) return false;

   let ndxArr = [ index1, index2, index3, index4 ];
   let ndxArrSort = ndxArr.sort( (a,b) => a[0]-b[0] ) ;
   console.log( {ndxArrSort} );
   
};

const c1 = [0,0], c2 = [1,1], c3 = [1, 0], c4 = [0, 1];
console.log( validSquare( c1, c2, c3, c4) );