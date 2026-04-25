import { describe, expect, it } from "bun:test";

import { getRepoInfo } from "./index";

describe("getRepoInfo", () => {
  it("returns repo info for child-y", () => {
    const info = getRepoInfo();
    expect(info.name).toBe("child-y");
    expect(info.deps).toEqual(["@rchapkailo/shared"]);
  });
});