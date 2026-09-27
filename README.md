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

The index pages are deliberately lightweight shells. Add entries there as content becomes ready, then extract repeated entry data into a shared module or a content collection when the volume makes that worthwhile.

## Deployment

The project uses `@sveltejs/adapter-static`, so Cloudflare Pages can deploy `build/` directly after `npm run build`.
