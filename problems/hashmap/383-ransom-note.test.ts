import { describe, it, expect } from "vitest";
import { canConstruct } from "./383-ransom-note";

// cspell:ignore aabbcc

describe("Ransom Note", () => {
  it("should return false if ransom note cannot be constructed from magazine", () => {
    expect(canConstruct("a", "b")).toBe(false);
    expect(canConstruct("aa", "ab")).toBe(false);
  });

  it("should return true if ransom note can be constructed from magazine", () => {
    expect(canConstruct("aa", "aab")).toBe(true);
  });
});
