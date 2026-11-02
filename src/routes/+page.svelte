<script>import Mountains from "$lib/Mountains.svelte";</script>

<svelte:head>
	<title>Rohin Sood</title>
	<meta name="description" content="Rohin Sood — explaining the world using science, technology, and computers." />
</svelte:head>

<main class="home" aria-labelledby="page-title">
    <Mountains />

    <section class="profile" aria-label="About Rohin Sood">
      <img src="/logo.svg" alt="Mountain illustration" class="logo" />

      <h1 id="page-title">rohin sood</h1>
      <nav class="home-link-block" aria-label="Explore Rohin's work">
        <div class="home-link-row">
          <a href="/about">About me</a>
          <a href="https://www.linkedin.com/in/rohin-sood-a51b4a218/">LinkedIn</a>
          <a href="/posts">Posts</a>
        </div>
        <div class="home-link-row home-link-secondary">
          <a href="/experience">Experience</a>
          <a href="/resume.pdf" target="_blank" rel="noopener">Résumé ↗</a>
          <a href="https://github.com/rohinsood">GitHub ↗</a>
        </div>
      </nav>
    </section>
</main>
