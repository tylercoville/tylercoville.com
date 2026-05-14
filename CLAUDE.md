# tylercoville.com

Personal site + blog. Eleventy 3.x static site, deployed to GitHub Pages.

## Dev workflow

- `npm start` — runs `eleventy --serve` with hot reload at http://localhost:8080. Leave it running while editing; changes to `src/` rebuild automatically. **Do not manually `rm -rf _site` or run `npm run build` during a dev session — it fights the dev server.**
- `npm run build` — one-shot production build to `_site/`. Used by CI; rarely needed locally.

## Deploy

Push to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and publishes `_site/` to GitHub Pages. No manual deploy step.

## Adding a blog post

Drop a markdown file in `src/posts/`. Frontmatter requirements:

```yaml
---
title: Post title
date: 2026-05-14
---
```

Defaults from `src/posts/posts.json` apply automatically: `layout: post.njk`, `tag: posts`, `permalink: /blog/{slug}/`. The post shows up on the homepage list in reverse-chronological order.

**Date gotcha:** dates in YAML are parsed as UTC midnight. The `postDate` filter in `.eleventy.js` formats with `timeZone: "UTC"` so the rendered date matches the YAML — don't change that or dates will drift backward in Pacific time.

## Site structure

- `src/index.md` — homepage (intro + blog roll from `collections.posts`)
- `src/about.md` — `/about/` bio
- `src/posts/` — blog posts; `posts.json` sets shared defaults
- `src/_includes/layout.njk` — base layout (header nav, sticky footer, copyright)
- `src/_includes/post.njk` — post wrapper (title + date + body)
- `src/_data/site.js` — global data (currently just `site.year` for the footer)
- `src/assets/` — passthrough-copied; styles, images
