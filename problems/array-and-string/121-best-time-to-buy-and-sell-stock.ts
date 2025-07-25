export function maxProfit(prices: number[]): number {
  let left = 0; // Pointer for the buy day
  let maxProfit = 0; // Variable to store the maximum profit

  for (let right = 1; right < prices.length; right++) {
    if (prices[right] <= prices[left]) {
      left = right;
    } else {
      const profit = prices[right] - prices[left];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}
