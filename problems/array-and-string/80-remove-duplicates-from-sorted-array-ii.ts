// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let writeIndex = 2;
  for (let readIndex = 2; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] === nums[writeIndex - 2]) {
      continue; // Skip duplicates beyond the second occurrence
    }

    nums[writeIndex] = nums[readIndex];
    writeIndex++;
  }

  return writeIndex;
}
