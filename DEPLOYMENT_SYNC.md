# Production/source reconciliation

Compared on November 1, 2026 (America/Los_Angeles).

## Reference

- Repository baseline: `e223da70c5b749bb341479a3c8356ba9af539c22` (`main`).
- Cloudflare Pages project: `rohinsood`, production branch: `main`.
- Published reference: https://ebdbd56c.rohinsood.pages.dev
- Production aliases: https://rohinsood.pages.dev and https://rohinsood.xyz.
- Cloudflare dashboard reports no Git connection for this project.
- The repository About link uses `rohinsood.dev`, which failed DNS resolution in the browser during this comparison.

## Differences and restored behavior

| Surface | Repository baseline | Published version / restored source |
| --- | --- | --- |
| Homepage navigation | Separate Posts text link with arrow; email, GitHub and LinkedIn circles | POSTS button beside GitHub and LinkedIn; no email button |
| Posts index | One sample entry, A place for ideas | SnapCane: making navigation tangible; 2024 FRC Robot: Voyager |
| SnapCane | Missing | Full published article, headings, source links, CAD images, captions and prototype limitations |
| Voyager | Missing | Full published article, headings, source links, robot images and captions |
| Posts button styles | Standalone text-link styling | Rounded rectangular button within the social navigation |
| Article images | No general figure image sizing rule | Full-width, contained images, rounded corners, maximum height 640px |

## Preserved material

The homepage introduction, mountain SVG and animation, logo, typography, reading panel,
post layout, responsive rules and reduced-motion behavior match the published version.
The published sample article remains accessible at `/posts/a-place-for-ideas`, although
it is not listed on the posts index. `/writing`, `/projects`, and `/notes` also remain.
Article images keep their published remote URLs and lazy-loading attributes.

## Verification

- `npm run check`: zero errors and zero warnings.
- `npm run build`: successful static build.
- Compared generated body markup with public production HTML for `/`, `/posts`,
  `/posts/snapcane`, `/posts/team-optix`, `/posts/a-place-for-ideas`, `/writing`,
  `/projects`, and `/notes`: all eight match after stripping Svelte comments and
  normalizing whitespace.
- Compiled application CSS matches the deployed application CSS after Lightning CSS
  normalization. Generated Tailwind layers and build-specific filenames are excluded
  from this application-style comparison.
- Browser inspection verified the production homepage and posts index. The local
  production preview at `http://127.0.0.1:4173` passed the Home → Posts → SnapCane
  navigation check, rendered the article without an error overlay, and produced no
  console warnings or errors. A desktop screenshot was inspected. Mobile remains
  unverified.

The published HTML was used to recover article content; this is a reconstruction of
editable Svelte source, not a recovery of the original unpublished source files.

## Redeployment

Published the verified static build to the existing `rohinsood` Pages project on
production branch `main` after Cloudflare authorization.

- Deployment: https://6479234a.rohinsood.pages.dev
- All eight routes on https://rohinsood.pages.dev returned HTTP 200 and matched the
  local build's body markup after comment and whitespace normalization.
- The deployed application stylesheet exactly matched the local build.
- https://rohinsood.xyz returned HTTP 200.
- The user subsequently authorized committing and pushing the restored source to GitHub `main`.
