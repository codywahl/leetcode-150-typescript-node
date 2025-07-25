// https://leetcode.com/problems/valid-parentheses/?envType=study-plan-v2&envId=top-interview-150

export function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (
        (s[i] === ")" && last !== "(") ||
        (s[i] === "}" && last !== "{") ||
        (s[i] === "]" && last !== "[")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
