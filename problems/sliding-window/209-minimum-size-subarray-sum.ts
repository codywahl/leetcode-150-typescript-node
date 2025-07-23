export function minSubArrayLen(target: number, nums: number[]): number {
  let leftPointer = 0;
  let sum = 0;
  let minimumSubarrayLength = Infinity;

  for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
    sum += nums[rightPointer];

    // Shrink the window from the left as long as the sum is greater than or equal to the target
    while (sum >= target) {
      const currentSubarrayLength = rightPointer - leftPointer + 1;

      minimumSubarrayLength = Math.min(
        minimumSubarrayLength,
        currentSubarrayLength,
      );

      sum -= nums[leftPointer];
      leftPointer++;
    }
  }

  return minimumSubarrayLength === Infinity ? 0 : minimumSubarrayLength;
}
