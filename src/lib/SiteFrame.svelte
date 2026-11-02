<script lang="ts">
  import Mountains from '$lib/Mountains.svelte';
  export let active = '';
</script>
<div class="posts-shell">
  <div class="posts-background"><Mountains /></div>
  <div class="reading-panel">
    <header class="posts-header">
      <a class="wordmark" href="/">Rohin Sood</a>
      <nav aria-label="Main navigation">
        {#each [['/about', 'About'], ['/experience', 'Experience'], ['/posts', 'Posts']] as [url, label]}
          <a href={url} aria-current={active === label ? 'page' : undefined}>{label}</a>
        {/each}
        <a href="/resume.pdf" target="_blank" rel="noopener">Résumé ↗</a>
      </nav>
    </header>
    <main id="content"><slot /></main>
    <footer class="posts-footer"><span>Built with curiosity. Kept in the pocket.</span><a href="/about-site">About this site ↗</a></footer>
  </div>
</div>
