// 122 Easy
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


// Runtime: 352 ms, faster than 11.77% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 37 MB, less than 7.41% of JavaScript online submissions for Best Time to Buy and Sell Stock.
function BestTimeToBuySellStock(arr) {
    let maxProfit = -Infinity;
    for( let i=0; i<arr.length; i++ ) {
        for( let j=i+1; j<arr.length; j++ ) {
            if( arr[j] - arr[i] > maxProfit ) {
                maxProfit = arr[j] - arr[i];
            };
        };
    };

    if( maxProfit < 0 ) {
        maxProfit = 0;
    };

    return maxProfit;
};

// [ copied ]
// Runtime: 80 ms, faster than 74.23% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 37.4 MB, less than 51.65% of JavaScript online submissions for Best Time to Buy and Sell Stock.
var maxProfit = function(prices) {
    let currentLow = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        currentLow = Math.min(currentLow, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - currentLow)
    }
    return maxProfit
}


const arr1 = [7, 6, 4, 3, 1];
const arr2 = [7, 1, 5, 3, 6, 4];

console.log( BestTimeToBuySellStock(arr1) );