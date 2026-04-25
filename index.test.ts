import { describe, expect, it } from "bun:test";

import { getRepoName } from "./index";

describe("getRepoName", () => {
  it("returns child-y", () => {
    expect(getRepoName()).toBe("child-y");
  });
});