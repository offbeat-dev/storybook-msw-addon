module.exports = {
  repositoryUrl:
    "https://verndale@dev.azure.com/verndale/V00066-Verndale/_git/Animation_Framework_FE",
  branches: [
    {
      name: "main",
    },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "changelog/CHANGELOG.md",
      },
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["dist", "changelog", "package.json"],
        message:
          "chore: ${nextRelease.version} FEE Build [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
