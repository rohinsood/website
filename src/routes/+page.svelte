<script>import Mountains from "$lib/Mountains.svelte";</script>

<svelte:head>
	<title>Rohin Sood</title>
	<meta name="description" content="Rohin Sood — explaining the world using science, technology, and computers." />
</svelte:head>

<main class="home" aria-labelledby="page-title">
    <Mountains />

    <section class="profile" aria-label="About Rohin Sood">
      <img src="/logo.svg" alt="Mountain illustration" class="logo" />

      <div class="about">
        <h1 id="page-title">rohin sood</h1>
        <p>Explaining the world around me using science, technology, and computers.</p>

        <nav class="social-links" aria-label="Explore Rohin's work">
          <a class="posts-link" href="/about">ABOUT ME</a>
          <a class="posts-link" href="/experience">EXPERIENCE</a>
          <a class="posts-link" href="/posts">POSTS</a>
        </nav>
        <div class="home-secondary"><a href="/resume.pdf" target="_blank" rel="noopener">Résumé ↗</a><a href="https://github.com/rohinsood">GitHub ↗</a><a href="https://www.linkedin.com/in/rohin-sood-a51b4a218/">LinkedIn ↗</a></div>
      </div>
    </section>
</main>
