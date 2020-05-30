// 849 Med
// https://leetcode.com/problems/hand-of-straights/

// Alice has a hand of cards, given as an array of integers.
// Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

// Return true if and only if she can.


// Example 1:
// Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].

// Example 2:
// Input: hand = [1,2,3,4,5], W = 4
// Output: false
// Explanation: Alice's hand can't be rearranged into groups of 4.

// Note:
// 1 <= hand.length <= 10000
// 0 <= hand[i] <= 10^9
// 1 <= W <= hand.length

function handOfStraights( hand, w ) {
    if( hand.length % w !== 0 ) return false;

    let setOfStraights = [];
    let handCopy = [...hand];
    function arrangeStraights() {
        let subSet = [];
        while( handCopy.length && subSet.length < w ) {
            // need an if-statement to check for validity of straight
            // check for validity of tempMin is equal to +1 of last element in subSet array
            let tempMin = Math.min( ...handCopy );
            let tempMinIndex = handCopy.indexOf( tempMin );
            // if( tempMin !== ( subSet[subSet.length-1] + 1 || !subSet[0] ) ) break;
            subSet.push( ...handCopy.splice( tempMinIndex, 1 ) );
        };
        setOfStraights.push( subSet );
    };

    while( handCopy.length ) {
        arrangeStraights();
        console.log( "HC: ", handCopy );
    };
    
    console.log( setOfStraights );
};

const hand1 = [1,2,3,6,2,3,4,7,8];
const hand2 = [1,2,3,4,5];

handOfStraights( hand1, 3 );