// Easy
// https://leetcode.com/problems/merge-sorted-array/

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

// Example:
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// Output: [1,2,2,3,5,6]
 
// Constraints:
// -10^9 <= nums1[i], nums2[i] <= 10^9
// nums1.length == m + n
// nums2.length == n

// brute force: 
// double pointer
// javascript sort method

// [ copied ]
// https://leetcode.com/problems/merge-sorted-array/discuss/29680/Short-Javascript-Solution
// Runtime: 80 ms, faster than 50.12% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 36.6 MB, less than 65.60% of JavaScript online submissions for Merge Sorted Array.
function merge( nums1, m, nums2, n ) {

   while (n > 0) {
      if (m >= 0 && nums1[m - 1] > nums2[n - 1]) nums1[m + n - 1] = nums1[--m];
      else nums1[m + n - 1] = nums2[--n];
   }

   console.log( {nums1} );
};

// [ copied ]
// https://leetcode.com/problems/merge-sorted-array/discuss/670661/Javascript-and-C%2B%2B-solutions
// Runtime: 100 ms, faster than 20.06% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 37 MB, less than 29.91% of JavaScript online submissions for Merge Sorted Array.
let merge2 = (A, M, B, N) => {
   for (let i = M; i < M + N; ++i)
       A[i] = B[i - M];
   A.sort((a, b) => a - b);
};

const nums1 = [1,2,3,0,0,0], m1 = 3;
const nums2 = [2, 5, 6], n2 = 3;
const nums3 = [1], m3 = 1;

// nums1.splice(2, 0, 99);
// console.log( nums1 );

merge( nums1, m1, nums2, n2 );