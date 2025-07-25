import { ListNode, hasCycle } from "./141-linked-list-cycle";
import { describe, it, expect } from "vitest";

describe("hasCycle", () => {
  it("should return true for example 1", () => {
    // Example 1:
    // Input: head = [3,2,0,-4], pos = 1
    // Output: true
    const node1 = new ListNode(3);
    const node2 = new ListNode(2);
    const node3 = new ListNode(0);
    const node4 = new ListNode(-4);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2; // Creates a cycle

    expect(hasCycle(node1)).toBe(true);
  });

  it("should return true for example 2", () => {
    // Example 2:
    // Input: head = [1,2], pos = 0
    // Output: true
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);

    node1.next = node2;
    node2.next = node1;

    expect(hasCycle(node1)).toBe(true);
  });

  it("should return false for example 3", () => {
    // Example 3:
    // Input: head = [1], pos = -1
    // Output: false
    const node1 = new ListNode(1);

    expect(hasCycle(node1)).toBe(false);
  });
});
