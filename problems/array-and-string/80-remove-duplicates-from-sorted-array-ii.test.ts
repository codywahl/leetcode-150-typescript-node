import { describe, it, expect } from "vitest";
import { removeDuplicates } from "./80-remove-duplicates-from-sorted-array-ii";

describe("removeDuplicates", () => {
  it("should pass example 1", () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const length = removeDuplicates(nums);
    expect(length).toBe(5);
    expect(nums.slice(0, length)).toEqual([1, 1, 2, 2, 3]);
  });

  it("should pass example 2", () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const length = removeDuplicates(nums);
    expect(length).toBe(7);
    expect(nums.slice(0, length)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });
});
