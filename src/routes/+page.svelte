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

        <nav class="social-links" aria-label="Posts and social links">
          <a class="posts-link" href="/posts">POSTS</a>
          <a href="https://github.com/rohinsood" aria-label="Rohin on GitHub"><span aria-hidden="true">GH</span></a>
          <a href="https://www.linkedin.com/in/rohin-sood-a51b4a218/" aria-label="Rohin on LinkedIn"><span aria-hidden="true">in</span></a>
        </nav>
      </div>
    </section>
</main>
