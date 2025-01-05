const {
	createMonorepoReleaseConfig,
} = require("./monorepo-release-config.cjs");
const {
	createMonolithicReleaseConfig,
} = require("./monolithic-release-config.cjs");

module.exports = {
	createMonorepoReleaseConfig,
	createMonolithicReleaseConfig,
};
