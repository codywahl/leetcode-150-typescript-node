// https://leetcode.com/problems/spiral-matrix/?envType=study-plan-v2&envId=top-interview-150

export function spiralOrder(matrix: number[][]): number[] {
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  const result: number[] = [];

  while (top <= bottom && left <= right) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      if (top <= bottom) {
        result.push(matrix[top][i]); // Add the top row elements
      }
    }
    top++;

    // Traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      if (left <= right) {
        result.push(matrix[i][right]); // Add the right column elements
      }
    }
    right--;

    // Traverse from right to left
    for (let i = right; i >= left; i--) {
      if (top <= bottom) {
        result.push(matrix[bottom][i]); // Add the bottom row elements
      }
    }
    bottom--;

    // Traverse from bottom to top
    for (let i = bottom; i >= top; i--) {
      if (left <= right) {
        result.push(matrix[i][left]); // Add the left column elements
      }
    }
    left++;
  }

  return result;
}
