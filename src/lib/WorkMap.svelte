<script lang="ts">
  let selected = 'All';
  const groups = [
    { name: 'AI systems', summary: 'From a question to useful work.', nodes: [{ title: 'Qualcomm', detail: 'Agent workflows & hardware logs', url: '/experience/qualcomm' }, { title: 'Jirav', detail: 'Financial data & deterministic tools', url: '/experience/jirav' }] },
    { name: 'Physical systems', summary: 'From perception to action.', nodes: [{ title: 'SnapCane', detail: 'Vision-guided steering', url: '/posts/snapcane' }, { title: 'Team Optix', detail: 'Mechanisms, sensing & control', url: '/posts/team-optix' }] },
    { name: 'Research & sound', summary: 'From a signal to an explanation.', nodes: [{ title: 'NASA · GRIP', detail: 'Robust gene discovery', url: '/posts/grip' }, { title: 'Retinal inference', detail: 'Expression → tissue damage', url: '/posts/retinal-inference' }, { title: 'Slap Bass', detail: 'Listening for technique', url: '/posts/slap-bass' }] }
  ];
</script>
<section class="work-map" aria-labelledby="map-title">
  <div class="section-kicker">A map of my work</div><h2 id="map-title">Follow a connection.</h2>
  <div class="map-filters" role="group" aria-label="Filter work by interest">{#each ['All', ...groups.map(g => g.name)] as label}<button type="button" aria-pressed={selected === label} onclick={() => selected = label}>{label}</button>{/each}</div>
  <div class="map-root">Build it. Measure it. Understand it.</div>
  <div class="map-branches">{#each groups.filter(g => selected === 'All' || selected === g.name) as group}<div class="map-branch"><h3>{group.name}</h3><p>{group.summary}</p><div class="map-nodes">{#each group.nodes as node}<a href={node.url}><strong>{node.title}<span aria-hidden="true">↗</span></strong><span>{node.detail}</span></a>{/each}</div></div>{/each}</div>
</section>
