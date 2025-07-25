import { describe, expect, it } from "vitest";
import { simplifyPath } from "./71-simplify-path";

describe("Simplify Path", () => {
  it("should simplify the given path correctly", () => {
    expect(simplifyPath("/home/")).toBe("/home");
    expect(simplifyPath("/home//foo/")).toBe("/home/foo");
    expect(simplifyPath("/home/user/Documents/../Pictures")).toBe(
      "/home/user/Pictures",
    );
    expect(simplifyPath("/../")).toBe("/");
    expect(simplifyPath("/.../a/../b/c/../d/./")).toBe("/.../b/d");
  });
});
