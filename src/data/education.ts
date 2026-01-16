/**
 * Education Data
 * 
 * Add your educational background here.
 */

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  coursework?: string[];
  activities?: string[];
  location?: string;
}

export const education: Education[] = [
  {
    id: "umich",
    school: "University of Michigan",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    startDate: "Aug 2024",
    endDate: "May 2027",
    gpa: "3.86 GPA",
    coursework: [
      "Data Structures and Algorithms",
      "Artificial Intelligence",
      "Foundations of Computer Science",
      "Computer Organization",
    ],
    activities: [
      "Zeta Pi Professional Technical Fraternity (Head of Professional Development)",
      "Michigan Hackers",
      "Michigan Data Science Team",
      "Michigan Skate Collective",
    ],
    location: "Ann Arbor, Michigan",
  },
  {
    id: "dow-high",
    school: "H.H. Dow High School",
    degree: "High School Diploma",
    field: "",
    startDate: "Aug 2020",
    endDate: "May 2024",
    activities: [
      "Co-Founder of Computer Science Club",
      "DECA ICDC Qualifier",
    ],
  },
];

