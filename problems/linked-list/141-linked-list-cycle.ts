// https://leetcode.com/problems/linked-list-cycle/?envType=study-plan-v2&envId=top-interview-150

export function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  const visitedNodes = new Set<ListNode>();
  let currentNode: ListNode | null = head;

  while (currentNode !== null) {
    if (visitedNodes.has(currentNode)) {
      return true; // Cycle detected
    } else {
      visitedNodes.add(currentNode);
      currentNode = currentNode.next;
    }
  }

  return false;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
