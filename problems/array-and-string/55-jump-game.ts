// https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

export function canJump(nums: number[]): boolean {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    const jumpsFromHere = nums[i];

    if (i + jumpsFromHere >= goal) {
      goal = i;
    }
  }

  return goal === 0;
}
