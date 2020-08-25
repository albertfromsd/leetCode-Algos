// Easy
// https://leetcode.com/problems/student-attendance-record-i/

// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) 
// or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:
// Input: "PPALLP"
// Output: True
// Example 2:
// Input: "PPALLL"
// Output: False



// Runtime: 76 ms, faster than 51.28% of JavaScript online submissions for Student Attendance Record I.
// Memory Usage: 36.8 MB, less than 22.49% of JavaScript online submissions for Student Attendance Record I.
const checkRecord = ( str ) => {

   let aExists = false;

   for( let i=0; i<str.length; i++ ) {
      if( str[i] === 'A' ) {

         if( aExists === true ) return false;
         else aExists = true;

      } else if( str[i] === 'L' ) {
         
         if( i+2 > str.length-1 ) return true;
         else if( str[i+1] === 'L' && str[i+2] === 'L' ) return false;
      };
   };

   return true;
};


// Runtime: 72 ms, faster than 64.89% of JavaScript online submissions for Student Attendance Record I.
// Memory Usage: 36.9 MB, less than 17.17% of JavaScript online submissions for Student Attendance Record I.
const checkRecord2 = ( str ) => {
   return str.split('A').length <= 2 && str.indexOf('LLL') === -1;
};


// Runtime: 72 ms, faster than 64.89% of JavaScript online submissions for Student Attendance Record I.
// Memory Usage: 37 MB, less than 10.85% of JavaScript online submissions for Student Attendance Record I.
const checkRecord3 = ( str ) => {
   return (str.match(/A/g) || []).length < 2 && (str.match(/LLL/g) || []).length < 1;
};



const str1 = 'PPALLP';
const str2 = 'PPALLL';
const str3 = 'APALLL';
const str4 = 'PPALLP';
const str5 = 'LAPPLL';
const str6 = 'LLLLLL';

console.log( checkRecord(str6) );
console.log( checkRecord2(str6) );
console.log( checkRecord3(str6) );