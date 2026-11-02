<script lang="ts">import FlowDiagram from '$lib/FlowDiagram.svelte'; import type { PageData } from './$types'; export let data: PageData; $: experience = data.experience;</script>
<svelte:head><title>{experience.company} — Rohin Sood</title><meta name="description" content={experience.deck} /></svelte:head>
<article class="experience-article">
  <a class="back-to-posts" href="/experience">← All experience</a>
  <header class="article-heading entrance"><p class="section-kicker">{experience.company} / {experience.date}</p><h1>{experience.title}</h1><p class="article-deck">{experience.deck}</p><p class="post-meta">{experience.role}</p></header>
  <dl class="experience-metrics">{#each experience.metrics as [value, label]}<div><dt>{label}</dt><dd>{value}</dd></div>{/each}</dl>
  <p class="experience-intro">{experience.intro}</p>
  {#key experience.slug}<FlowDiagram steps={experience.steps} details={experience.stepDetails} />{/key}
  <div class="prose">{#each experience.sections as section}<section><h2>{section.heading}</h2><p>{section.text}</p></section>{/each}</div>
  {#if experience.links.length}<section class="further-reading"><p class="section-kicker">Keep exploring</p>{#each experience.links as link}<a href={link.href}>{link.label} ↗</a>{/each}</section>{/if}
  <a class="back-to-posts article-end" href="/experience">← All experience</a>
</article>
