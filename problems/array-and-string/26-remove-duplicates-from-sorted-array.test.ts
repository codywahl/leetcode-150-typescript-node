import { describe, expect, it } from "vitest";
import { removeDuplicates } from "./26-remove-duplicates-from-sorted-array";

describe("removeDuplicates", () => {
  it("should return 2 for input [1,1,2]", () => {
    const nums = [1, 1, 2];
    const length = removeDuplicates(nums);
    expect(length).toBe(2);
    expect(nums.slice(0, length)).toEqual([1, 2]);
  });

  it("should return 5 for input [0,0,1,1,1,2,2,3,3,4]", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const length = removeDuplicates(nums);
    expect(length).toBe(5);
    expect(nums.slice(0, length)).toEqual([0, 1, 2, 3, 4]);
  });
});
