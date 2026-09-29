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
    linkedin: "https://linkedin.com/in/georgu",
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
        "Shipped asset certification feature, replacing manual outreach for 2,000+ assets",
        "Automated reminders and daily CMDB sync, eliminating up to 8 months of staleness",
        "Wrote idempotent Flyway migrations adding a CMDB cache for compliance reporting",
        "Set up CI/CD across dev, QA, and prod with Jenkins and CloudFormation",
      ],
      tags: ["AWS Lambda", "EventBridge", "Python", "Flask", "PostgreSQL", "React", "Jenkins"],
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
        "Reconciled $130K+ in revenue across 4 Stripe accounts and 3 WordPress sites",
        "Automated unmatched-charge reconciliation, saving 3+ hours of manual work weekly",
        "Built a multi-tenant platform for 3 campuses: 20+ endpoints, 318 backend tests",
        "Migrated 475 legacy bookings into 2,000+ records, replacing a broken Zapier flow",
      ],
      tags: ["Python", "FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Stripe"],
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
        "Built an LLM IDE extension that checks code against 300+ engineering guidelines",
        "Tuned prompts and few-shot examples to 95% violation-detection accuracy",
        "Deployed to 26 sites, saving engineers ~8 hours of code review per week",
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
        "Analyzed 28,000+ pathogen isolates across 10+ years with PCA and clustering in R",
        "Published the findings as first author in Antibiotics (2023)",
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
        "A transformer-based model that predicts whether a listener will return to a newly heard track, beating a strong baseline on 100,000 listeners.",
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
        "A CNN and a from-scratch Vision Transformer that classify dog breeds, using transfer learning to reach 0.97 AUROC.",
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
        "A Wikipedia search engine built on a MapReduce indexing pipeline, with a Flask API that ranks results and is deployed to AWS.",
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
        "An NLP tool that sorts resumes into job categories and ranks them against live job postings, used by 100+ people.",
      tags: ["Python", "scikit-learn", "LinearSVC", "RAG", "FAISS", "HuggingFace", "Streamlit"],
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
    { group: "Tools", items: ["Git", "Docker", "AWS", "PostgreSQL", "Unix", "Claude Code"] },
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
