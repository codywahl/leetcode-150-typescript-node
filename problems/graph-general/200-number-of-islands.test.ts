import { describe, it, expect } from "vitest";
import { numIslands } from "./200-number-of-islands";

describe("Number of Islands", () => {
  it("should return the number of islands in the grid", () => {
    const grid1 = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(numIslands(grid1)).toBe(1);

    const grid2 = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numIslands(grid2)).toBe(3);

    const grid3: string[][] = [];
    expect(numIslands(grid3)).toBe(0);
  });
});
