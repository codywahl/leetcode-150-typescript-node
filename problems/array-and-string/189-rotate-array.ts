// https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

export function rotate(nums: number[], k: number): void {
  if (nums.length === 0 || k < 0) {
    return;
  }

  k = k % nums.length; // Handle cases where k is greater than the length of the array
  if (k === 0) {
    return; // No rotation needed
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
