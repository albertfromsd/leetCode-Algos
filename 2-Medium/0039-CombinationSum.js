// Medium
// https://leetcode.com/problems/combination-sum/

// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), 
// find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]

// Example 2:
// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

// Constraints:
// 1 <= candidates.length <= 30
// 1 <= candidates[i] <= 200
// Each element of candidate is unique.
// 1 <= target <= 500

function comboSum( nums, target ) {

   console.log( Math.max(...nums) );
   const numsArr = [...nums];
   // console.log( numsArr );
   // console.log( solutionSet );
   

   // [ current wip ]
   // recursive function call to check if the target can be decremented in bits to eventually reach 0
   // if solution found, check for value existence in the set; then add to set if solution is new
   // must also make sure that the function doesn't infinitely loop over the same solution
   const solutionSet = new Set();
   let subSolution = [];
   let subTarget = target;
   function findNumCanAdd( tempTarget ) {
      let i = 0;
      while( numsArr[i] ) {
         if( numsArr[i] <= subTarget ) {
            subSolution.push( numsArr[i] );

            if( subSolution.reduce( (acc, cum) => acc + cum ) === target && !solutionSet.has(subSolution) ) {
               solutionSet.add( subSolution );
               subSolution = [];
            }
         }
      };
   }

   let temp = target;
   for( let i=0; numsArr[i]; i++ ) {
      
   };

};

const c1 = new Set( [2, 3, 6, 7] );
const t1 = 7;

const c2 = new Set( [2, 3, 5] );
const t2 = 8;

comboSum( c1, t1 );
// comboSum( c2, t2 );

// console.log( JSON.stringify([1, 1, 1]) === JSON.stringify([1, 1, 1]) );