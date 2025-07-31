import { describe, expect, it } from "vitest";
import { RandomizedSet } from "./380-insert-delete-get-random-o1";

describe("RandomizedSet", () => {
  it("should pass all functions of example 1", () => {
    const randomizedSet = new RandomizedSet();
    expect(randomizedSet.insert(1)).toBe(true); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
    expect(randomizedSet.remove(2)).toBe(false); // Returns false as 2 does not exist in the set.
    expect(randomizedSet.insert(2)).toBe(true); // Inserts 2 to the set, returns true. Set now contains [1,2].
    const random1 = randomizedSet.getRandom();
    expect(random1 === 1 || random1 === 2).toBe(true); // getRandom() should return either 1 or 2 randomly.

    expect(randomizedSet.remove(1)).toBe(true); // Removes 1 from the set, returns true. Set now contains [2].
    expect(randomizedSet.insert(2)).toBe(false); // 2 was already in the set, so return false.
    expect(randomizedSet.getRandom()).toEqual(2); // Since 2 is the only number in the set, getRandom() will always return 2.
  });
});
