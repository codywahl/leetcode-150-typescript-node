// https://leetcode.com/problems/two-sum/description/?envType=study-plan-v2&envId=top-interview-150

export function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      map.set(nums[i], i);
      continue;
    }

    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  return [];
}
