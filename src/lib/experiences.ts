export const experiences = [
  {
    slug: 'qualcomm', company: 'Qualcomm', role: 'Embedded / Machine Learning Engineer Intern', date: 'May–August 2026', tag: 'Agents × hardware',
    title: 'From engineering questions to agentic workflows.',
    deck: 'Building tools for the engineers behind modem, camera, CPU, and GPU systems.',
    metrics: [['15+', 'deployed SWE jobs'], ['600+', 'users supported']],
    intro: 'Hardware investigations leave a lot of evidence behind: logs, subsystem behavior, and the context engineers bring to a failure. My work at Qualcomm connected that engineering context to agentic software—tools that could help people investigate and get work done.',
    steps: ['Describe the task', 'Build a workflow', 'Run the agent', 'Evaluate the result'],
    stepDetails: ['Natural-language builder chat gives an engineer a way to express the job.', 'The platform turns that interaction into an agentic workflow.', 'A Claude Agent SDK backend supports agent creation and execution.', 'LLM-as-judge evaluation provides a way to assess the generated work.'],
    sections: [
      { heading: 'A platform for repeated work', text: 'I created a platform for building and deploying agentic workflows, supporting more than 15 deployed modem software-engineering jobs for over 600 users. The backend powered natural-language builder chat, agent creation, and LLM-as-judge evaluation. The useful unit was a workflow an engineer could actually use, rather than an isolated model response.' },
      { heading: 'Keeping the hardware context', text: 'I also optimized agent harnesses for root-cause analysis across modem, camera, CPU, and GPU logs, and contributed to LogTalk’s post-training process. This connected the software around a model to the engineering evidence it needed to investigate.' },
      { heading: 'The device side of AI', text: 'My résumé also covers Snapdragon X Elite NPU benchmarking for MCP and RAG agents, including C/C++ QNN and Hexagon API integration for tensor allocation, operator dispatch, and device synchronization. The reported benchmark improvements were 3× decoding throughput and 34% lower time to first token. Those are results from that benchmark work, not a claim about every model or workload.' },
      { heading: 'The connection I care about', text: 'This is where my interests in enterprise software and intelligent devices meet: the agent needs useful tools and evaluation, while the underlying compute still determines how quickly it can respond. I want to keep working across that boundary.' }
    ], links: [{ label: 'Related Qualcomm consulting engagement', href: '/experience/valley-consulting' }]
  },
  {
    slug: 'jirav', company: 'Jirav', role: 'AI Developer · Contract', date: 'February–May 2026', tag: 'Backend × financial tools',
    title: 'Plain-English questions. Reproducible calculations.',
    deck: 'An MCP layer connecting financial questions to structured data and deterministic analysis.',
    metrics: [['15+', 'REST APIs'], ['50+', 'financial datasets']],
    intro: 'A financial answer needs more than convincing prose. It needs the right records, the right dimensions, and a calculation that can be repeated. At Jirav, I worked on the backend connecting natural-language analysis to those foundations.',
    steps: ['Ask a question', 'Retrieve records', 'Calculate', 'Explain'],
    stepDetails: ['A user expresses a financial question in natural language.', 'An MCP layer exposes structured retrieval across the platform’s APIs and datasets.', 'Deterministic time-series and financial calculations operate on the retrieved data.', 'The analysis connects the result to the customer, product, or department context.'],
    sections: [
      { heading: 'Give the agent a useful interface', text: 'I architected an MCP layer over more than 15 REST APIs and 50 financial datasets. It translated questions into structured revenue, cost, and departmental retrieval for Jirav’s financial planning and analysis platform.' },
      { heading: 'Make the numbers repeatable', text: 'I implemented deterministic retrieval and time-series analysis for revenue and cost-of-goods-sold queries, margin calculations, variance and scenario comparisons, and dimensional slicing. Keeping these operations explicit makes the calculation easier to inspect and reproduce.' },
      { heading: 'Carry the context through', text: 'I developed a natural-language engine for SaaS artifacts, connecting business records with predictive insights and contextual analysis across customer, product, and department dimensions. The same number can mean different things depending on which period and slice of the business it represents.' },
      { heading: 'What this work sharpened', text: 'This experience deepened my interest in tool orchestration and backend infrastructure. The interface between a model and its data is where a broad question becomes a precise operation—and where a useful AI application earns its credibility.' }
    ], links: []
  },
  {
    slug: 'nasa', company: 'NASA Ames', role: 'AI / ML Research Intern', date: 'August 2024–August 2025', tag: 'ML × biological discovery',
    title: 'Which signals survive a change in perspective?',
    deck: 'Studying gene expression, model agreement, and the distance between a prediction and a biological explanation.',
    metrics: [['3+', 'spaceflight studies'], ['2026', 'npj Microgravity publication']],
    intro: 'Spaceflight biology brings together small datasets, many measured genes, and questions that matter beyond a model score. At NASA Ames, I investigated how predictive models can help identify gene candidates that remain informative across studies and representations.',
    steps: ['Measure biology', 'Fit models', 'Compare evidence', 'Interpret candidates'],
    stepDetails: ['Gene-expression data and quantitative phenotypes provide complementary measurements.', 'Regression models connect expression patterns to observed outcomes.', 'Cross-model and cross-study comparisons test how stable the evidence is.', 'Feature and pathway analysis turn model output into hypotheses for further investigation.'],
    sections: [
      { heading: 'Two related lines of work', text: 'My research included GRIP, a framework for investigating reproducible gene–phenotype relationships, and a separate retinal transcriptomics study. They share a concern with interpretable model evidence, but they are distinct projects with different datasets and publication status.' },
      { heading: 'GRIP: inspect the stability of a ranking', text: 'I proposed GRIP to investigate gene relationships across technical representations of RNA-sequencing data. The current framework combines continuous regression, transformation-based environments, invariant model variants, and ensemble gene scoring. Its detailed write-up separates what the implementation measures from stronger causal claims.' },
      { heading: 'Retinal inference: connect expression to injury', text: 'For the retinal work, I contributed cross-model feature comparisons, pathway-level interpretation, and comparative results and figures to the study published in npj Microgravity in May 2026. The original analysis notebooks were developed by James Casaletto within the broader collaboration.' },
      { heading: 'A prediction is a starting point', text: 'A feature ranking is evidence from a model, not proof of a biological mechanism. I care about making that evidence traceable: which data, which representation, which model, and which assumptions produced the result? The articles below walk through the actual methods and their limitations.' }
    ], links: [{ label: 'GRIP: methods, diagrams & results', href: '/posts/grip' }, { label: 'Retinal inference: full research write-up', href: '/posts/retinal-inference' }, { label: 'Published npj Microgravity study', href: 'https://www.nature.com/articles/s41526-026-00625-w' }]
  },
  {
    slug: 'valley-consulting', company: 'Valley Consulting Group', role: 'Senior Technical Consultant', date: 'UC Berkeley · 12-week Qualcomm Compute engagement', tag: 'Prototyping × technical strategy',
    title: 'Make the experiment useful to a decision.',
    deck: 'Connecting AI prototypes, hardware benchmarks, and technical recommendations.',
    metrics: [['12', 'week engagement'], ['Biweekly', 'client syncs']],
    intro: 'Through Valley Consulting Group, I worked on a Qualcomm Compute engagement that combined hands-on AI/ML development with hardware benchmarking and competitive research. This consulting engagement was separate from my Qualcomm internship.',
    steps: ['Frame the question', 'Prototype & benchmark', 'Compare evidence', 'Recommend'],
    stepDetails: ['Define the technical question the engagement needs to answer.', 'Use prototypes and hardware measurements to ground the investigation.', 'Place the findings alongside competitive research.', 'Communicate the implications in client syncs and presentations.'],
    sections: [{ heading: 'From implementation to recommendation', text: 'I delivered prototypes and executive recommendations during a 12-week engagement. The work combined AI/ML development, hardware benchmarking, and competitive research, with biweekly syncs and midterm and final presentations.' }, { heading: 'Explain what the evidence changes', text: 'A technical result becomes more useful when the audience can see its implications. This work connected building and measuring with the discipline of explaining what a result supports, what it does not, and how it informs a decision.' }], links: [{ label: 'Qualcomm internship', href: '/experience/qualcomm' }]
  },
  {
    slug: 'replit', company: 'Replit', role: 'Campus Ambassador', date: 'August 2026', tag: 'Developer tools × community',
    title: 'Help more people get to their first build.',
    deck: 'Workshops, hackathons, and a feedback loop between student builders and developer tools.',
    metrics: [['7', 'workshops & builder events'], ['300+', 'students reached through adoption']],
    intro: 'Developer tools matter most when people can turn an idea into something they can use. As a Replit Campus Ambassador, I helped students get started through workshops, hackathons, and builder events.',
    steps: ['Bring builders together', 'Build something', 'Hear the friction', 'Share feedback'],
    stepDetails: ['Workshops and events create a place to start.', 'Students use the tools on their own ideas.', 'Conversations surface what helps and what gets in the way.', 'User feedback goes back to Replit’s product team.'],
    sections: [{ heading: 'Create places to start', text: 'I led seven workshops, hackathons, and builder events, helping expand Replit adoption to more than 300 students and growing campus engagement by 35%. The work combined community building with practical developer education.' }, { heading: 'Close the feedback loop', text: 'I also delivered user feedback to Replit’s product team. Seeing where new builders get stuck is a useful lens on developer tooling: a powerful feature only helps when someone can discover it, understand it, and use it to make progress.' }], links: []
  }
];
