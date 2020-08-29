// Medium
// https://leetcode.com/problems/add-two-numbers/

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

class SLNode {
   constructor(value) {
       this.val = value;
       this.next = null;
   };
};


function SumOfTwoSLLs(sll1, sll2) {
   const listHead = new ListNode(0);
   const head = listHead;
   let sum = 0;
   let carry = 0;

   while(sll1!==null||sll2!==null||sum>0){

      if(sll1!==null){
          sum = sum + sll1.val;
          sll1 = sll1.next;
      }
      if(sll2!==null){
          sum = sum + sll2.val;
          sll2 = sll2.next;
      }
      if(sum>=10){
          carry = 1;
          sum = sum - 10;
      }

      head.next = new ListNode(sum);
      head = head.next;

      sum = carry;
      carry = 0;

  }

  return List.next;
};