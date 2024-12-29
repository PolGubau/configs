# `@polgubau/config`

[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)


Personal configs for [React](https://react.dev/) projects.

- [Source code](https://github.com/PolGubau/configs)
- [npm package](https://www.npmjs.com/package/@polgubau/configs)
- [Package Phobia](https://packagephobia.com/result?p=%40polgubau%2Fconfigs)

## Getting Started

### Installation

```bash
npm install --save-dev @polgubau/configs
```

or

```bash
yarn add --dev @polgubau/configs
```

or

```bash
pnpm add --save-dev @polgubau/configs
```

or

```bash
bun add --dev @polgubau/configs
```

## Usage
### Biome
To use this configuration, create a `biome.json`/`biome.jsonc` file and add the following snippet:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": ["@polgubau/configs/biome"]
}
```
 

> Based on the configuration from [joaopalmeiro](https://github.com/joaopalmeiro)