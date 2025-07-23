import { add } from "./math";

import { describe, it, expect } from "vitest";

describe(`Math Functions`, () => {
  it(`should add two numbers correctly`, () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  it(`should handle adding negative numbers`, () => {
    expect(add(-2, -3)).toBe(-5);
    expect(add(-1, -1)).toBe(-2);
  });
});
