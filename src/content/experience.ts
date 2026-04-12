import type { ExperienceItem } from "@/types/content";

export const experience: ExperienceItem[] = [
  {
    company: "American Express",
    role: "Software Engineer I",
    employmentType: "Full-time",
    start: "Jan 2025",
    end: "Present",
    location: "Sunrise, Florida, United States · On-site",
    summary:
      "Working as a full-time software engineer on production systems at American Express, building on the frontend and backend foundations established during prior internships.",
    bullets: [
      "Contribute to production engineering work in a high-accountability enterprise environment.",
      "Build software with a focus on reliability, maintainability, and clean collaboration across teams.",
      "Apply the same product-minded frontend and systems thinking developed through earlier internships and academic programs."
    ],
    tech: ["React", ".NET", "Java", "APIs"]
  },
  {
    company: "American Express",
    role: "Software Engineer Intern",
    employmentType: "Internship",
    start: "Jun 2024",
    end: "Aug 2024",
    location: "Sunrise, Florida, United States · On-site",
    summary:
      "Migrated a legacy rule-building platform from .NET to a React-based architecture while contributing across UI and backend integration layers.",
    bullets: [
      "Migrated a legacy rule-building platform from .NET to a React-based architecture.",
      "Designed and enhanced user interfaces from the legacy .NET application using React and CoreUI components.",
      "Worked on backend systems, developing JDBC connections for database integration and creating API endpoints to support frontend data exchange."
    ],
    tech: ["React", "CoreUI", "JDBC", "APIs", ".NET"]
  },
  {
    company: "Google",
    role: "Google Tech Exchange",
    employmentType: "Apprenticeship",
    start: "Jan 2024",
    end: "May 2024",
    location: "United States · Remote",
    summary:
      "Completed a semester-long academic program for students from select HBCUs and HSIs in North America, focused on technical growth and career readiness.",
    bullets: [
      "Received comprehensive technical interview training and one-to-one mentoring from Googlers.",
      "Engaged in advanced data structures and project management courses for academic credit.",
      "Strengthened problem-solving discipline, communication, and professional readiness in a cohort-based environment."
    ],
    tech: ["Python", "Figma", "Data Structures", "Project Management"]
  },
  {
    company: "American Express",
    role: "Software Engineer Sprintern",
    employmentType: "Internship",
    start: "May 2023",
    end: "May 2023",
    location: "Sunrise, Florida, United States · On-site",
    summary:
      "Built a React module to streamline project tracking for Amex scrum teams with a clearer workflow for updates and monitoring.",
    bullets: [
      "Developed a React module aimed at streamlining project tracking for Amex scrum teams.",
      "Designed a structured table with add, edit, and timestamp functionality for project details.",
      "Improved the user experience with a clearer interface for monitoring project status and updates in real time."
    ],
    tech: ["React", "Docker", "Agile"]
  }
];
