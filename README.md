# `@joaopalmeiro/biome-react-config`

[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

My personal Biome config for [React](https://react.dev/) projects.

- [Source code](https://gitlab.com/joaommpalmeiro/biome-react-config)
- [npm package](https://www.npmjs.com/package/@joaopalmeiro/biome-react-config)
- [Licenses](https://licenses.dev/npm/%40joaopalmeiro%2Fbiome-react-config)
- [Package Phobia](https://packagephobia.com/result?p=@joaopalmeiro/biome-react-config)
- [npm trends](https://npmtrends.com/@joaopalmeiro/biome-react-config)

## Getting Started

### Installation

```bash
npm install --save-dev @joaopalmeiro/biome-react-config
```

or

```bash
yarn add --dev @joaopalmeiro/biome-react-config
```

or

```bash
pnpm add --save-dev @joaopalmeiro/biome-react-config
```

or

```bash
bun add --dev @joaopalmeiro/biome-react-config
```

### Usage

To use this configuration, create a `biome.json`/`biome.jsonc` file and add the following snippet:

```json
{
  "extends": ["@joaopalmeiro/biome-react-config"]
}
```

## Development

Install [fnm](https://github.com/Schniz/fnm) (if necessary).

```bash
fnm install && fnm use && node --version && npm --version
```

```bash
npm install
```

```bash
npm run lint
```

```bash
npm run format
```

## Deployment

```bash
npm pack --dry-run
```

```bash
npm version patch
```

```bash
npm version minor
```

```bash
npm version major
```

```bash
echo "v$(npm pkg get version | tr -d \")" | pbcopy
```

- Commit and push changes.
- Create a tag on [GitHub Desktop](https://github.blog/2020-05-12-create-and-push-tags-in-the-latest-github-desktop-2-5-release/).
- Check [GitLab](https://gitlab.com/joaommpalmeiro/biome-react-config/-/tags).

```bash
npm login
```

```bash
npm publish
```

- Check [npm](https://www.npmjs.com/package/@joaopalmeiro/biome-react-config).
