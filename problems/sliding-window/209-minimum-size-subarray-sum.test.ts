import { describe, it, expect } from "vitest";
import { minSubArrayLen } from "./209-minimum-size-subarray-sum";

describe("Minimum Size Subarray Sum", () => {
  it("should return the minimum size of subarray with sum at least target", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
  });
});
