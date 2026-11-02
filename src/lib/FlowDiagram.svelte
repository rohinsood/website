<script lang="ts">
  export let steps: string[];
  export let details: string[];
  let current = 0;
</script>
<figure class="flow-diagram">
  <figcaption><span class="section-kicker">Inside the work</span><span>Explore each stage ↓</span></figcaption>
  <div class="flow-stages" role="group" aria-label="Explore the workflow">{#each steps as step, i}<button type="button" aria-pressed={current === i} onclick={() => current = i}><span class="step-number">0{i + 1}</span><strong>{step}</strong><span aria-hidden="true">{i === steps.length - 1 ? '↺' : '→'}</span></button>{/each}</div>
  <div class="flow-detail" aria-live="polite"><span class="step-number">0{current + 1}</span><p>{details[current]}</p></div>
  <p class="small-note">Conceptual workflow based on my work; not an internal system diagram.</p>
</figure>
