// 0036 (Medium)
// https://leetcode.com/problems/valid-sudoku/

// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// A partially filled sudoku which is valid.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// Example 1:

// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Example 2:

// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being 
//     modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.


// Runtime: 88 ms, faster than 34.70% of JavaScript online submissions for Valid Sudoku.
// Memory Usage: 39.1 MB, less than 26.67% of JavaScript online submissions for Valid Sudoku.
const validSudoku = ( arr ) => {
    if( arr.length !== 9 || arr[0].length !== 9 ) return false;
    
    for( let i=0; i<9; i++ ) {
        for( let j=0; j<9; j++ ) {
            if( arr[i][j] != '.' ) {
                if( isValid( arr, i, j, arr[i][j] ) == false ) return false;
            }
        }
    }
    return true;

    function isValid( arr, i, j, num ) {
        for( let r=0; r<9; r++ ) {
            if( r != i && arr[r][j] == num ) return false;
        };

        for( let c=0; c<9; c++ ) {
            if( c != j && arr[i][c] == num ) return false;
        };

        let subRow;
        if( i < 3 ) subRow = 0;
        else if( i > 5 ) subRow = 6;
        else subRow = 3;

        let subCol;
        if( j < 3 ) subCol = 0;
        else if( j > 5 ) subCol = 6;
        else subCol = 3;

        for( let r=0; r<3; r++ ) {
            for( let c=0; c<3; c++ ) {
                let ii = subRow + r;
                let jj = subCol + c;

                if( ii != i && jj != j && arr[ii][jj] == num ) return false;
            };
        };
        return true;
    };

};

const arr1 = 
    [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ];

const arr2 = 
    [
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ];

const arr3 = 
    [
        ["8",".",".",".","7",".",".",".","."],
        [".",".","8","1","9","5",".",".","."],
        ["8",".","1",".",".",".","5","6","."],
        ["7",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".","6",".","8",".",".","7","9"]
    ];

console.log( validSudoku( arr1 ) );
// validSudoku0(arr2);


// function validSudoku0(arr) {
//     if( arr.length !== 9 || arr[0].length !== 9 ) return "Matrix array must be 9x9";

//     let numsAtIndex = {};

//     for( let i=0; i<9; i++ ) {
//         for( let j=0; j<9; j++ ) {
//             if( arr[i][j] !== "." ) {
//                 let char = arr[i][j]
//                 numsAtIndex[char]
//                     ? numsAtIndex[char].push( [i, j] )
//                     : numsAtIndex[char] = [ [i,j] ];
//             };
//         };
//     };

//     const objTest = Object.entries(numsAtIndex);
//     console.log( objTest );

//     // console.log(numsAtIndex);
//     return numsAtIndex;

// };

// function validSudoku1(arr) {
//     if( arr.length !== 9 || arr[0].length !== 9 ) return false;

//     let rowContents = {};
//     let colContents = {};

//     for( let i=0; i<9; i++ ) {
//         for( let j=0; j<9; j++ ) {
//             if( arr[i][j] !== "." ) {
//                 let char = arr[i][j]
//                 rowContents[i]
//                     ? rowContents[i].push( char )
//                     : rowContents[i] = [ char ];
//                 colContents[j]
//                     ? colContents[j].push( char )
//                     : colContents[j] = [ char ];
//             };
//         };
//     };

//     console.log( "RowC:", rowContents );
//     console.log( "ColC:", colContents );
    

//     for( let row in rowContents ) {
//         // check all same rows here
//         let charTracker = {};
//         for( let i=0; i<rowContents[row].length; i++ ) {
//             let char = rowContents[row[i]];
//             charTracker[char] = ( charTracker[char] || 0 ) + 1;
//             if( charTracker[rowContents[row][i]] > 1 ) return false;

//             if( row < 3 ) {
//                 for( let i=0; i<3; i++ ) {
//                     if( i === parseInt( row, 10 ) && rowContents[row[i]] === char ) return false;
                    
//                 };
//             } else if( row > 5 ) {
//                 for( let i=6; i<9; i++ ) {
//                     if( i === parseInt( row, 10 ) ) continue;
//                     // iterate through the row list to make sure there are no repeats
//                     // may need a new obj to keep track
//                 };
//             } else {
//                 for( let i=3; i<6; i++ ) {
//                     if( i === parseInt( row, 10 ) ) continue;
//                     // iterate through the row list to make sure there are no repeats
//                     // may need a new obj to keep track
//                 };
//             };
//         }
        
//     };

//     for( let col in colContents ) {
//         // check all same columns here
//         let charTracker = {};
//         for( let i=0; i<colContents[col].length; i++ ) {
//             charTracker[colContents[col][i]] = ( charTracker[colContents[col][i]] || 0 ) + 1;
//             if( charTracker[colContents[col][i]] > 1 ) return false;
    
//         }

//         // // below is checking the 3x3 mini-squares
//         // if( col < 3 ) {
//         //     for( let i=0; i<3; i++ ) {
//         //         if( i === parseInt( row, 10 ) ) continue;
//         //         // iterate through the row list to make sure there are no repeats
//         //         // may need a new obj to keep track
//         //     };
//         // } else if( col > 5 ) {
//         //     for( let i=6; i<9; i++ ) {
//         //         if( i === parseInt( row, 10 ) ) continue;
//         //         // iterate through the row list to make sure there are no repeats
//         //         // may need a new obj to keep track
//         //     };
//         // } else {
//         //     for( let i=3; i<6; i++ ) {
//         //         if( i === parseInt( row, 10 ) ) continue;
//         //         // iterate through the row list to make sure there are no repeats
//         //         // may need a new obj to keep track
//         //     };
//         // };
//     };


//     // console.log( rowEntries );
//     // console.log( colEntries );

//     // console.log(numsAtIndex);
//     return;
// }


