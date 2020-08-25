// Easy
// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

// Given an array of unique integers salary where salary[i] is the salary of the employee i.
// Return the average salary of employees excluding the minimum and maximum salary.

// Example 1:
// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500

// Example 2:
// Input: salary = [1000,2000,3000]
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000)/1= 2000

// Example 3:
// Input: salary = [6000,5000,4000,3000,2000,1000]
// Output: 3500.00000

// Example 4:
// Input: salary = [8000,9000,2000,3000,6000,1000]
// Output: 4750.00000
 
// Constraints:
// 3 <= salary.length <= 100
// 10^3 <= salary[i] <= 10^6
// salary[i] is unique.
// Answers within 10^-5 of the actual value will be accepted as correct.



// Runtime: 68 ms, faster than 83.27% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
// Memory Usage: 36.7 MB, less than 18.38% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
const findAvgSalary = salaries => {
   if( salaries.length < 3 ) return 0;

   let max = -Infinity, min = Infinity, sum = 0;
   for( const salary of salaries ) {
      if( salary > max ) max = salary;
      if( salary < min ) min = salary;

      sum += salary;
   };

   console.log( (sum-max-min)/(salaries.length-2) );
   return (sum-max-min)/(salaries.length-2);
};


// Runtime: 72 ms, faster than 68.57% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
// Memory Usage: 36.3 MB, less than 40.56% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
const findAvgSalary2 = salaries => {
   if( salaries.length < 3 ) return 0;

   let sum = salaries.reduce( (acc, cur) => acc + cur );

   console.log( (sum - Math.max(...salaries) - Math.min(...salaries)) / (salaries.length-2) );
   return (sum - Math.max(...salaries) - Math.min(...salaries)) / (salaries.length-2);
};

const salaries1 = [4000,3000,1000,2000];
const salaries2 = [1000,2000,3000];
const salaries3 = [6000,5000,4000,3000,2000,1000];
const salaries4 = [8000,9000,2000,3000,6000,1000];

findAvgSalary(salaries4);
findAvgSalary2(salaries4);