const { createMonorepoReleaseConfig } = require("./index.cjs");

const name = "semantic-release";
const srcRoot = `packages/${name}`;
const pkgRoot = `packages/${name}`;

module.exports = createMonorepoReleaseConfig({
  name,
  srcRoot,
  pkgRoot,
});
