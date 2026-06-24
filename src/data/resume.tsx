// Single source of truth for all site content.
// Every work + project entry leads with an `impact` metric (rendered first).

export const DATA = {
  name: "George Gu",
  initials: "GG",
  url: "https://georgegu.dev", // used for metadata/OG; update if domain differs
  headshotUrl: "/images/headshot1.jpg", // alt available: /images/headshot2.jpg
  tagline: "CS @ Michigan · ML/SWE · prev Capital One & Nexteer", // metadata/OG only
  greeting: "Hi, I'm George",
  bio: "CS and ML student and Software Engineer at the University of Michigan. I build scalable systems and ship real products and features.",
  about:
    "I'm George — a CS student at the University of Michigan focused on exploring applications of machine learning and building systems that actually ship. I've built production systems as a founding engineer, interned in bank tech, shipped an LLM tool deployed across 26 sites, and published first-author research. Outside of code, I'm into philosophy, game design, skateboarding, guitar, and calisthenics.",
  intro: {
    experience: "Where I've shipped — building and scaling production systems.",
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
        "Authored 20+ integration tests, lifting service coverage to 91%.",
        "Architected AWS Lambda data pipelines feeding predictive models.",
        "Built Python REST APIs with RBAC and parameterized PostgreSQL queries.",
      ],
      tags: ["AWS Lambda", "Python", "PostgreSQL", "REST", "RBAC"],
      image: "",
    },
    {
      company: "BoilerVault",
      title: "Founding Engineer · Contract",
      start: "Jan 2026",
      end: "Present",
      logoUrl: "", // no logo asset — monogram fallback
      impact: { value: "2,000+", label: "records migrated" },
      highlights: [
        "Migrated 2,000+ legacy records via three-tier fuzzy matching — now the production system of record on Railway/Vercel.",
        "Built a multi-tenant ops platform (FastAPI, PostgreSQL, Next.js/TypeScript) for a 3-campus storage business with JWT auth, RBAC, 20+ endpoints, and 140+ tests.",
        "Engineered idempotent Stripe webhook reconciliation across 4 accounts and 3 booking sites.",
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
        "Deployed an LLM-powered IDE extension across 26 sites, cutting code-review time by 87.5%.",
        "Built the extension (Python/TypeScript) to parse 300+ engineering guidelines for automated compliance checks.",
        "Tuned prompt pipelines to 95% violation-detection accuracy.",
      ],
      tags: ["Python", "TypeScript", "LLM", "Prompt Engineering"],
      image: "",
    },
  ],

  projects: [
    {
      title: "Scalable Search Engine",
      dates: "Jan 2026 - Apr 2026",
      impact: { value: "3,000+", label: "Wikipedia docs indexed" },
      description:
        "A MapReduce pipeline builds a TF-IDF inverted index over 3,000+ Wikipedia documents. A Flask REST index server scores queries with PageRank-weighted cosine similarity across 3 partitioned index segments. A concurrent, service-oriented search frontend dispatches threaded requests to each segment and merges the ranked results. Segments and index servers scale independently for horizontal scalability.",
      tags: ["Python", "MapReduce", "Flask", "TF-IDF", "PageRank"],
      image: "/images/MapReduceArchitecture.jpg",
      imageFit: "contain", // architecture diagram — show in full, don't crop
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
        // Live demo placeholder — George will add the URL on redeploy.
        // Previous Streamlit URL (currently down): https://mdst-resume-screener-bhaqj64tyfxtp3ekp4qxz6.streamlit.app/
        { type: "Demo", href: "https://mdst-resume-screener-bhaqj64tyfxtp3ekp4qxz6.streamlit.app/" },
      ],
    },
  ],

  education: {
    school: "University of Michigan",
    degree: "B.S.E. Computer Science",
    detail: "GPA 3.81",
    start: "2024",
    end: "May 2028",
  },

  skills: [
    {
      group: "Languages",
      items: ["Python", "C/C++", "Java", "SQL", "TypeScript/JavaScript"],
    },
    {
      group: "ML & Frameworks",
      items: ["PyTorch", "TensorFlow", "scikit-learn", "React", "Flask", "Node.js"],
    },
    { group: "Tools", items: ["Git", "Linux"] },
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
