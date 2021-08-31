// PROBLEM 1 - Two Sum
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

// Time: O(n)
// // We are only passing through the input array one time at most
const twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    // The complement is the value that would add up with this element to our target
    const complement = target - nums[i];
    // If we already encountered our complement, return the index of that value
    // and this one, ie the pair that sums to the target.
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    // If we didn't already encounter the complement, add our value and index to
    // the hash. This will allow us to find the pair if we encounter it later on
    map[nums[i]] = i;
  }
  // If we made it all the way through the for loop, the function returns undefined
};

// PROBLEM 2 - Reverse a linked list
// ============================================================================
// Amazon and Microsoft ask you to show an algorithm that will reverse a singly-linked
// list, that is, a list that is made of nodes between which there is a unidirectional
// association as in the following image.

function reverseList(list) {
  // A list of length <= 1 is the same reversed
  if (list.length <= 1) return list;

  // Our currentNode starts off at the head. As we iterate we want to reverse the
  // order, so the node that is next in the original order will have to be swapped.
  // We'll do that by assigning that nextNode's `next` to be our currentNode.
  let currentNode = list.head;
  let nextNode = currentNode.next;

  // We reverse our pointers for our `tail` and `head` properties.
  list.head = list.tail;
  list.tail = currentNode;

  // Since our currentNode is now the tail, its `next` should be null.
  currentNode.next = null;

  // We loop until we no longer have a nextNode. This will happen after assigning
  // our original tail node to point to what was originally before it in the list.
  // When we reassign our nextNode at the end of the loop to tempNode, it will be
  // null, exiting out of our loop.
  while (nextNode) {
    let tempNode = nextNode.next;
    nextNode.next = currentNode;
    currentNode = nextNode;
    nextNode = tempNode;
  }

  // After our loop, all of our `next` pointers have been reversed. Our `head` and
  // `tail` properties have already been reassigned and our new tail's `next` already
  // points to null. We're ready to return the list, which has been reversed.
  return list;
}
// Our function runs in O(n) time, since we only have to iterate through the list once.
// We also take up O(1) space. We only create three new variables no matter the
// size of the list and do all of our reversing in place.

// PROBLEM 3 - The missing value
// ============================================================================
// Amazon and Microsoft ask you to derive an algorithm that will inspect an
// array of of numbers that contains the values between 0 and the length of the
// list, inclusive, and find the missing value. For example, you may be given an
// array that of length 6 that contains
// [0, 2, 3, 4, 5, 6]
// It is your job to determine that the missing value from the array is 1.

// O(n)
function findNum(arr) {
  let hash = {};

  // Loop through our input array and create a mapping of the value to true
  // This will cost us n iterations up front, but allow us to access the numbers
  // in constant time for future lookup.
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = true;
  }

  let j = 0;
  // Increment from 0 to arr.length, which is all of the potential values that we
  // would expect in our array.
  // When we get to a value that was not found in our first loop, we return that
  // missing number.
  // O(n)
  while (j < arr.length) {
    if (!hash[j]) {
      return j;
    }
    j++;
  }
  // If we made it beyond the while loop, we found all numbers 0 to length - 1,
  // meaning we are missing the last value of arr.length
  // (This also could have been accomplished by looping up to and including the
  // length instead of being exclusive in the conditional.)
  return arr.length;
}

// PROBLEM 4 - Stack min
// ============================================================================
// Google and Apple ask you to design a stack that, in addition to the push and
// pop functions, has a function min that returns the minimum element in the stack
// without removing it. All three functions push, pop, and min should operate in
// O(1) time.

class minStack {
  // We keep track of a separate array that will only get elements added to it if
  // they represent a new minimum value (or tie for the current value)
  constructor() {
    this.elements = [];
    this.mins = [];
  }

  push(val) {
    this.elements.push(val);
    const curMin = this.mins[this.mins.length - 1];
    // If we don't have a minimum yet (first element pushed), or if this value is
    // a new minimum (or equal value), we also push it into the mins array.
    if (this.mins.length === 0 || val <= curMin) {
      this.mins.push(val);
    }
  }

  pop() {
    const popped = this.elements.pop();
    const curMin = this.mins[this.mins.length - 1];
    // If the element we just removed was also the current minimum, we remove it
    // from our mins array. The element at the end of our mins array will always
    // represent our current minimum.
    if (popped === curMin) this.mins.pop();
    return popped;
  }

  min() {
    // Since the element at the end of mins is always our minimum, we can key
    // directly in to see that value no matter where it is in the stack.
    return this.mins[this.mins.length - 1];
  }
}

// PROBLEM 5 - Test a retractable ballpoint pen
// ============================================================================

// Facebook asks you to write the tests cases for testing a ballpoint pen.
// What would you consider to be good tests for the pen?
// Try to be as exhaustive as possible.

// Basic Functionality
// The pen has a clicking/retracting functionality
// Clicking the pen from a retracted position extends the pen
// Clicking the pen from an extended position retracts the pen
// You are able to write from an extended position
// You are not able to write from a retracted position
// Additional Desired Functionality
// Writing large amounts results in smooth lettering (no missing letters, lines, etc.)
// Ink does not fade while writing (coloring is consisitent, compare beginning to end)
// Ink does not smudge (test interacting with lettering and compare after interaction)
// Ink is waterproof
// The pen can write on desired surfaces (glossy, smooth, rough, etc.)
// The pen lasts for at least X pages (test a new pen and make sure output is possible for X pages)
// etc.

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

// This is mostly pseudocode
// The important aspects are being able to define the roles that you have
// Possible changes:
// // Using a Car class instead of a plain object to fill spaces
// // Account for minimum charges or a max daily rate when calculating fees
class ParkingLot {
  constructor(numSpaces) {
    // track the spaces in the lot
    // track the number of vacancies
    this.spaces = new Array(numSpaces).fill(null);
    this.vacancies = numSpaces;
    this.nextAvailableSpace = 0;
  }

  fillSpot(plateNumber, keyLocation) {
    // return false if !this.spotAvailable()
    // decrement vacancies
    // Add in to this.spaces[this.nextAvailableSpace] { entryTime: Date.now(), plateNumber, keyLocation }
    // check this.spaces at this.nextAvailableSpace+1, incrementing until a vacancy is found. Reassign this.nextAvailableSpace
  }

  spotAvailable() {
    // return if vacancies > 0
  }

  calculateFee(spaceNumber) {
    // Get vehicle info with this.spaces[spaceNumber]
    // Take time of entry (vehicle.entryTime) and time of exit (Date.now()) on object
    // calculate based on time in each fee window
    const { entryTime } = this.spaces[spaceNumber];
    const exitTime = Date.now();
    let totalFee = 0;
    if (entryTime.getHours() < 6) {
      const hours = 6 - entryTime.getHours() - 1;
      const fraction = (60 - getMinutes()) / 60; // add fraction of hour
      totalFee += (hours + fraction) * 3; // multiply by rate
    } // etc.
  }

  removeVehicle(spaceNumber) {
    // calculateFee
    // increment vacancies
    // reassign this.spaces[spaceNumber] = null
  }

  inspectSpace(spaceNumber) {
    // return the vehicle at this.spaces[spaceNumber];
  }

  findByPlate(plateNumber) {
    // iterate over this.spaces
    // if a vehicle exists, compare the plateNumber argument to the object
    // if it is a match, return the spaceNumber (index of this.spaces where match exists)
  }
}

// PROBLEM 7 - Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
// ============================================================================

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = function (s) {
  const stack = [];
  const openings = { "(": ")", "{": "}", "[": "]" };
  const closings = { ")": "(", "}": "{", "]": "[" };
  for (let i = 0; i < s.length; i++) {
    // If the character is an opening, we push it on to the stack
    if (openings[s[i]]) {
      stack.push(s[i]);
      // If it is a closing, it has to match the top opening on the stack
      // If it does, pop the opening off of the stack
    } else if (closings[s[i]] === stack[stack.length - 1]) {
      stack.pop();
      // The only way we get to the else is if it is a closing that does not match
      // In this case, we return false immediately
    } else {
      return false;
    }
  }
  // If we made it out of the for loop without invalid closings, we just have to
  // make sure all of our openings were closed.
  // This occurs when our stack is empty, indicating no unmatched characters.
  return stack.length === 0;
};
