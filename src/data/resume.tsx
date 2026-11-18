// Single source of truth for all site content.
// Every work + project entry leads with `impact` metrics (rendered first).

export const DATA = {
  name: "George Gu",
  initials: "GG",
  url: "https://georgegu.dev", // used for metadata/OG; update if domain differs
  headshotUrl: "/images/headshot1.jpg", // alt available: /images/headshot2.jpg
  tagline: "CS @ Michigan · ML/SWE · prev Capital One & Nexteer", // metadata/OG only
  greeting: "Hi, I'm George",
  bio: "CS student at the University of Michigan. I build systems that solve real problems, from backend infrastructure to AI-powered tools.",
  about:
    "I'm an undergraduate at the University of Michigan pursuing a B.S.E. in Computer Science. \
    I've worked as a founding engineer building production software, developed AI tools used by engineers across 26 sites, and published first-author research. \
    Outside of engineering, I'm into philosophy, game design, bouldering, skateboarding, golf, guitar, and calisthenics.",
  intro: {
    experience: "Building software, solving hard engineering problems, and getting things into production.",
    projects: "A few things I've built across machine learning, systems, and full-stack development.",
  },
  cta: "I'm looking for Summer 2027 internships in software engineering and machine learning. The best way to reach me is email.",

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
      start: "June 2026",
      end: "August 2026",
      logoUrl: "/images/Capital-One-Logo.jpg",
      impact: [
        { value: "12,000+", label: "developers" },
        { value: "6+ hours", label: "saved weekly" },
      ],
      highlights: [
        "Built a full-stack asset certification workflow across 2,000+ services, eliminating 8+ months of data staleness.",
        "Architected two scheduled AWS Lambdas for automated reminders and ServiceNow CMDB syncing, saving engineers 6+ hours weekly.",
        "Wrote 7 idempotent PostgreSQL migrations and resolved 17+ CI/CD incidents, helping raise pipeline success to 97%.",
      ],
      tags: ["AWS Lambda", "EventBridge", "Python", "Flask", "PostgreSQL", "React", "Jenkins", "CloudFormation"],
      image: "",
      links: [],
    },
    {
      company: "BoilerVault Storage LLC",
      title: "Software Engineer (Contract)",
      start: "January 2026",
      end: "June 2026",
      logoUrl: "/images/BoilerVault_Logo.jpg",
      impact: [
        { value: "$130K+", label: "processed" },
        { value: "99.6%", label: "data consistency" },
      ],
      highlights: [
        "Built a multi-tenant platform with FastAPI, PostgreSQL, and Next.js, scaling a three-campus storage business by 200%.",
        "Designed 7+ webhook pipelines with payment matching and out-of-order event handling across financial accounts and consumer sites.",
        "Migrated 475 legacy bookings into 2,000+ records across five tables, shipping seven production phases in eight weeks.",
        "Built a 318-test backend suite to verify migrations, payment flows, and production behavior.",
      ],
      tags: ["Python", "FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Stripe", "Claude Code"],
      image: "/images/BoilerVault_SS.jpg",
      links: [
        { type: "Demo", href: "https://boilervault-ops-public-demo.vercel.app" },
      ],
    },
    {
      company: "Nexteer Automotive",
      title: "Software Engineer Intern",
      start: "May 2025",
      end: "August 2025",
      logoUrl: "/images/Nexteer-Logo.jpg",
      impact: [
        { value: "60%", label: "less code-review time" },
        { value: "95%", label: "detection recall" },
      ],
      highlights: [
        "Built an AI-powered code compliance tool that checks C/C++ code against 300+ engineering guidelines.",
        "Tuned prompts and few-shot examples to reach 95% violation-detection recall, with false positives on just 2% of files.",
        "Deployed the tool as a VS Code extension across 26 sites, reducing manual review time by 60% for 15+ engineers.",
      ],
      tags: ["Python", "TypeScript", "Azure AI", "LLMs", "Prompt Engineering"],
      image: "",
      links: [],
    },
  ],

  projects: [
    {
      title: "Traversyl",
      category: "Full-Stack Development",
      dates: "October 2026",
      impact: [
        { value: "3,117", label: "problems" },
        { value: "17", label: "algorithm skills" },
      ],
      description:
        "A gamified LeetCode platform that helps users track what they understand, what they're forgetting, and what to practice next.",
      highlights: [
        "Built a problem catalog organized around 17 algorithm skills, with skill decay modeled after human memory.",
        "Developed Claude-powered code reviews that evaluate approach, complexity, and line-level issues without executing submissions.",
        "Converted review results into deterministic Elo-style scores using Supabase transactions.",
      ],
      tags: ["Next.js", "TypeScript", "Supabase", "Claude API", "Tailwind CSS"],
      image: "/images/Traversyl.png",
      imageFit: "cover",
      imageLabel: "",
      links: [
        // Repo is private for now; add { type: "Source", href: "https://github.com/georgu28/traversyl" } once public.
        { type: "Demo", href: "https://traversyl.pro" },
      ],
    },
    {
      title: "MeloChron",
      category: "Machine Learning",
      dates: "July 2026 – August 2026",
      impact: [
        { value: "0.482", label: "PR-AUC" },
        { value: "14.4%", label: "improvement over baseline" },
      ],
      description:
        "A music recommendation model that predicts whether someone will return to a track after hearing it for the first time.",
      highlights: [
        "Built a PyTorch self-attention model combining listening history with audio-content embeddings across 100,000+ listeners.",
        "Improved track-adoption prediction from 0.4212 to 0.4820 PR-AUC.",
        "Cut training time by 92% while scaling training data 7x through controlled experiments on model architecture and embeddings.",
      ],
      tags: ["PyTorch", "Transformers", "NumPy", "scikit-learn", "Audio Embeddings"],
      image: "/images/MeloChron_SS.png",
      imageFit: "contain", // architecture diagram, show in full, don't crop
      imageLabel: "Architecture",
      links: [
        { type: "Source", href: "https://github.com/georgu28/MeloChron" },
        { type: "Demo", href: "https://melochron.vercel.app/" },
      ],
    },
  ],

  education: [
    {
      school: "University of Michigan",
      degree: "B.S.E. in Computer Science",
      detail: "GPA: 3.81 / 4.00",
      honors: "Dean's List · University Honors · William J. Branstrom Freshman Prize",
      start: "2024",
      end: "May 2028",
    },
  ],

  skills: [
    {
      group: "Languages",
      items: ["Python", "C/C++", "Java", "TypeScript", "JavaScript", "SQL", "R", "HTML/CSS"],
    },
    {
      group: "Frameworks & Libraries",
      items: ["FastAPI", "Flask", "React", "Next.js", "Node.js", "PyTorch", "scikit-learn", "NumPy", "Pandas", "SQLAlchemy"],
    },
    {
      group: "Tools & Platforms",
      items: ["AWS", "PostgreSQL", "Snowflake", "Docker", "Jenkins", "Flyway", "Alembic", "Git", "Linux", "Vercel", "Claude Code"],
    },
  ],

  publication: {
    role: "First Author",
    authors: "Gu G. et al.",
    title:
      "A Comprehensive Study of Historical Detection Data for Pathogen Isolates from U.S. Cattle",
    venue: "Antibiotics",
    year: "2023",
    doi: "https://doi.org/10.3390/antibiotics12101509",
    context:
      "Built R data pipelines to analyze 28,000+ pathogen isolates spanning more than a decade.",
  },
} as const;
