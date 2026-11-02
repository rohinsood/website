<svelte:head>
  <title>Retinal inference: connecting gene expression to tissue damage — Rohin Sood</title>
  <meta name="description" content="How I used regression, feature attribution, and pathway analysis to investigate retinal responses to spaceflight." />
</svelte:head>

<article class="post-article">
  <a class="back-to-posts" href="/posts">← All posts</a>
  <header class="article-heading">
    <h1>Retinal inference: connecting gene expression to tissue damage</h1>
    <p class="article-deck">How I used regression, feature attribution, and pathway analysis to investigate retinal responses to spaceflight.</p>
    <p class="post-meta">Rohin Sood</p>
  </header>
  <div class="prose">
    <p>My NASA research included analyzing a regression ensemble for a study of retinal damage in spaceflown mice, published in *npj Microgravity*. My contribution involved cross-model feature comparisons, pathway-level interpretation, and comparative results and figures incorporated into the manuscript. The original analysis notebooks were developed by James Casaletto as part of the broader collaboration. <a href="https://www.nature.com/articles/s41526-026-00625-w">Published study</a>.</p>

    <p>The problem connects two measurements of the same biological system: RNA sequencing describes gene expression, while tissue imaging measures injury. I was interested in the reasoning between them—how an expression pattern becomes a prediction, and how that prediction becomes a biological hypothesis.</p>

    <h2>What the analysis taught me</h2>

    <h3>Preserve the phenotype's resolution</h3>

    <p>The pipeline uses retinal transcriptomics from Rodent Research-9 to predict two quantitative imaging phenotypes. 4-HNE measures a signal associated with oxidative lipid damage; TUNEL measures DNA fragmentation associated with apoptosis. Modeling them separately lets each endpoint have its own predictive signature.</p>

    <p>Regression preserves differences that a high/low classification would discard. Two samples just above a classification threshold can have very different injury measurements. A continuous target retains that distance and makes prediction error biologically interpretable.</p>

    <p>The preprocessing narrows the expression matrix to 1,000 target-correlated protein-coding genes after missingness and abundance filtering. TPM normalization accounts for sequencing depth and gene length; z-score scaling makes expression magnitudes more comparable. Those choices define the information the models can use, including which low-abundance signals they cannot recover.</p>

    <figure><a class="figure-link" href="/images/posts/retinal-inference/workflow.svg" target="_blank" rel="noopener"><img src="/images/posts/retinal-inference/workflow.svg" alt="Explanatory schematic of the retinal study workflow" width="1440" height="750" loading="lazy" /></a><figcaption>An original schematic of the study workflow, based on <a href="https://www.nature.com/articles/s41526-026-00625-w">Casaletto et al., <em>npj Microgravity</em> (2026)</a>. It links RNA-sequencing measurements to quantitative tissue phenotypes, model consensus, and pathway interpretation. The publication is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>; this diagram is newly drawn, not its original Figure 3. <a href="/images/posts/retinal-inference/workflow.svg" target="_blank" rel="noopener">Open full-size figure ↗</a></figcaption></figure>

    <h3>Compare the assumptions behind a prediction</h3>

    <p>The ensemble contains ordinary linear regression, ridge, lasso, elastic net, and support vector regression. Ridge shrinks coefficients through an L2 penalty; lasso's L1 penalty can remove features; elastic net combines both. These differences matter when many genes carry overlapping information: similar predictions can emerge from different allocations of importance.</p>

    <p>I compared what those models emphasized. Permutation feature importance measures the loss in predictive performance after disrupting one gene. Recursive feature elimination rebuilds models while removing weak features. Coefficient magnitude supplies another view, although its meaning depends on scaling and correlations between predictors.</p>

    <p>The pipeline intersects permutation and elimination selections with coefficient-based selections within each model, then takes a majority consensus across qualifying models. This makes the gene list an explicit evidence-aggregation procedure rather than the output of one preferred estimator.</p>

    <h3>Keep model fit separate from biological confidence</h3>

    <p>For each phenotype, three models exceeded the study's held-out R² threshold of 0.90. That is strong fit within the reported experiment, whose biological sample size was 16 mice. STAR and RSEM provide alternative processed views; they do not create additional independent animals.</p>

    <p>The held-out data also participate in model qualification and feature attribution. Those results therefore support discovery within this study; an untouched external cohort would provide a stronger test of the selected signature's generalization.</p>

    <figure><a class="figure-link" href="/images/posts/retinal-inference/model-consensus.svg" target="_blank" rel="noopener"><img src="/images/posts/retinal-inference/model-consensus.svg" alt="Models qualifying for gene consensus in the 4-HNE and TUNEL tasks" width="1400" height="910" loading="lazy" /></a><figcaption>An original schematic of the model sets reported in the <a href="https://www.nature.com/articles/s41526-026-00625-w">published results</a>. Three models per phenotype qualified for gene consensus. This summarizes model selection; see the paper’s Figures 1 and 2 for the original performance distributions. <a href="/images/posts/retinal-inference/model-consensus.svg" target="_blank" rel="noopener">Open full-size figure ↗</a></figcaption></figure>

    <h2>Following the prediction into biology</h2>

    <p>Pathway enrichment asks whether the selected genes overlap curated biological functions more than expected by chance, with multiple-testing correction. It adds functional context to the ranking. The study connected the oxidative-damage signature with membrane and synaptic processes, while the apoptosis signature emphasized photoreceptor degeneration and cellular stress.</p>

    <p>My main learning was to follow that entire chain: measurement, representation, model assumptions, feature evidence, and biological interpretation. A convincing analysis explains both why a gene was selected and what additional experiment could distinguish a predictive association from a mechanism.</p>
  </div>
  <a class="back-to-posts article-end" href="/posts">← Back to all posts</a>
</article>
