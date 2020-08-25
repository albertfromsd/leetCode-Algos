// Easy
// https://leetcode.com/problems/toeplitz-matrix/

// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.
// Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

// Example 1:
// Input:
// matrix = [
//   [1,2,3,4],
//   [5,1,2,3],
//   [9,5,1,2]
// ]
// Output: True
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.

// Example 2:
// Input:
// matrix = [
//   [1,2],
//   [2,2]
// ]
// Output: False
// Explanation:
// The diagonal "[1, 2]" has different elements.

// Note:
// matrix will be a 2D array of integers.
// matrix will have a number of rows and columns in range [1, 20].
// matrix[i][j] will be integers in range [0, 99].

// Follow up:
// What if the matrix is stored on disk, and the memory is limited such that 
// you can only load at most one row of the matrix into the memory at once?
// What if the matrix is so large that you can only load up a partial row into the memory at once?



// Runtime: 116 ms, faster than 17.85% of JavaScript online submissions for Toeplitz Matrix.
// Memory Usage: 38.5 MB, less than 38.81% of JavaScript online submissions for Toeplitz Matrix.
function toeplitzMatrixAya(matrix){

   let rLength = matrix[0].length;
   let cLength = matrix.length;

   if(rLength == 1 || matrix.length == 1){
       return true;
   }

   for(let r=0; r<rLength-1; r++){
       let number = matrix[0][r];
       let testR = r+1;
       let testC = 1;
       while(testR < rLength && testC < cLength ){
           if(matrix[testC][testR] != number){
               return false
           }
           testR++;
           testC++;
       }
   }

   for(let c=1; c<matrix.length-1; c++){
       number = matrix[c][0]
       testC = c+1;
       testR = 1;
       while(testC < cLength && testR < rLength){
           if(matrix[testC][testR] != number){
               return false;
           }
           testR++;
           testC++;
       }
   }
   
   return true
};



const toeplitzCheck2 = ( matrix ) => {
   let cols = matrix[0].length;
   let rows = matrix.length;

   if(cols == 1 || rows == 1){
       return true;
   }

   let rowCopy = [ ...matrix[0] ];
   for(let r=1; r<rows-1; r++){
       rowCopy.pop();
       if( matrix[r].slice(r) != rowCopy ) return false;
   };

   
   for(let c=1; c<cols-1; c++){
      number = matrix[c][0]
      let testC = c+1;
      let testR = 1;
      while(testC < cLength && testR < rLength){
          if(matrix[testC][testR] != number){
              return false;
          }
          testR++;
          testC++;
      }
  }
   
   return true
};

let matrix = [
     [1,2],
     [1,2]
   ]


const matrix1 = [
   [1,2],
   [2,2]
]; // false

const matrix2 =[
   [1,2,3,4],
   [5,1,2,3],
   [9,5,1,2]
]; // true

const matrix3 = [
   [11,74,0,93],
   [40,11,74,7]
]; // false

console.log(toeplitzMatrixAya(matrix));

console.log( toeplitzCheck2(matrix) );