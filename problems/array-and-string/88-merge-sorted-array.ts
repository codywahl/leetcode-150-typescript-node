// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for the merged array

  for (; k >= 0; k--) {
    if (i < 0) {
      // If nums1 is exhausted
      nums1[k] = nums2[j];
      j--;
    } else if (j < 0) {
      // If nums2 is exhausted
      break; // Remaining elements in nums1 are already in place
    } else if (nums1[i] > nums2[j]) {
      // If current element in nums1 is greater
      nums1[k] = nums1[i];
      i--;
    } else {
      // If current element in nums2 is greater or equal
      nums1[k] = nums2[j];
      j--;
    }
  }
}
