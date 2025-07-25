import { describe, expect, it } from "vitest";
import { isAnagram } from "./242-valid-anagram";

// cspell:ignore nagaram

describe("Valid Anagram", () => {
  it("should return true for valid anagrams", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it("should return false for strings of different lengths", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
});
