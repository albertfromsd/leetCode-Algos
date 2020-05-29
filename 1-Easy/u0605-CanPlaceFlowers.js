// 605 Easy
// https://leetcode.com/problems/can-place-flowers/

// Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

// Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: True

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: False

// Note:
// The input array won't violate no-adjacent-flowers rule.
// The input array size is in the range of [1, 20000].
// n is a non-negative integer which won't exceed the input array size.

// not working
function canPlaceFlowers0( flowerbed, num ) {

    let tempZeroCount = 0;
    let validFlowerSpots = 0;
    
    for( let i=0; i<flowerbed.length; i++ ) {
        if( flowerbed[i] === 0 ) tempZeroCount += 1;
        else if( flowerbed[i] === 1 ) {
            if( tempZeroCount > 2 ) {
                validFlowerSpots += Math.floor( (tempZeroCount-3)/2 ) + 1;
            };
            tempZeroCount = 0;
        };
    };
    
    return ( validFlowerSpots >= num );
};



// Runtime: 80 ms, faster than 28.85% of JavaScript online submissions for Can Place Flowers.
// Memory Usage: 37.6 MB, less than 20.00% of JavaScript online submissions for Can Place Flowers.
function canPlaceFlowers1( flowerbed, num ) {

    let validFlowerSpots = 0;
    
    let i = 0;
    while( i < flowerbed.length ) {
        if( flowerbed[i] === 0 ) {
            if( flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1 ) {
                validFlowerSpots += 1;
                i += 2;
            } else {
                i += 1;
            };
        } else {
            i += 1;
        };
    };

    console.log( validFlowerSpots >= num );
    return ( validFlowerSpots >= num );
};



const arr0 = [0, 0, 1, 0, 1] // 1 -> true
const arr1 = [1, 0, 0, 0, 1]; // 1 -> true // 2 -> false
const arr2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1]; // 4 -> true // 5 -> false

canPlaceFlowers1( arr1, 2 );