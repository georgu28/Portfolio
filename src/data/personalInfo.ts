/**
 * Personal Information Data
 * 
 * Update this file with your personal information.
 * This makes it easy to maintain and update your portfolio content.
 */

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  resumeUrl?: string; // Optional: link to your resume PDF
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
    [key: string]: string | undefined;
  };
}

export const personalInfo: PersonalInfo = {
  name: "George Gu",
  title: "Computer Science @ the University of Michigan, Ann Arbor",
  bio: "Hi, I'm an Undergraduate student in the University of Michigan pursuing a BSE in Computer Science. I have experience with machine learning, full-stack development and algorithms. I'm passionate about applying technology at a large scale to deliver sustainable solutions.",
  email: "georgu@umich.edu", // Update with your actual email
  location: "Ann Arbor, Michigan, United States",
  resumeUrl: "", // Add your resume URL here if you have one hosted
  socialLinks: {
    github: "https://github.com/georgu28",
    linkedin: "https://linkedin.com/in/george-gu-146bb0251",
    twitter: "", // Optional
    portfolio: "", // Optional
  },
};

