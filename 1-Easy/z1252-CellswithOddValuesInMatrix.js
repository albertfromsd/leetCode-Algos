// Easy
// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/

// Given n and m which are the dimensions of a matrix initialized by zeros 
// and given an array indices where indices[i] = [ri, ci]. 
// For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

// Return the number of cells with odd values in the matrix after applying the increment to all indices.

// Example 1:
// Input: n = 2, m = 3, indices = [[0,1],[1,1]]
// Output: 6
// Explanation: Initial matrix = [[0,0,0],[0,0,0]].
// After applying first increment it becomes [[1,2,1],[0,1,0]].
// The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.

// Example 2:
// Input: n = 2, m = 2, indices = [[1,1],[0,0]]
// Output: 0
// Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.
 
// Constraints:
// 1 <= n <= 50
// 1 <= m <= 50
// 1 <= indices.length <= 100
// 0 <= indices[i][0] < n
// 0 <= indices[i][1] < m



// Runtime: 100 ms, faster than 31.55% of JavaScript online submissions for Cells with Odd Values in a Matrix.
// Memory Usage: 37.3 MB, less than 75.30% of JavaScript online submissions for Cells with Odd Values in a Matrix.
const countOddCells = ( n, m, indices ) => {
   let ogArray = [];
   for( let i=0; i<n; i++ ) {
      let subArray = new Array(m).fill(0);
      ogArray.push( subArray );
   };

   let oddCount = 0;
   for( let i=0; i<indices.length; i++ ) {
      let targetRow = indices[i][0];
      let targetCol = indices[i][1];

      for( let i=0; i<ogArray.length; i++ ) {
         for( let j=0; j<ogArray[0].length; j++ ) {

            if( i === targetRow ) {
               ogArray[i][j]++;

               if( ogArray[i][j] % 2 !== 0 ) oddCount++;
               else oddCount--;
            };
            if( j === targetCol ) {
               ogArray[i][j]++;

               if( ogArray[i][j] % 2 !== 0 ) oddCount++;
               else oddCount--;
            }
         };
      };

   };

   console.log( ogArray );
   console.log( oddCount );

   return oddCount;
};


// Runtime: 72 ms, faster than 93.15% of JavaScript online submissions for Cells with Odd Values in a Matrix.
// Memory Usage: 37.8 MB, less than 54.47% of JavaScript online submissions for Cells with Odd Values in a Matrix.
const countOddCell2 = ( n, m, indices ) => {
   let ogArray = [];
   for( let i=0; i<n; i++ ) {
      let subArray = new Array(m).fill(0);
      ogArray.push( subArray );
   };

   let oddCount = 0;
   for( let i=0; i<indices.length; i++ ) {
      let targetRow = indices[i][0];
      let targetCol = indices[i][1];

      let col = 0;
      while( col < ogArray[0].length ) {
         ogArray[targetRow][col]++

         if( ogArray[targetRow][col] % 2 !== 0 ) oddCount++;
         else oddCount--;

         col++;
      };

      let row = 0;
      while( row < ogArray.length ) {
         ogArray[row][targetCol]++;

         if( ogArray[row][targetCol] % 2 !== 0 ) oddCount++;
         else oddCount--;

         row++;
      };

   };

   console.log( ogArray );
   console.log( oddCount );

   return oddCount;
};



// Runtime: 80 ms, faster than 74.11% of JavaScript online submissions for Cells with Odd Values in a Matrix.
// Memory Usage: 37.5 MB, less than 67.26% of JavaScript online submissions for Cells with Odd Values in a Matrix.
const countOddCells3 = ( n, m, indices ) => {
   console.time( 'countOddCells3' );
   let ogArray = [];
   for( let i=0; i<n; i++ ) {
      let subArray = new Array(m).fill(0);
      ogArray.push( subArray );
   };

   let oddCount = 0;
   for( let i=0; i<indices.length; i++ ) {
      let targetRow = indices[i][0];
      let targetCol = indices[i][1];

      for( let i=0; i<ogArray[0].length; i++ ) {
         ogArray[targetRow][i]++;

         if( ogArray[targetRow][i] % 2 !== 0 ) oddCount++;
         else oddCount--;
      };

      for( let j=0; j<ogArray.length; j++ ) {
         ogArray[j][targetCol]++;

         if( ogArray[j][targetCol] % 2 !== 0 ) oddCount++;
         else oddCount--;
      };

   };

   // console.log( ogArray );
   // console.log( oddCount );
   console.timeEnd( 'countOddCells3' );

   return oddCount;
};

countOddCells3(2, 3, [ [0,1], [1,1] ]);