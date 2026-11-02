<svelte:head>
  <title>Slap Bass: hearing the technique behind the notes — Rohin Sood</title>
  <meta name="description" content="What building a bass-transcription prototype taught me about timbre, timing, and making model output useful to a musician." />
</svelte:head>

<article class="post-article">
  <a class="back-to-posts" href="/posts">← All posts</a>
  <header class="article-heading">
    <h1>Slap Bass: hearing the technique behind the notes</h1>
    <p class="article-deck">What building a bass-transcription prototype taught me about timbre, timing, and making model output useful to a musician.</p>
    <p class="post-meta">Rohin Sood</p>
  </header>
  <div class="prose">
    <p>Learning slap bass meant replaying the same few seconds of a recording until I could hear what the bassist's hands were doing. The pitch was only part of it. A thumb strike, a popped string, and a muted ghost note can occupy the same rhythmic space while asking for very different movements.</p>

    <p>I built Slap Bass to make that process easier: recognize playing techniques in audio and work toward notation that preserves how a line is played. The project brought together labeled recordings, audio classification experiments, live-input processing, and a MusicXML prototype that I could open in MuseScore.</p>

    <div class="post-video"><iframe src="https://www.youtube-nocookie.com/embed/xpEJzI-ZoCY" title="Slap Bass transcriber video demo" width="560" height="315" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p class="video-link"><a href="https://www.youtube.com/watch?v=xpEJzI-ZoCY">Watch the Slap Bass transcriber demo on YouTube ↗</a></p>

    <p class="media-caption">The demo shows a score in MuseScore with S/P/M technique annotations. It demonstrates the notation prototype; the current local export script generates those technique labels synthetically, so the video is not evidence of end-to-end classification accuracy.</p>

    <h2>What building it taught me</h2>

    <h3>Technique lives in the sound's texture</h3>

    <p>A pitch estimate cannot tell me whether a note was slapped or popped. That distinction depends on the attack and spectral shape: the information a musician hears as timbre.</p>

    <p>My Random Forest experiment uses 13 mel-frequency cepstral coefficients, averaged over each annotated note. MFCCs compress the spectral envelope into a compact feature vector. Averaging makes variable-length notes easy to compare, although it also discards the order of events within the note.</p>

    <p>The saved experiment trained 100 trees on IDMT bass recordings. Its stratified note-level split classified 32 of 33 held-out notes correctly. That result made the representation worth exploring, while a recording-level split would better test whether it transfers to unfamiliar performances.</p>

    <figure><a class="figure-link" href="/images/posts/slap-bass/random-forest-confusion-matrix.png" target="_blank" rel="noopener"><img src="/images/posts/slap-bass/random-forest-confusion-matrix.png" alt="Confusion matrix from the local Random Forest experiment" width="530" height="455" loading="lazy" /></a><figcaption>Saved notebook output: 23 slap-thumb notes and nine pop notes classified correctly, with one pop classified as a slap. ST and SP are the dataset's technique labels. This experiment evaluates annotated note clips, separately from onset detection and score generation. <a href="/images/posts/slap-bass/random-forest-confusion-matrix.png" target="_blank" rel="noopener">Open full-size figure ↗</a></figcaption></figure>

    <h3>Finding the event is part of recognizing it</h3>

    <p>The transcription prototype loads mono audio at 44.1 kHz, detects onsets, and segments from each detected onset to the next. Backtracking moves detected boundaries toward preceding local energy minima, helping retain the beginning of an attack.</p>

    <p>This makes segmentation a modeling decision. A window that starts late can lose the transient that distinguishes a technique; one spanning two notes can mix their characteristics. The live-input prototype raises the same issue with fixed buffers: buffer duration determines how much musical context each prediction sees.</p>

    <p>Pitch estimation follows a separate path using YIN. In the export prototype, median segment pitch becomes a note estimate. Short, muted, or strongly percussive events make this difficult because a visible onset does not guarantee a stable fundamental.</p>

    <h3>A readable score needs its own representation</h3>

    <p>The MusicXML generator converts seconds into quarter-note units using the supplied tempo: <code>quarter length = duration × BPM / 60</code>. It rounds durations to sixteenth-note increments and adds technique text through music21.</p>

    <p>That conversion exposes a tradeoff. Quantization makes a score readable, but can erase expressive timing. The current generator also appends notes sequentially rather than preserving absolute onset offsets, so rests and microtiming need more careful treatment. Uncertain pitch should eventually remain visible to the player instead of silently becoming a confident-looking note.</p>

    <h2>Preserving more of the performance</h2>

    <p>I also explored a CNN on fixed-size mel spectrograms. Three convolutional stages learn time-frequency patterns before global pooling and a softmax technique classifier. Compared with averaged MFCCs, the input retains the attack's development over time.</p>

    <figure><a class="figure-link" href="/images/posts/slap-bass/cnn-training-accuracy.png" target="_blank" rel="noopener"><img src="/images/posts/slap-bass/cnn-training-accuracy.png" alt="Training and validation accuracy from the local CNN experiment" width="846" height="393" loading="lazy" /></a><figcaption>Original training trace from the three-class MU/SP/ST experiment. The notebook records 378 examples with an 80/20 split; this curve is a development diagnostic, not an evaluation of complete transcriptions. <a href="/images/posts/slap-bass/cnn-training-accuracy.png" target="_blank" rel="noopener">Open full-size figure ↗</a></figcaption></figure>

    <p>The next integration step is connecting learned technique predictions to the notation path and evaluating onset, pitch, technique, and rhythm together on unseen recordings. My main learning is that each layer has to preserve something the next one needs. The final test is whether the transcription helps me practice a passage with less guesswork while keeping the details that made me want to learn it.</p>
  </div>
  <a class="back-to-posts article-end" href="/posts">← Back to all posts</a>
</article>
