// Easy
// https://leetcode.com/problems/keyboard-row/

// Given a List of words, return the words that can be typed using letters of alphabet 
// on only one row's of American keyboard like the image below.
 
// Example:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
 
// Note:
// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.


// Runtime: 68 ms, faster than 92.50% of JavaScript online submissions for Keyboard Row.
// Memory Usage: 36.6 MB, less than 58.50% of JavaScript online submissions for Keyboard Row.
function keyboardRow( words ) {
    let row1 = 'qwertyuiop';
    let row2 = 'asdfghjkl';
    let row3 = 'zxcvbnm';

    let map = {};
    let newWords = [];

    for( const char of row1 ) map[char] = 1;
    for( const char of row2 ) map[char] = 2;
    for( const char of row3 ) map[char] = 3;

    let wordLen = words.length;
    for( let i=0; i<wordLen; i++ ) {
        let word = words[i].toLowerCase();
        let row = map[word[0]];
        let sameRow = true;

        for( const char of word ) {
            if( map[char] !== row ) sameRow = false;
        };
        
        if( sameRow ) newWords.push(words[i])
    };
    
    return newWords;
}

const words1 = ["Hello", "Alaska", "Dad", "Peace"];

keyboardRow( words1 );