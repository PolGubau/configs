# Notes

- https://codeberg.org/joaopalmeiro/biome-solid-config
- https://github.com/ivangabriele/biome-config:
  - https://github.com/ivangabriele/biome-config/blob/10aa6d4c8633359e89ef76daf658845ac51a8175/index.jsonc: `"ignore": ["package.json"]`
  - https://github.com/ivangabriele/biome-config/blob/10aa6d4c8633359e89ef76daf658845ac51a8175/package.json
- https://afewthingz.com/browserbookmark
- https://ui.shadcn.com/docs/components/button
- https://www.radix-ui.com/primitives/docs/components/avatar
- https://biomejs.dev/guides/big-projects/#share-the-configuration
- https://biomejs.dev/guides/configure-biome/#share-a-configuration-file
- https://biomejs.dev/linter/rules/no-react-specific-props/
- https://biomejs.dev/reference/configuration/#formatteruseeditorconfig
- https://biomejs.dev/reference/configuration/#cssparsercssmodules

## Commands

```bash
npm install -D \
@biomejs/biome \
npm-package-json-lint \
npm-package-json-lint-config-package \
npm-run-all2 \
publint \
sort-package-json
```

## Snippets

```json
{
  "linter": {
    "enabled": true,
    "rules": {
      "all": true,
      "nursery": {
        "all": false
      }
    }
  }
}
```
