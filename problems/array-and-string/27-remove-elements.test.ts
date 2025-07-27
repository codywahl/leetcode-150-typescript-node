import { describe, it, expect } from "vitest";
import { removeElement } from "./27-remove-element";

describe("Remove Element", () => {
  //     Input: nums = [3,2,2,3], val = 3
  // Output: 2, nums = [2,2,_,_]
  it("should remove elements equal to val", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const k = removeElement(nums, val);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([2, 2]);
  });

  it("should handle multiple occurrences of val", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const k = removeElement(nums, val);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 3, 0, 4]);
  });
});
