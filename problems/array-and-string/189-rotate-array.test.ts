import { describe, expect, it } from "vitest";
import { rotate } from "./189-rotate-array";

describe("rotate", () => {
  it("should rotate the array [1,2,3,4,5,6,7] by 3 positions", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    rotate(nums, k);
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("should rotate the array [-1,-100,3,99] by 2 positions", () => {
    const nums = [-1, -100, 3, 99];
    const k = 2;
    rotate(nums, k);
    expect(nums).toEqual([3, 99, -1, -100]);
  });

  it("should handle a k value greater than the array length", () => {
    const nums = [-1];
    const k = 2;
    rotate(nums, k);
    expect(nums).toEqual([-1]);
  });
});
