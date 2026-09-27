<svelte:head>
  <title>A place for ideas — Rohin Sood</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<article class="post-article">
  <a class="back-to-posts" href="/posts">← All posts</a>
  <header class="article-heading">
    <h1>A place<br />for ideas.</h1>
    <p class="article-deck">Longer thoughts, small experiments, and the details in between.</p>
    <p class="post-meta">Rohin Sood · Sample post · Visual draft</p>
  </header>

  <div class="prose">
    <p>This is a sample page for the new posts section. A post can be an essay, a project, a work in progress, or something that doesn’t fit neatly into a category.</p>
    <h2>Start with a question</h2>
    <p>Give an idea enough room to breathe. Start with the question, explain why it matters, and follow the details wherever they lead. Use <strong>bold for emphasis</strong>, <em>italics for a quieter aside</em>, and <a href="#working-notes">links to connect the pieces</a>.</p>
    <blockquote><p>Sometimes the useful part of a project is the question it leaves you with.</p></blockquote>
    <h2 id="working-notes">Working notes</h2>
    <p>A place for the things that are easier to understand as a list:</p>
    <ul>
      <li>The question or problem that started it.</li>
      <li>What you tried, and what surprised you.</li>
      <li>What you would change next time.</li>
    </ul>
    <h3>A small experiment</h3>
    <p>Technical details can sit alongside the story. Inline code like <code>observe()</code> stays readable, and longer examples get their own space.</p>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex (Scrollable code needs keyboard focus for horizontal scrolling.) -->
    <pre role="region" tabindex="0" aria-label="Example code"><code>{`const observations = [2, 4, 6];
const average = observations.reduce((sum, n) => sum + n, 0)
  / observations.length;

console.log(average); // 4`}</code></pre>
    <figure>
      <div class="post-illustration"><img src="/logo.svg" alt="Mountain line illustration from the homepage" /></div>
      <figcaption>Space for a photograph, a diagram, or a closer look at something you built.</figcaption>
    </figure>
    <h2>What comes next</h2>
    <ol>
      <li>Keep the useful observations.</li>
      <li>Try the next version.</li>
      <li>Write down what changed.</li>
    </ol>
    <hr />
    <p>A post doesn’t need a tidy ending. Sometimes it just needs a place to begin.</p>
  </div>
  <a class="back-to-posts article-end" href="/posts">← Back to all posts</a>
</article>
