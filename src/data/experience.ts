/**
 * Experience Data
 * 
 * Add your work experience here. Each experience entry includes:
 * - company: Company name
 * - position: Job title/position
 * - location: Work location
 * - startDate: Start date (format: "MMM YYYY")
 * - endDate: End date or "Present" for current role
 * - description: Array of bullet points describing your achievements
 * - technologies: Technologies used in this role
 * - type: Type of position (e.g., "Internship", "Full-time")
 */

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  type: string;
}

export const experiences: Experience[] = [
  {
    id: "capital-one",
    company: "Capital One",
    position: "Incoming Technology Intern",
    location: "Richmond, Virginia, United States",
    startDate: "Nov 2025",
    endDate: "Present",
    type: "Internship",
    description: [
      "Accepted offer to join Capital One's Technology Internship Program",
    ],
    technologies: [],
  },
  {
    id: "nexteer",
    company: "Nexteer Automotive",
    position: "Software Engineer",
    location: "Saginaw, Michigan, United States",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    type: "Internship",
    description: [
      "Built and deployed an AI-driven IDE extension automating compliance checks across 300+ coding guidelines",
      "Achieved 95% accuracy in violation detection, cut manual review time by 93%, and saved engineers 8 hours weekly",
      "Rolled out globally to 26 sites, integrated with internal dev tools, and partnered with firmware teams to accelerate project timelines by 25% for safety-critical steering systems",
    ],
    technologies: ["Python", "TypeScript"],
  },
  {
    id: "villanova",
    company: "Villanova University",
    position: "Software & Data Engineer - First Author",
    location: "Remote",
    startDate: "Jun 2023",
    endDate: "Sep 2023",
    type: "Research",
    description: [
      "Developed end-to-end R pipelines analyzing 28,000+ pathogen isolates across 10 years, integrating species, antibiotics, and resistance genes",
      "Applied PCA and clustering on 300+ variables to identify high-risk resistance patterns and geographic hotspots",
      "First-author of a peer-reviewed Antibiotics (MDPI) publication, uncovering 15+ key resistance trends in AMR surveillance",
    ],
    technologies: ["R", "Data Analysis", "PCA", "Clustering"],
    // Publication link can be added if needed
  },
  {
    id: "axia",
    company: "The AXIA Institute",
    position: "Technical Research Assistant",
    location: "Remote",
    startDate: "Jun 2023",
    endDate: "Aug 2023",
    type: "Research",
    description: [
      "Designed and 3D-printed biopolymer scaffolds to support trabecular bone growth, optimizing structures using Autodesk, nTopology, and custom Java software",
      "Reduced assay analysis time by 80% through custom software development",
      "Presented findings at the American Chemical Society Fall Scientific Meeting to an audience of 100+ scientific researchers",
      "Demonstrated 30% improved cell proliferation through structural optimization",
    ],
    technologies: ["Java", "Autodesk", "nTopology", "3D Printing"],
  },
];

