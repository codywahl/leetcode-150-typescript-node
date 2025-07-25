export function numIslands(grid: string[][]): number {
  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j);
        islandCount++; // Increment count for each island found
      }
    }
  }

  return islandCount;
}

function dfs(grid: string[][], i: number, j: number): void {
  // Check boundaries
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  ) {
    return;
  }

  // Mark the cell as visited
  grid[i][j] = "0";

  // Explore all four directions
  dfs(grid, i + 1, j); // Down
  dfs(grid, i - 1, j); // Up
  dfs(grid, i, j + 1); // Right
  dfs(grid, i, j - 1); // Left
}
