// Easy
// https://leetcode.com/problems/lemonade-change/

// At a lemonade stand, each lemonade costs $5. 

// Customers are standing in a queue to buy from you, 
// and order one at a time (in the order specified by bills).

// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  
// You must provide the correct change to each customer, 
// so that the net transaction is that the customer pays $5.

// Note that you don't have any change in hand at first.
// Return true if and only if you can provide every customer with correct change.

// Example 1:
// Input: [5,5,5,10,20]
// Output: true
// Explanation: 
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

// Example 2:
// Input: [5,5,10]
// Output: true

// Example 3:
// Input: [10,10]
// Output: false

// Example 4:
// Input: [5,5,10,10,20]
// Output: false
// Explanation: 
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can't give change of $15 back because we only have two $10 bills.
// Since not every customer received correct change, the answer is false.
 
// Note:
// 0 <= bills.length <= 10000
// bills[i] will be either 5, 10, or 20.


// Runtime: 96 ms, faster than 30.73% of JavaScript online submissions for Lemonade Change.
// Memory Usage: 39.7 MB, less than 12.20% of JavaScript online submissions for Lemonade Change.
function lemonadeChange( bills ) {
    let changeMap = {};

    for( const bill of bills ) {
        changeMap[bill] = changeMap[bill]+1 || 1;

        if( bill === 10 ) {
            if( changeMap[5] > 0 ) changeMap[5]--;
            else return false;
        } else if( bill === 20 ) {
            if( changeMap[10] > 0 && changeMap[5] > 0 ) {
                changeMap[10]--;
                changeMap[5]--;
            } else if( changeMap[5] > 2 ) changeMap[5] -= 3;
            else return false;
        };
    };

    return true;
};

// https://leetcode.com/problems/lemonade-change/discuss/242366/Javascript-Solution
// Runtime: 84 ms, faster than 59.02% of JavaScript online submissions for Lemonade Change.
// Memory Usage: 38.7 MB, less than 46.83% of JavaScript online submissions for Lemonade Change.
function lemonadeChangeCopied(bills) {
    let five = 0;
    let ten = 0;
    
    for (let bill of bills) {
        if (bill === 5) {
            ++five;
        } else if (five < 1) {
            return false;
        } else if (bill === 10) {
            --five;
            ++ten;
        } else {
            --five;
            if (ten > 0) {
                --ten;
            } else if (five >= 2) {
                five -= 2;
            } else {
                return false;
            }
        }
    }
    return true;
}

const bills1 = [5,5,5,10,20]; // true
const bills2 = [5,5,10]; // true
const bills3 = [10, 10]; // false
const bills4 = [5,5,10,10,20]; // false

const bills5 = [5, 10, 5, 20, 5] // true

console.log( lemonadeChange2( bills4 ) );