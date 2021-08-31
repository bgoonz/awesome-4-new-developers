// PROBLEM 1 - Two Sum
//Author: Bryan Guner
// https://leetcode.com/problems/two-sum/
// ============================================================================
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 105
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// PROBLEM 2 - Reverse a linked list
// ============================================================================
// Amazon and Microsoft ask you to show an algorithm that will reverse a singly-linked
// list, that is, a list that is made of nodes between which there is a unidirectional
// association as in the following image.

// PROBLEM 3 - The missing value
// ============================================================================
// Amazon and Microsoft ask you to derive an algorithm that will inspect an
// array of of numbers that contains the values between 0 and the length of the
// list, inclusive, and find the missing value. For example, you may be given an
// array that of length 6 that contains
// [0, 2, 3, 4, 5, 6]
// It is your job to determine that the missing value from the array is 1.

// PROBLEM 4 - Stack min
// ============================================================================
// Google and Apple ask you to design a stack that, in addition to the push and
// pop functions, has a function min that returns the minimum element in the stack
// without removing it. All three functions push, pop, and min should operate in
// O(1) time.

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
    this.minArr = [];
  }

  push(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.top = newNode;
      this.minArr.push(newNode.value);
    } else {
      newNode.next = this.top;
      this.top = newNode;
      if (newNode.value < this.min()) {
        this.minArr.push(newNode.value);
      }
    }
    this.length++;
  }

  pop() {
    const removedTop = this.top;

    if (this.length === 0) return null;

    if (this.length === 1) {
      this.top = null;
      minArr = [];
    } else {
      this.top = removedTop.next;
      if (removedTop.value === this.min()) this.minArr.pop();
    }
    this.length--;
    return removedTop.value;
  }

  min() {
    return this.minArr[this.minArr.length - 1];
  }
}

// const stack = new Stack();
// stack.push(5)
// stack.push(2)
// stack.push(1)
// stack.push(-1)
// stack.push(7)
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()

// console.log(stack);
// console.log('min:', stack.min());

// PROBLEM 5 - Test a retractable ballpoint pen
// ============================================================================

//Facebook asks you to write the tests cases for testing a ballpoint pen.
// What would you consider to be good tests for the pen?
// Try to be as exhaustive as possible.

// PROBLEM 6 - OOParking Lot
// ============================================================================

// Amazon and Microsoft ask you to specify the classes that it would take to write
// software to manage a paid parking lot. It should know where cars are parked,
// be able to identify the cars, know where the keys are hanging, how many cars
// are in the lot, what time the cars come and go, and how much it costs someone
// when they leave the parking lot based on the following schedule:

// Time	       -> Rate per hour
// 8pm - 6am	    $3
// 6am - noon	    $10
// noon - 6pm	    $8
// 6pm - 8pm	    $6

// PROBLEM 7 - Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
// ============================================================================

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
