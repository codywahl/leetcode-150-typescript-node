// https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150

export function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  if (ransomNote === magazine) {
    return true;
  }

  const magazineRecord: Record<string, number> = {};

  // Load the magazine characters into a frequency map
  for (let i = 0; i < magazine.length; i++) {
    const currentChar = magazine[i];
    magazineRecord[currentChar] = (magazineRecord[currentChar] || 0) + 1;
  }

  // Check if we can construct the ransom note using the magazine characters
  for (let i = 0; i < ransomNote.length; i++) {
    const currentChar = ransomNote[i];
    if (!magazineRecord[currentChar] || magazineRecord[currentChar] <= 0) {
      return false; // Character not available in magazine
    }

    magazineRecord[currentChar]--; // Use the character
  }

  return true;
}
