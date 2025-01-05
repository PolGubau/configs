const {
	createMonorepoReleaseConfig,
} = require("@zhumeisong/semantic-release-config");

const name = "git-cz-config";
const srcRoot = `packages/${name}`;
const pkgRoot = `packages/${name}`;

module.exports = createMonorepoReleaseConfig({ name, srcRoot, pkgRoot });
