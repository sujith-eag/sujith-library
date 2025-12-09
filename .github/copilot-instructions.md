Purpose
=======

Guidance for AI coding agents working on the `sujith-library` VitePress documentation site.

> **For complete formatting and style guidelines, see `CONTRIBUTING.md`**

## Project Structure

- **Content:** `docs/` — All Markdown pages
- **Config:** `docs/.vitepress/config.mts` — Site configuration
- **Sidebars:** `docs/.vitepress/theme/data/fileStructures/*.ts` — Sidebar data
- **Assets:** `public/` — Static files (images, logos)
- **Contributing:** `CONTRIBUTING.md` — Guidelines for contributors

## Commands

```bash
npm ci                  # Install dependencies
npm run docs:dev        # Start dev server
npm run docs:build      # Build for production
npm run docs:preview    # Preview build
```

## Adding Content

1. Create Markdown file in `docs/` subfolder

2. Add entry in corresponding `*Sections.ts` file

3. Run `npm run docs:dev` to test

## Conventions

- Sidebar links use root-relative paths with leading slash: `/java-script/new-topic/my-page`

- Links map to `docs/` file paths when creating pages

## Do Not Modify

- `docs/.vitepress/dist/` — Build output

- `docs/.vitepress/cache/` — Build cache

- `docs/.vitepress/.temp/` — Temporary files

