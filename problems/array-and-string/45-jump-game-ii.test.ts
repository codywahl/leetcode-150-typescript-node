import { describe, it, expect } from "vitest";
import { jump } from "./45-jump-game-ii";

describe("jump", () => {
  it("returns 2 for example 1", () => {
    const nums = [2, 3, 1, 1, 4];
    const expected = 2;
    const result = jump(nums);
    expect(result).toEqual(expected);
  });

  it("returns 2 for example 2", () => {
    const nums = [2, 3, 0, 1, 4];
    const expected = 2;
    const result = jump(nums);
    expect(result).toEqual(expected);
  });
});
