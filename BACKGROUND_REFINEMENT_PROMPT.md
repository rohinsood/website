# Mountain background refinement loop

Improve the existing animated mountain background in this repository through a reference-based agent loop. Use `gpt-6-luna` for implementation and review subagents. Keep the primary agent responsible for visual judgment, accepting revisions, verification, and publication. Do not silently switch subagents to a more expensive model.

## Immutable references

1. Original simplified website background: `git show e223da7:src/lib/Mountains.svelte`, plus its accompanying CSS at the same commit. Preserve a reference copy before editing. Use it for the broad composition, silhouette, principal ridges, placement, and clarity.
2. Inspiration illustration: the JPEG embedded in `static/logo.svg`. Extract and inspect the actual image. Use it for mountain-face structure, curved interior hatching, density, organic flow, and line-weight relationships.
3. Current website rendering: capture it before making changes to identify regressions. This is a baseline, not a substitute for the two references above.

## Required visual rules

- Outer silhouettes are the strongest strokes. Main structural ridges are clearly heavier than interior hatching. Interior strokes remain visibly thinner at both desktop and mobile sizes.
- Every interior stroke belongs to a defined mountain face. Clip it to that face, or prove its geometry stays inside it. Interior strokes must not cross silhouettes, unrelated ridges, or foreground/background boundaries.
- Hatching follows each face's slope and curvature, as in the inspiration. Preserve breathing room between lines; avoid uniform stripe fields, skeletonization artifacts, knots, tiny loops, and accidental tangles.
- Join contours deliberately at real ridge junctions. Do not join unrelated lines merely because their endpoints are close. Natural open ends in the source are allowed; blanket connectivity is not the goal.
- Favor smooth, coherent, editable SVG paths and explicit semantic groups such as `outline`, `ridge`, and `interior`.
- Keep the recognizable composition of the original simplified background while adding detail from the inspiration. Do not reinterpret it as generic mountains.
- Preserve readable page content, responsive cropping, SVG accessibility, the drawing animation, and a complete static rendering under reduced motion.

## Loop: repeat after every revision

1. Re-open both immutable references and the last accepted screenshot. Describe the three largest visible mismatches using specific regions of the image.
2. Give the lower-cost implementation subagent one focused revision with explicit acceptance criteria. Avoid unrelated UI, content, dependency, or infrastructure changes.
3. Render the candidate in the real website at desktop and mobile sizes. Inspect the beginning, middle, and completed drawing. Also inspect an isolated completed SVG on a plain background so the profile panel cannot hide errors.
4. Give a separate lower-cost review subagent the two references and candidate evidence. Require concrete findings, not approval based on a build or path count. The primary agent also inspects the rendered candidate directly.
5. Check silhouette fidelity, ridge placement, stroke hierarchy, face containment, joins, hatching flow, density, readability, cropping, and animation. Record PASS / FAIL / UNVERIFIED plus evidence for each. Never label an uninspected property PASS.
6. Reject or repair regressions. Keep the last accepted candidate available. Choose the next edit from the largest remaining visual mismatch rather than adding detail arbitrarily.
7. Run project diagnostics and a production build after meaningful changes. Verify Home → Posts → Home, console health, and page rendering. A successful build does not establish visual fidelity.

## Completion and publication

Continue until every required visual rule passes direct inspection at both viewport sizes and the final review identifies no material unresolved discrepancy. Do not stop just because several iterations have run. If progress stalls, report the specific unresolved mismatch and change approach; do not declare success without evidence.

Compare the final candidate against BOTH references once more, summarize intentional deviations, and report remaining uncertainty. In an authorized publishing session, commit and push the accepted change to `main`, deploy the verified build to the existing Cloudflare Pages project `rohinsood`, and verify the live custom domain `https://rohinsood.xyz`. Never publish an intermediate candidate merely to demonstrate progress.

Keep the final user update concise: what improved, which comparisons and checks passed, any remaining deviations, and links to the accepted source and live result.
