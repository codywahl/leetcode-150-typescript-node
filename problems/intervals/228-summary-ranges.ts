// https://leetcode.com/problems/summary-ranges/description/?envType=study-plan-v2&envId=top-interview-150

export function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) {
    return [];
  }

  const ranges: string[] = [];

  let rangeStart = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    const currentNum = nums[i];
    const previousNum = nums[i - 1];

    if (i === nums.length || currentNum !== previousNum + 1) {
      // Range ended
      ranges.push(printRange(rangeStart, previousNum));
      rangeStart = currentNum; // Start new range
    }
  }

  return ranges;
}

function printRange(start: number, end: number): string {
  return start === end ? String(start) : `${start}->${end}`;
}
