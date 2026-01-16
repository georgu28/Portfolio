/**
 * Skills Data
 * 
 * Organize your skills by category. You can add or remove categories
 * and skills as needed. The skills will be displayed in the Skills section.
 */

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "C++", "TypeScript", "Java", "R", "C"],
  },
  {
    category: "Machine Learning & Data",
    skills: ["Machine Learning", "Natural Language Processing (NLP)", "Data Analysis"],
  },
  {
    category: "Development",
    skills: ["Full-Stack Development", "Algorithms", "Data Structures", "Software Engineering"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "Streamlit", "Autodesk", "nTopology", "3D Printing"],
  },
];

