export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  // Create a map to count characters
  const map: Map<string, number> = new Map();

  // Count characters in the first string
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Subtract counts using the second string
  for (const char of t) {
    if (!map.has(char)) {
      return false;
    } else {
      // Decrement the count for the character
      const count = (map.get(char) || 0) - 1;

      if (count === 0) {
        map.delete(char);
      } else {
        map.set(char, count);
      }
    }
  }

  return map.size === 0;
}
