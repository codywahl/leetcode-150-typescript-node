import { maxArea } from "./11-container-with-most-water";
import { describe, expect, it } from "vitest";

describe("maxArea", () => {
  it("should return the maximum area of water that can be contained", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea([1, 1])).toBe(1);
  });
});
