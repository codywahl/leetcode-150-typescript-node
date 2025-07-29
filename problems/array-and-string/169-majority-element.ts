// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
// Uses the Boyer-Moore Voting Algorithm to find the majority element in an array.

export function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    count += nums[i] === candidate ? 1 : -1;
  }

  return candidate; // assume majority element always exists
}
