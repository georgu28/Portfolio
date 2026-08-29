// Single source of truth for all site content.
// Every work + project entry leads with an `impact` metric (rendered first).

export const DATA = {
  name: "George Gu",
  initials: "GG",
  url: "https://georgegu.dev", // used for metadata/OG; update if domain differs
  headshotUrl: "/images/headshot1.jpg", // alt available: /images/headshot2.jpg
  tagline: "CS @ Michigan · ML/SWE · prev Capital One & Nexteer", // metadata/OG only
  greeting: "Hi, I'm George",
  bio: "CS student at the University of Michigan. I build scalable systems and ship real products and features.",
  about:
    "I'm an undergraduate student in the University of Michigan pursing a BSE in Computer Science. \
    I'm passionate about applying technology to deliver scalable impact. \
    I've built production systems as a founding engineer, worked in bank tech, shipped an LLM tool deployed across 26 sites, and published first-author research. \
    Outside of code, I'm interested in philosophy, game design, bouldering, skateboarding, golf, guitar, and calisthenics.",
  intro: {
    experience: "Building and scaling production systems.",
    projects: "A mix of systems, ML, and full-stack work. Here are a few I'm proud of.",
  },

  contact: {
    email: "georgu@umich.edu",
    github: "https://github.com/georgu28",
    linkedin: "https://linkedin.com/in/george-gu-146bb0251",
    resume: "/resume.pdf", // George adds the file to /public
  },

  work: [
    {
      company: "Capital One",
      title: "Software Engineer Intern",
      start: "Jun 2026",
      end: "Aug 2026",
      logoUrl: "/images/Capital-One-Logo.jpg",
      impact: { value: "8 months", label: "of data staleness eliminated" },
      highlights: [
        "Delivered an end-to-end production asset-certification feature, replacing manual outreach across 2,000+ assets with the PUT /certify-asset endpoint (one of 44 REST endpoints) behind a three-tier authorization model, shipped with React badge components at 98% coverage against an 80% gate.",
        "Architected 2 AWS EventBridge-scheduled Python Lambdas running daily — a certification-reminder digest querying PostgreSQL views to email owners, and a ServiceNow CMDB reconciliation pipeline uploading encrypted reports to S3 — eliminating up to 8 months of data staleness from a prior one-time load.",
        "Authored idempotent Flyway PostgreSQL migrations building a ServiceNow CMDB caching layer (2 tables, 2 views, 2 indexes) within a 52-migration schema history, optimizing cross-table SQL for automated compliance reporting.",
        "Configured CI/CD across dev, QA, and prod with Jenkins pipelines, IAM roles, and CloudFormation stacks.",
      ],
      tags: ["AWS Lambda", "EventBridge", "Python", "PostgreSQL", "React", "Jenkins"],
      image: "",
      links: [],
    },
    {
      company: "BoilerVault Storage LLC",
      title: "Founding Engineer · Contract",
      start: "Jan 2026",
      end: "Jun 2026",
      logoUrl: "/images/BoilerVault_Logo.jpg",
      impact: { value: "$130K+", label: "revenue reconciled, 0 manual entry" },
      highlights: [
        "Reconciled out-of-order payment events across 4 Stripe accounts and 3 WordPress booking sites via idempotent webhooks, processing $130K+ gross revenue with 0 manual entry.",
        "Automated unmatched-charge reconciliation, saving 3+ hours of manual work per week by parking charges in an idempotent table and sweeping oldest-first once booking records land.",
        "Built a multi-tenant ops platform (FastAPI, PostgreSQL, Next.js/TypeScript) for a 3-campus storage business with JWT auth, RBAC, 20+ endpoints, and a 318-test backend suite.",
        "Migrated 475 legacy bookings into 2,000+ records across 5 tables via three-tier matching (exact email → fuzzy name → Stripe charge fallback), replacing a failing Zapier Google Sheets workflow as the new production system of record on Railway/Vercel.",
      ],
      tags: ["FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Stripe"],
      image: "/images/BoilerVault_SS.jpg",
      links: [
        { type: "Demo", href: "https://boilervault-ops-public-demo.vercel.app" },
      ],
    },
    {
      company: "Nexteer Automotive",
      title: "Software Engineer Intern",
      start: "May 2025",
      end: "Aug 2025",
      logoUrl: "/images/Nexteer-Logo.jpg",
      impact: { value: "87.5%", label: "less code-review time" },
      highlights: [
        "Deployed an LLM-powered IDE extension across 26 sites, cutting code-review time by 87.5% for safety-critical embedded steering systems.",
        "Built the extension (Python/TypeScript, Azure AI + Copilot APIs) to parse 300+ engineering guidelines and automate compliance checks across C/H files.",
        "Tuned prompt pipelines and few-shot strategies to 95% violation-detection accuracy, saving engineers ~8 hours of review per week.",
      ],
      tags: ["Python", "TypeScript", "Azure AI", "LLM", "Prompt Engineering"],
      image: "",
      links: [],
    },
    {
      company: "Villanova University",
      title: "Data Engineer",
      start: "Jun 2023",
      end: "Sep 2023",
      logoUrl: "", // no logo asset; card falls back to "VI" initials
      impact: { value: "28,000+", label: "pathogen isolates analyzed" },
      highlights: [
        "Engineered end-to-end data pipelines in R over 28,000+ pathogen isolates spanning 10+ years, applying PCA and clustering to surface essential detection trends.",
        "Published the analysis as first author in Antibiotics (2023).",
      ],
      tags: ["R", "PCA", "Clustering", "Data Pipelines"],
      image: "",
      links: [],
    },
  ],

  projects: [
    {
      title: "MeloChron",
      dates: "Jul 2026 - Aug 2026",
      impact: { value: "0.482", label: "PR-AUC vs. 0.421 baseline" },
      description:
        "A causal self-attention encoder (2 transformer blocks, 2 heads, width 128) summarizes a listener's 100 most recent plays with inter-play time gaps, feeding a 468K-parameter 2-layer MLP that predicts whether a listener voluntarily returns to a newly heard track — a cleaner taste signal than shuffle-driven next-plays. Frozen 50-dim audio embeddings projected to 128 dims represent track content. Trained in PyTorch on a cloud RTX 4090, cutting a multi-day run to hours while scaling training data 7x. Iterated past a strong running-rate baseline (0.421 PR-AUC) to an audio-content model at 0.482, a statistically significant gain confirmed by a listener-level paired bootstrap test over 100,000 evaluated listeners.",
      tags: ["PyTorch", "Transformers", "Self-Attention", "Recommender Systems", "Audio Embeddings"],
      image: "/images/MeloChron_SS.png",
      imageFit: "contain", // architecture diagram, show in full, don't crop
      imageLabel: "Architecture",
      links: [{ type: "Demo", href: "https://melochron.vercel.app/" }],
    },
    {
      title: "Image Classification & Transfer Learning",
      dates: "Jan 2026 - Apr 2026",
      impact: { value: "0.97", label: "validation AUROC" },
      description:
        "Built and compared a CNN and a Vision Transformer implemented from scratch in PyTorch (patch-to-token projection, a learnable [CLS] token, sinusoidal positional embeddings, multi-head self-attention) for dog-breed image classification. A 2-stage source/target transfer-learning pipeline pretrains on a 10-class breed task, then fine-tunes a frozen convolutional backbone on a binary target task, sweeping augmentation intensity across 4 levels and tuning early-stopping patience on validation AUROC to correct overfitting, reaching 0.93 accuracy and 0.97 AUROC.",
      tags: ["PyTorch", "CNN", "Vision Transformer", "Transfer Learning"],
      image: "/images/ImageClassifcation.png",
      imageFit: "contain", // preprocessing comparison figure, show in full, don't crop
      imageLabel: "Preprocessing",
      links: [],
    },
    {
      title: "Scalable Search Engine",
      dates: "Jan 2026 - Apr 2026",
      impact: { value: "3,000+", label: "Wikipedia docs indexed" },
      description:
        "A MapReduce pipeline builds a TF-IDF inverted index over 3,000+ Wikipedia documents. A Flask REST index server scores queries with PageRank-weighted cosine similarity across 3 partitioned index segments, deployed to AWS. A concurrent, service-oriented search frontend dispatches threaded requests to each segment and merges the ranked results. Segments and index servers scale independently for horizontal scalability.",
      tags: ["Python", "MapReduce", "Flask", "TF-IDF", "PageRank"],
      image: "/images/MapReduceArchitecture.jpg",
      imageFit: "contain", // architecture diagram, show in full, don't crop
      imageLabel: "Architecture",
      links: [], // private repo: no code link
    },
    {
      title: "Resume Screener",
      dates: "Jan 2025 - May 2025",
      impact: { value: "100+", label: "users served" },
      description:
        "NLP pipeline over 1,000+ labeled resumes and job postings with tokenization and TF-IDF vectorization for fit scoring at 92% accuracy. scikit-learn and TensorFlow ranking models with sentence-transformer embeddings and RAG, deployed via Streamlit to 100+ users.",
      tags: ["Python", "scikit-learn", "TensorFlow", "RAG", "Streamlit"],
      image: "/images/resumescreener.png",
      imageFit: "cover",
      imageLabel: "",
      links: [
        { type: "Source", href: "https://github.com/georgu28/MDST-Resume-Screener" },
        // Live demo placeholder, George will add the URL on redeploy.
        // Previous Streamlit URL (currently down): https://mdst-resume-screener-bhaqj64tyfxtp3ekp4qxz6.streamlit.app/
        { type: "Demo", href: "https://mdst-resume-screener-bhaqj64tyfxtp3ekp4qxz6.streamlit.app/" },
      ],
    },
  ],

  education: [
    {
      school: "University of Michigan",
      degree: "B.S.E. Computer Science",
      detail: "GPA 3.81",
      start: "2024",
      end: "May 2028",
    },
  ],

  skills: [
    {
      group: "Languages",
      items: ["Python", "C/C++", "Java", "SQL", "TypeScript/JavaScript", "HTML/CSS"],
    },
    {
      group: "ML & Frameworks",
      items: ["PyTorch", "TensorFlow", "scikit-learn", "React", "Flask", "Node.js"],
    },
    { group: "Tools", items: ["Git", "Docker", "AWS", "PostgreSQL", "Unix"] },
  ],

  publication: {
    role: "First author",
    authors: "Gu G. et al.",
    title:
      "A Comprehensive Study of Historical Detection Data for Pathogen Isolates from U.S. Cattle",
    venue: "Antibiotics",
    year: "2023",
    doi: "https://doi.org/10.3390/antibiotics12101509",
    context:
      "Built end-to-end R data pipelines over 28,000+ pathogen isolates spanning 10+ years.",
  },
} as const;
