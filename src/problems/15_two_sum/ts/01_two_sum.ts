/*
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Source: https://leetcode.com/problems/two-sum/
*/

export type Nums = Array<number>;
export type Target = number;

// O(nˆ2) time complexity solution
export const findIndexesSquaredTime = (nums: Nums, target: Target) => {
  for (let j = 0; j < nums.length; j++) {
    checkConstrains(nums, target, j);

    for (let k = 0; k < nums.length; k++) {
      if (j === k) {
        continue;
      }

      if (nums[j] + nums[k] === target) {
        return [j, k];
      }
    }
  }

  throw new Error('No solution found');
};

// O(n log n) time complexity solution
export const findIndexesNLogNTime = (nums: Nums, target: Target) => {
  const numsEntries = Array.from(nums.entries()).sort((a, b) => a[1] - b[1]); // O(log n)

  // (O n)
  let left = 0;
  let right = nums.length - 1;
  for (let j = 0; j < numsEntries.length; j++) {
    checkConstrains(nums, target, j);

    const currentSum = numsEntries[left][1] + numsEntries[right][1];
    if (currentSum === target) {
      return [numsEntries[left][0], numsEntries[right][0]];
    } else if (currentSum > target) {
      right--;
    } else {
      left++;
    }
  }

  throw new Error('No solution found');
};

// O(n) time complexity solution
export const findIndexesNTime = (nums: Nums, target: Target) => {
  const myHashMap = new Map();

  for (let j = 0; j < nums.length; j++) {
    checkConstrains(nums, target, j);

    const current = nums[j];
    const difference = target - current;

    if (myHashMap.has(difference)) {
      return [myHashMap.get(difference), j];
    }

    if (myHashMap.has(current)) {
      continue;
    }

    myHashMap.set(nums[j], j);
  }

  throw new Error('No solution found');
};

const checkConstrains = (nums: Nums, currentIndex: number, target: number) => {
  if (nums.length < 2 || 104 < nums.length) {
    console.log('test::nums.length: ', nums.length);

    throw new Error('Array length out of bounds');
  }

  if (nums[currentIndex] < -109 || 109 < nums[currentIndex]) {
    throw new Error('Current index out of bounds');
  }

  if (target < -109 || 109 < target) {
    throw new Error('Current index out of bounds');
  }
};
