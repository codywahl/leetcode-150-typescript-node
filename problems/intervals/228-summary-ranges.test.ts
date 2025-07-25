import { describe, expect, it } from "vitest";
import { summaryRanges } from "./228-summary-ranges";

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

describe("summaryRanges", () => {
  it("should return summary ranges for a given array of numbers", () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"]);
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual([
      "0",
      "2->4",
      "6",
      "8->9",
    ]);
  });
});
