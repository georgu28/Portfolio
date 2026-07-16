// Single source of truth for all site content.
// Every work + project entry leads with an `impact` metric (rendered first).

export const DATA = {
  name: "George Gu",
  initials: "GG",
  url: "https://georgegu.dev", // used for metadata/OG; update if domain differs
  headshotUrl: "/images/headshot1.jpg", // alt available: /images/headshot2.jpg
  tagline: "CS @ Michigan · ML/SWE · prev Capital One & Nexteer", // metadata/OG only
  greeting: "Hi, I'm George",
  bio: "CS and ML student at the University of Michigan. I build scalable systems and ship real products and features.",
  about:
    "I'm a Computer Science student at the University of Michigan, working on my B.S.E. in Computer Science with a focus on Machine Learning. I'm passionate about exploring applications of machine learning and building scalable systems. I've built production systems as a founding engineer, worked in bank tech, shipped an LLM tool deployed across 26 sites, and published first-author research. Outside of code, I'm interested in philosophy, game design, bouldering, skateboarding, golf, guitar, and calisthenics.",
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
      title: "Technology Intern",
      start: "Jun 2026",
      end: "Aug 2026",
      logoUrl: "/images/Capital-One-Logo.jpg",
      impact: { value: "91%", label: "test coverage" },
      highlights: [
        "Authored 20+ integration tests covering mock DB transactions, cross-region failures, and timeout edge cases, lifting compliance-service coverage to 91%.",
        "Architected AWS Lambda pipelines ingesting daily asset-management snapshots to train predictive models on application lifecycle and business criticality.",
        "Built Python REST APIs for data-attestation and compliance workflows, secured with parameterized PostgreSQL queries and role-based access control.",
      ],
      tags: ["AWS Lambda", "Python", "PostgreSQL", "REST", "RBAC"],
      image: "",
    },
    {
      company: "BoilerVault",
      title: "Founding Engineer · Contract",
      start: "Jan 2026",
      end: "Present",
      logoUrl: "/images/BoilerVault_Logo.jpg",
      impact: { value: "$130K+", label: "revenue reconciled, 0 manual entry" },
      highlights: [
        "Reconciled out-of-order payment events across 4 Stripe accounts and 3 WordPress booking sites via idempotent webhooks, processing $130K+ gross revenue with 0 manual entry.",
        "Built a multi-tenant ops platform (FastAPI, PostgreSQL, Next.js/TypeScript) for a 3-campus storage business with JWT auth, RBAC, 20+ endpoints, and 140+ tests.",
        "Migrated 2,000+ legacy records via three-tier matching (exact email → fuzzy name → Stripe charge fallback), replacing a failing Zapier workflow as the new production system of record on Railway/Vercel.",
      ],
      tags: ["FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Stripe"],
      image: "/images/BoilerVault_SS.jpg",
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
    },
  ],

  projects: [
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
        "A MapReduce pipeline builds a TF-IDF inverted index over 3,000+ Wikipedia documents. A Flask REST index server scores queries with PageRank-weighted cosine similarity across 3 partitioned index segments. A concurrent, service-oriented search frontend dispatches threaded requests to each segment and merges the ranked results. Segments and index servers scale independently for horizontal scalability.",
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
        "NLP pipeline over 1,000+ resumes and job postings. scikit-learn and TensorFlow ranking models with sentence-transformer embeddings and RAG, deployed via Streamlit to 100+ users.",
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
      end: "May 2028 (Expected)",
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
    { group: "Tools", items: ["Git", "Docker", "Kubernetes", "PostgreSQL", "Unix"] },
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
