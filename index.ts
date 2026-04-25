export const REPO_NAME = "child-y";

export function getRepoName(): string {
	return REPO_NAME;
}

console.log(`Repo: ${getRepoName()}`);