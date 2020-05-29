// 1108 Easy
// https://leetcode.com/problems/defanging-an-ip-address/

// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"


// Constraints:
// The given address is a valid IPv4 address.

// Runtime: 52 ms, faster than 70.32% of JavaScript online submissions for Defanging an IP Address.
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Defanging an IP Address.

function defangIPAddress(str) {
    let newArr = str.split('');

    for( let i=0; i<newArr.length; i++ ) {
        if( newArr[i] === '.') {
            newArr[i] = '[.]';
        };
    };

    return newArr.join('');
};

const str1 = "1.1.1.1";
const str2 = "255.100.50.0";

console.log( defangIPAddress(str2) );