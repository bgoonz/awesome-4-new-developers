/*https://leetcode.com/problems/majority-element/description/

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.*/

const majorityElement = (nums) => {
  const len = nums.length;

  if (len == 1) return nums[0];

  // Empty hash to hold a key-value pair. The key is the majority-element, and the value being the number of times of occurrances of the majority element
  const majorElement = {};

  for (let i = 0; i < len; i++) {
    const currentElm = nums[i];

    // If the current element already exist in the hash, then increment the count of it. Also check if the count has exceeded [n/2] after incrementing then just reuturn that element, and program execution stops here.

    if (majorElement.hasOwnProperty(currentElm)) {
      majorElement[currentElm]++;
      if (majorElement[currentElm] > len / 2) return currentElm;
    } else {
      majorElement[currentElm] = 1; // Create the current element in the hash for the first time
    }
  }
  return "not found";
};

const num = [1, 1, 1, 1, 3, 4, 5];
console.log(majorityElement(num));
