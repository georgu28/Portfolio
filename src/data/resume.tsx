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
    "I'm an undergraduate at the University of Michigan pursuing a B.S.E. in Computer Science. \
    I've built production systems as a founding engineer, worked in bank tech, shipped an LLM tool across 26 sites, and published first-author research. \
    Outside of code, I'm into philosophy, game design, bouldering, skateboarding, golf, guitar, and calisthenics.",
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
        "Delivered an end-to-end production asset certification feature, replacing manual outreach across 2,000+ assets with a secure PUT endpoint under three-tier authorization and matching React components.",
        "Built 2 EventBridge-scheduled Lambdas that automate certification reminder emails and daily ServiceNow CMDB sync, eliminating up to 8 months of data staleness from a prior one-time load.",
        "Authored idempotent Flyway PostgreSQL migrations that add a CMDB caching layer and tune SQL for compliance reporting.",
        "Configured CI/CD across dev, QA, and prod with Jenkins, IAM roles, SecretsManager, and CloudFormation stacks.",
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
        "Reconciled out-of-order payments through webhook pipelines across 4 Stripe accounts and 3 WordPress sites, processing $130K+ in revenue.",
        "Automated unmatched-charge reconciliation, saving 3+ hours of manual work per week by storing and sweeping oldest-first.",
        "Built a multi-tenant FastAPI/PostgreSQL/Next.js platform for a 3-campus storage business, with JWT auth across 20+ REST endpoints and a 318-test backend suite.",
        "Migrated 475 legacy bookings into 2,000+ records across 5 tables, replacing a failing Zapier Google Sheets workflow.",
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
        "Built an LLM-powered IDE extension in Python and TypeScript that parses 300+ internal engineering guidelines and automates compliance checks across C/H files via Azure AI and Claude APIs.",
        "Tuned prompt pipelines and few-shot strategies to 95% violation-detection accuracy on embedded steering code.",
        "Deployed to 26 sites, saving engineers an estimated 8 hours of manual code review per week.",
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
      logoUrl: "/images/VU-Logo.jpg",
      impact: { value: "28,000+", label: "pathogen isolates analyzed" },
      highlights: [
        "Built R data pipelines that analyze 28,000+ pathogen isolates across 10+ years with PCA and clustering.",
        "Published the findings as first author in Antibiotics (2023).",
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
        "A causal self-attention encoder summarizes a listener's track history and feeds a 468K-parameter 2-layer MLP that predicts whether they return to a newly heard track. Trained in PyTorch on a cloud RTX 4090, cutting a multi-day run to hours while scaling training data 7x. It beat a strong 0.421 PR-AUC baseline to reach 0.482, a gain confirmed by a paired bootstrap significance test over 100,000 listeners.",
      tags: ["PyTorch", "Transformers", "Self-Attention", "Recommender Systems", "Audio Embeddings"],
      image: "/images/MeloChron_SS.png",
      imageFit: "contain", // architecture diagram, show in full, don't crop
      imageLabel: "Architecture",
      links: [
        { type: "Source", href: "https://github.com/georgu28/MeloChron" },
        { type: "Demo", href: "https://melochron.vercel.app/" },
      ],
    },
    {
      title: "Image Classification & Transfer Learning",
      dates: "Jan 2026 - Apr 2026",
      impact: { value: "0.97", label: "validation AUROC" },
      description:
        "A CNN and a from-scratch Vision Transformer, both built in PyTorch, classify dog breeds. A two-stage transfer-learning pipeline pretrains on a 10-class breed task, then fine-tunes a frozen convolutional backbone on a binary task, reaching 0.93 accuracy and 0.97 AUROC.",
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
        "A multi-stage MapReduce pipeline indexes 3,000+ Wikipedia documents, computing TF-IDF scores and per-document normalization factors across a parallel, multi-job architecture. A Flask API serves 3 partitioned index segments, ranking results by PageRank-weighted cosine similarity, and is deployed to AWS.",
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
        "An NLP pipeline built with TF-IDF and a scikit-learn LinearSVC classifies 12,000+ resumes into 43 categories at 82%/94% top-1/top-3 accuracy. RAG retrieval with FAISS and an LLM ranks resumes against live job postings, deployed via Streamlit to 100+ users.",
      tags: ["Python", "scikit-learn", "LinearSVC", "RAG", "FAISS", "Streamlit"],
      image: "/images/resumescreener.png",
      imageFit: "cover",
      imageLabel: "",
      links: [
        { type: "Source", href: "https://github.com/georgu28/Resume-Screener" },
        // Live demo placeholder, George will add the URL on redeploy.
        // Previous Streamlit URL (currently down): https://mdst-resume-screener-bhaqj64tyfxtp3ekp4qxz6.streamlit.app/
        { type: "Demo", href: "https://resume-screener-28.streamlit.app/" },
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
      "Built R data pipelines over 28,000+ pathogen isolates spanning 10+ years.",
  },
} as const;
