// 200 Medium
// https://leetcode.com/problems/number-of-islands/

// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input:

// 11110
// 11010
// 11000
// 00000
// Output: 1

// Example 2:
// Input:

// 11000
// 11000
// 00100
// 00011
// Output: 3

function countIslands ( arr ) {

    let islandIndices = {};
    let visitedIndices = {};
    let islandCount = 0;

    let queue = [];
    function islandCheck( i, j ) {
        for( let i=0; i<arr.length; i++ ) {
            for( let j=0; j<arr[0].length; j++ ) {
    
            }
        }
    }

    function islandMapper(i, j) {
        let queue = [ arr[i][j] ];
        while( queue.length ) {
            
        }
    }
};