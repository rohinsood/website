<svelte:head>
  <title>GRIP: testing which gene relationships survive representation changes — Rohin Sood</title>
  <meta name="description" content="How I approached continuous phenotypes, technical environments, and gene rankings that can be inspected beyond a model score." />
</svelte:head>

<article class="post-article">
  <a class="back-to-posts" href="/posts">← All posts</a>
  <header class="article-heading">
    <h1>GRIP: testing which gene relationships survive representation changes</h1>
    <p class="article-deck">How I approached continuous phenotypes, technical environments, and gene rankings that can be inspected beyond a model score.</p>
    <p class="post-meta">Rohin Sood</p>
  </header>
  <div class="prose">
    <p>I proposed GRIP to investigate gene–phenotype relationships that remain useful across technical representations of RNA-sequencing data. The current framework combines continuous regression, transformation-based environments, invariant model variants, and ensemble gene scoring. My central question is whether a candidate remains compelling when the representation that made it look important changes.</p>

    <p>The local Oil Red O reconstruction contains 62 sample IDs and 12,081 retained expression features. Its target measures liver lipid accumulation. This is a small-sample, high-dimensional problem: a model has many more potential explanatory variables than independent observations.</p>

    <figure><a class="figure-link" href="/images/posts/grip/grip-pipeline.svg" target="_blank" rel="noopener"><img src="/images/posts/grip/grip-pipeline.svg" alt="GRIP pipeline from continuous biological measurements through technical environments, parallel regressors, model filtering and gene scoring to biological interpretation" width="2600" height="1560" loading="lazy" /></a><figcaption>The complete GRIP workflow, drawn from the local implementation and saved reconstruction. Solid arrows show the main processing flow; the dashed route carries identity-view validation/test data to evaluation. Continuous ORO values are retained. Run dimensions describe this reconstruction, and matrix colors are schematic. <a href="/images/posts/grip/grip-pipeline.svg" target="_blank" rel="noopener">Open full-size figure ↗</a></figcaption></figure>

    <h2>What the implementation taught me</h2>

    <h3>Additional views do not create additional biology</h3>

    <p>The saved run uses identity, log2, square-root, median-of-ratios, centered-log-ratio, and Box–Cox views. Logarithms compress large counts; median-of-ratios adjusts sample scale; centered log-ratios express abundance relative to each sample's geometric mean. Different representations expose different dependencies in a fitted model.</p>

    <p>Crossing these six views with two library preparations produces 12 technical environments and 372 rows. Flight status is excluded from the environment label because it may carry the biology under investigation.</p>

    <p>The split groups transformed copies by sample ID: 48 training samples become 288 training rows, with seven identity-view samples each for validation and testing. The scaler is fitted on training rows. Grouping prevents copies of one sample crossing those partitions; validating every data-adaptive preprocessing step remains a separate requirement.</p>

    <h3>Invariance needs an operational definition</h3>

    <p>The linear IRM implementation minimizes average environment MSE plus an annealed penalty on environment-specific loss gradients with respect to the shared weights:</p>

    <p><code>meanₑ MSEₑ + λ(t) Σₑ ‖∇w MSEₑ‖²</code>.</p>

    <p>This encourages solutions that are simultaneously stationary across environments. The nonlinear variant introduces a learned representation before the prediction head.</p>

    <p>The v1 linear ICP-style implementation instead screens genes by pooled absolute correlation, searches subsets, and fits separate regressions within environments. A Bartlett test checks residual-variance equality. Retaining a subset after that test is a limited stability screen: failing to reject unequal variance does not establish identical residual distributions or biological causality. The implementation uses a largest-accepted-subset strategy, so I treat it as an ICP-style approximation rather than assume the guarantees of canonical ICP.</p>

    <h3>Make the ranking traceable to its components</h3>

    <p>GRIP scores each gene as <code>F_g × I_g × Q̄ × S_g</code>: selection frequency, mean importance, mean model quality, and environment stability. Within each model, stability is <code>clip(1 − σ/(μ + ε), 0, 1)</code> across environment importances, then averaged across models. In this implementation, Q̄ is common to all genes; it changes score scale rather than their relative ordering. Frequency, importance, and stability determine that ordering.</p>

    <figure><a class="figure-link" href="/images/posts/grip/grip-gene-votes.png" target="_blank" rel="noopener"><img src="/images/posts/grip/grip-gene-votes.png" alt="Top-20 gene scores from the saved local GRIP reconstruction" width="900" height="1200" loading="lazy" /></a><figcaption>The run's original ensemble-vote output. ENSMUSG00000015568, annotated as Lpl in the biological report, ranks first. These scores summarize model evidence; they are not probabilities of causality. <a href="/images/posts/grip/grip-gene-votes.png" target="_blank" rel="noopener">Open full-size figure ↗</a></figcaption></figure>

    <h2>Reading the result without hiding the tradeoff</h2>

    <p>Strict invariant mode retains nonlinear ICP, nonlinear IRM, and linear ICP, with R² values of approximately −1.23, −1.79, and −1.86. A Random Forest reaches approximately 0.218 but is excluded by that mode's eligibility rule. Ranking the best eligible models does not impose an absolute performance floor.</p>

    <figure><a class="figure-link" href="/images/posts/grip/grip-voting-model-performance.png" target="_blank" rel="noopener"><img src="/images/posts/grip/grip-voting-model-performance.png" alt="Performance of the three models retained for voting" width="1200" height="600" loading="lazy" /></a><figcaption>Original local voting-set plot. All three scores are negative: each model's squared error exceeds the mean-of-evaluation-targets reference used by R². The Random Forest is outside this plotted voting set. <a href="/images/posts/grip/grip-voting-model-performance.png" target="_blank" rel="noopener">Open full-size figure ↗</a></figcaption></figure>

    <p>The leading candidate also needs examination at sample level. The saved Lpl-versus-ORO plot shows study/preparation groups and conspicuous high-expression points. I would test their influence before interpreting the ensemble rank as a robust biological relationship.</p>

    <figure><a class="figure-link" href="/images/posts/grip/grip-lpl-expression-vs-oro.png" target="_blank" rel="noopener"><img src="/images/posts/grip/grip-lpl-expression-vs-oro.png" alt="Lpl expression versus Oil Red O positivity, grouped by study and library preparation" width="1040" height="720" loading="lazy" /></a><figcaption>Original local biological diagnostic. Group structure and high-expression observations motivate sensitivity analyses; the plot does not by itself establish a consistent within-study effect. <a href="/images/posts/grip/grip-lpl-expression-vs-oro.png" target="_blank" rel="noopener">Open full-size figure ↗</a></figcaption></figure>

    <p>My main learning is that an inference framework should expose its own assumptions. GRIP currently produces inspectable hypotheses and concrete evaluation questions. Establishing stable discovery will require sensitivity tests, preprocessing fitted within evaluation boundaries, and independent biological validation.</p>
  </div>
  <a class="back-to-posts article-end" href="/posts">← Back to all posts</a>
</article>
