// 621 Medium
// https://leetcode.com/problems/task-scheduler/

// Given a char array representing tasks CPU need to do. 
// It contains capital letters A to Z where different letters represent different tasks. 
// Tasks could be done without original order. Each task could be done in one interval. 
// For each interval, CPU could finish one task or just be idle.

// However, there is a non-negative cooling interval n that means between two same tasks, 
// there must be at least n intervals that CPU are doing different tasks or just be idle.

// You need to return the least number of intervals the CPU will take to finish all the given tasks.

// Example:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 
// Constraints:
// The number of tasks is in the range [1, 10000].
// The integer n is in the range [0, 100].

function taskScheduler( tasks, n ) {
    let moveCount = 0;
    let completedTasks = [];

    let i = 0;
    while( i < tasks.length ) {
        // this only works for n=2, find way to implement varying n values
        // should be && instead of ||
        if( tasks[i] !== completedTasks[completedTasks.length-1] || tasks[i] !== completedTasks[completedTasks.length-2] ) {
            completedTasks.push( tasks[i] );
            moveCount += 1;

            i += 1;
        } else {
            completedTasks.push( 'idle' );
            moveCount += 1;
        }

    };

    // returns an array that is inconsistent with the example output
    console.log( completedTasks );
    console.log( completedTasks.length );
    return completedTasks.length;
};

const tasks1 = ["A","A","A","B","B","B"];
taskScheduler( tasks1, 2 );