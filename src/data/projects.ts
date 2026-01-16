/**
 * Projects Data
 * 
 * Add your projects here. Each project should include:
 * - title: Project name
 * - description: Brief description of what the project does
 * - technologies: Array of technologies used
 * - githubUrl: Link to GitHub repository (optional)
 * - liveUrl: Link to live demo (optional)
 * - imageUrl: Path to project image (optional)
 * 
 * To add a new project, simply add a new object to the projects array.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean; // Featured projects appear first
}

export const projects: Project[] = [
  {
    id: "sonemote",
    title: "Sonemote",
    description: "Developed an end-to-end emotion recognition pipeline using a CNN trained on the FER2013 dataset (28,000+ images), enabling real-time classification of 7 emotional states from live webcam input. Built a real-time inference system with OpenCV face detection and Python-based audio control to play emotion-aligned music, implementing temporal smoothing to ensure stable predictions and transitions.",
    technologies: ["Python", "Machine Learning", "CNN", "OpenCV", "Computer Vision", "FER2013 Dataset", "Deep Learning"],
    imageUrl: "/images/sonemote.jpg",
    featured: true,
  },
  {
    id: "resume-screener",
    title: "Resume Screener App",
    description: "Built an NLP-based resume screening pipeline analyzing 1,000+ resumes and job postings using TF-IDF and feature engineering to replicate recruiter screening logic. Developed an interactive Streamlit web app for real-time uploads and AI-driven scoring. Implemented ML-based ranking models to match resumes to roles by semantic fit, supporting 100+ users.",
    technologies: ["Python", "Natural Language Processing (NLP)", "Machine Learning", "Streamlit", "TF-IDF"],
    liveUrl: "https://mdst-resume-screener-bhaqj64tyfxtp3ekp4qxz6.streamlit.app/",
    imageUrl: "/images/resumescreener.png",
    featured: true,
  },
];

