import { describe, expect, it } from "vitest";
import { hIndexSorting, hIndexCountingSort } from "./274-h-index";

describe("hIndexSorting", () => {
  it("should return 3 for example 1", () => {
    const input = [3, 0, 6, 1, 5];
    const expected = 3;
    const result = hIndexSorting(input);
    expect(result).toEqual(expected);
  });

  it("should return 1 for example 2", () => {
    const input = [1, 3, 1];
    const expected = 1;
    const result = hIndexSorting(input);
    expect(result).toEqual(expected);
  });

  it("should return 1 for example 3", () => {
    const input = [100];
    const expected = 1;
    const result = hIndexSorting(input);
    expect(result).toEqual(expected);
  });

  it("should return 4 for example 4", () => {
    const input = [6, 6, 4, 8, 4, 3, 3, 10];
    const expected = 4;
    const result = hIndexSorting(input);
    expect(result).toEqual(expected);
  });
});

describe("hIndexCountingSort", () => {
  it("should return 3 for example 1", () => {
    const input = [3, 0, 6, 1, 5];
    const expected = 3;
    const result = hIndexCountingSort(input);
    expect(result).toEqual(expected);
  });

  it("should return 1 for example 2", () => {
    const input = [1, 3, 1];
    const expected = 1;
    const result = hIndexCountingSort(input);
    expect(result).toEqual(expected);
  });
});
