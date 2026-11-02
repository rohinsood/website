# Rohin Sood — notebook

A static SvelteKit site for writing, projects, and notes. The homepage uses the traced mountain SVG as a lower-field background; content intentionally lives in the clear space above it.

## Local development

```powershell
npm ci
npm run dev
```

Run `npm run check` for Svelte diagnostics and `npm run build` to generate the deployable `build/` directory.

## Content structure

- `src/routes/+page.svelte` — homepage and featured entries.
- `src/routes/writing/+page.svelte` — writing index.
- `src/routes/projects/+page.svelte` — projects index.
- `src/routes/notes/+page.svelte` — notes index.
- `src/routes/posts/+page.svelte` — published posts index.
- `src/routes/posts/snapcane/+page.svelte` — SnapCane article.
- `src/routes/posts/team-optix/+page.svelte` — Voyager article.

The index pages are deliberately lightweight shells. Add entries there as content becomes ready, then extract repeated entry data into a shared module or a content collection when the volume makes that worthwhile.

## Deployment

The project uses `@sveltejs/adapter-static`, so Cloudflare Pages can deploy `build/` directly after `npm run build`.

The existing Cloudflare Pages project is `rohinsood`, with production branch `main`.
Production is available at https://rohinsood.pages.dev and uses the custom domain https://rohinsood.xyz.
The GitHub repository's About link to `rohinsood.dev` is outdated.

```powershell
npm run check
npm run build
npx wrangler pages deploy build --project-name rohinsood --branch main
```

This Pages project currently has no Git connection. Pushing source to GitHub alone does not deploy the site.
See [DEPLOYMENT_SYNC.md](DEPLOYMENT_SYNC.md) for the production/source comparison.
