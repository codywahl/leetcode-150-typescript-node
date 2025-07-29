import { describe, expect, it } from "vitest";
import { majorityElement } from "./169-majority-element";

describe("majorityElement", () => {
  it("should return the majority element for example 1", () => {
    const nums = [3, 2, 3];
    const result = majorityElement(nums);
    expect(result).toBe(3);
  });

  it("should return the majority element for example 2", () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    const result = majorityElement(nums);
    expect(result).toBe(2);
  });
});
