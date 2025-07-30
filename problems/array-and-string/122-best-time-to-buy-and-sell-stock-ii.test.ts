import { describe, expect, it } from "vitest";
import { maxProfit } from "./122-best-time-to-buy-and-sell-stock-ii";

describe("maxProfit", () => {
  it("should return the maximum profit for prices [7,1,5,3,6,4]", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(7);
  });

  it("should return the maximum profit for prices [1,2,3,4,5]", () => {
    const prices = [1, 2, 3, 4, 5];
    expect(maxProfit(prices)).toBe(4);
  });

  it("should return zero for prices [7,6,4,3,1]", () => {
    const prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });
});
