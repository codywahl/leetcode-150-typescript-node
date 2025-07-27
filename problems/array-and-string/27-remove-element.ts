// https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

export function removeElement(nums: number[], val: number): number {
  if (nums.length === 0) {
    return 0;
  }

  let writeIndex = 0;
  for (let readIndex = 0; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== val) {
      nums[writeIndex] = nums[readIndex];
      writeIndex++;
    }
  }

  return writeIndex;
}
