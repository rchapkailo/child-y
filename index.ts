import { REPO_NAME as SHARED_REPO_NAME } from "@rchapkailo/shared";

export const REPO_NAME = "child-y";

export interface RepoInfo {
  name: string;
  deps: string[];
}

export function getRepoInfo(): RepoInfo {
  return { name: REPO_NAME, deps: [`@rchapkailo/${SHARED_REPO_NAME}`] };
}

export function getRepoName(): string {
  return REPO_NAME;
}

const info = getRepoInfo();
console.log(`Repo: ${info.name}, deps: ${info.deps.join(", ")}`);
