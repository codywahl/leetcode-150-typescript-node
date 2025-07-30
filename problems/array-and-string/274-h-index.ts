// https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150

export function hIndexSorting(citations: number[]): number {
  citations.sort();
  let maxHIndex = citations.length;
  const minHIndex = citations[0];

  for (let i = 0; i < citations.length; i++) {
    const currentCitationsCount = citations[i];

    if (currentCitationsCount == maxHIndex) {
      return maxHIndex;
    } else {
      maxHIndex--;
    }
  }

  return Math.max(minHIndex, maxHIndex);
}

export function hIndexCountingSort(citations: number[]): number {
  const maxHIndex = citations.length;
  const citationCounts = new Array(maxHIndex + 1).fill(0);

  // fill the counts array
  for (let i = 0; i < citations.length; i++) {
    const currentCitations = citations[i];
    if (currentCitations >= maxHIndex) {
      citationCounts[maxHIndex]++;
    } else {
      citationCounts[currentCitations]++;
    }
  }

  let total = 0;

  // reverse through looking for the h index
  for (let i = citations.length; i >= 0; i--) {
    total += citationCounts[i]; // total number of papers with at least i citations

    if (total >= i) {
      return i; // this is the H-index
    }
  }

  return 0;
}
