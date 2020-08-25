// Medium
// https://leetcode.com/problems/shuffle-an-array/

// Shuffle a set of numbers without duplicates.

// Example:
// // Init an array with set 1, 2, and 3.
// int[] nums = {1,2,3};
// Solution solution = new Solution(nums);

// // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
// solution.shuffle();

// // Resets the array back to its original configuration [1,2,3].
// solution.reset();

// // Returns the random shuffling of array [1,2,3].
// solution.shuffle();



// Runtime: 260 ms, faster than 66.05% of JavaScript online submissions for Shuffle an Array.
// Memory Usage: 52.9 MB, less than 64.95% of JavaScript online submissions for Shuffle an Array.
const Solution = function(nums) {
   this.ogNums = nums;
};

Solution.prototype.reset = function() {
    delete this.shuffledNums;
    return this.ogNums;
};

Solution.prototype.shuffle = function() {
   let ogNumsCopy = [ ...this.ogNums ];
   this.shuffledNums = [];
   
   while( ogNumsCopy.length ) {
      let randomOgIndex = Math.floor( Math.random() * ogNumsCopy.length );

      let shuffledItem = ogNumsCopy[randomOgIndex];
      this.shuffledNums.push( shuffledItem );

      ogNumsCopy[randomOgIndex] = ogNumsCopy[ogNumsCopy.length-1];
      ogNumsCopy.pop();
   };
   console.log( this.shuffledNums );
   return this.shuffledNums;
};

const arr1 = [1,2,3];
const solution = new Solution( [1,2,3] );
solution.shuffle();
solution.reset();