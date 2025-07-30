// https://leetcode.com/problems/jump-game-ii/solutions/3159127/easy/?envType=study-plan-v2&envId=top-interview-150

export function jump(nums: number[]): number {
  let jumpCount = 0;
  let currentJumpEndRange = 0;
  let maxReach = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    // calculate next possible max jump
    const currentMaxReach = i + nums[i];
    // determine if the current reach or a previously found is the max option in the current range
    maxReach = Math.max(maxReach, currentMaxReach);

    // Check if we've reached the end of the current jump range
    if (i == currentJumpEndRange) {
      jumpCount++;
      currentJumpEndRange = maxReach;
    }
  }

  return jumpCount;
}
