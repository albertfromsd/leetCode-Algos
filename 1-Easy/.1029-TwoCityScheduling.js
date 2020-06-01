// 1029 Easy
// https://leetcode.com/problems/two-city-scheduling/

// There are 2N people a company is planning to interview. 
// The cost of flying the i-th person to city A is costs[i][0], 
// and the cost of flying the i-th person to city B is costs[i][1].

// Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

 

// Example 1:
// Input: [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation: 
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
 

// Note:
// 1 <= costs.length <= 100
// It is guaranteed that costs.length is even.
// 1 <= costs[i][0], costs[i][1] <= 1000

function twoCityScheduling( arr ) {
    let totalCost = 0;
    let costDifference = [];
    let personTracker = {A: 0, B: 0};

    for( let i=0; i<arr.length; i++ ) {
        costDifference.push( arr[i][0] - arr[i][1] );
    };

    while( costDifference.length ) {
        let maxDiff = -Infinity;
        let maxIndex;
        for( let i=0; i<costDifference.length; i++ ) {
            if( Math.abs( costDifference[i] > maxDiff ) ) {
                maxDiff = costDifference[i];
                maxIndex = i;
            };
        };
        if( maxDiff > 0 ) {
            if( personTracker['A'] < arr.length/2 ) {
                personTracker['A']++;
                totalCost += Math.min( ...arr[maxIndex] );
                arr.splice( maxIndex, 1 );
                costDifference.splice( maxIndex, 1 );
            }
        } else {
            if ( personTracker['B'] < arr.length/2 ) {
                personTracker['B']++;
                totalCost += Math.min( ...arr[maxIndex] );
                arr.splice( maxIndex, 1 );
                costDifference.splice( maxIndex, 1 );
            }
        }
        
        console.log( maxDiff );
        console.log( maxIndex );
        console.log( totalCost );
    };

    return totalCost;
};
const arr1 = [[10,20],[30,200],[400,50],[30,20]];
twoCityScheduling( arr1 );