// Medium
// https://leetcode.com/problems/word-search/

// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, 
// where "adjacent" cells are horizontally or vertically neighboring. 
// The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 
// Constraints:
// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3


// [ Copied ]
// https://leetcode.com/problems/word-search/discuss/440514/JavaScript-DFS
const isOutOfBound = (board, row, col) => row < 0 || row >= board.length || col < 0 || col >= board[0].length;

const checkNeighbors = (board, word, row, col) => {
    // Check exit conditions
    if (!word.length) return true;
    if (isOutOfBound(board, row, col) || board[row][col] !== word[0]) return false;
    
    // Save some stuff
    const curChar = board[row][col];
    const newWord = word.substr(1);

    board[row][col] = 0; // Disable the current character
    
    // Check if neighbors are fruitful
    const results = checkNeighbors(board, newWord, row + 1, col) ||
        checkNeighbors(board, newWord, row - 1, col) ||
        checkNeighbors(board, newWord, row, col + 1) ||
        checkNeighbors(board, newWord, row, col - 1);

    // Enable current character
    board[row][col] = curChar;

    return results;
};


var exist = function(board, word) {    
    for (let row = 0; row < board.length; row++) {
        for (let col  = 0; col < board[0].length; col++) {
            if (checkNeighbors(board, word, row, col)) return true;
        }
    }
    return false;
};


let board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word1 = "ABCCED";
let board2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word2 = "SEE";
let board3 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word3 = "ABCB";

console.log( exist(board1, word1) );