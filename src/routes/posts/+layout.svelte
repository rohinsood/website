<script>
  import Mountains from '$lib/Mountains.svelte';
</script>

<div class="posts-shell">
  <div class="posts-background"><Mountains /></div>
  <div class="reading-panel">
    <header class="posts-header">
      <a class="wordmark" href="/">Rohin Sood</a>
      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/posts" aria-current="true">Posts</a>
      </nav>
    </header>
    <main id="content"><slot /></main>
    <footer class="posts-footer">Science, technology, and computers.</footer>
  </div>
</div>
