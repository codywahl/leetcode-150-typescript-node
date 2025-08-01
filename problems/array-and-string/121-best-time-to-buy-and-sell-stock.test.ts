import { describe, expect, it } from "vitest";
import { maxProfit } from "./121-best-time-to-buy-and-sell-stock";

describe("Best Time to Buy and Sell Stock", () => {
  it("should return the maximum profit from stock prices", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
