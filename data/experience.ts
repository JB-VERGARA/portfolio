export type Experience = {
  slug: string;
  role: string;
  company: string;
  description: string;
  startYear: string;
  endYear: string;
  technologies?: string[];
};

export const experience: Experience[] = [
  {
    slug: "eclerx-web-designer-developer",
    role: "Analyst - Web Designer/Developer",
    company: "eClerx, Alabang",
    description:
      "Designed and developed responsive business websites for LocalSearch using Duda and WordPress, translating client requirements and Figma/graphic design references into polished web experiences. Built custom-coded solutions when platform limitations required additional functionality, while also managing CMS content and on-page SEO across a high-volume production workflow.",
    startYear: "2025",
    endYear: "2026",
    technologies: [
      "Duda",
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    slug: "three-j-print-center-intern",
    role: "Intern",
    company: "Three J Print Center, Imus, Cavite",
    description:
      "Performed preventive maintenance and troubleshooting for computers, printers, and related hardware. Created print-ready graphic designs and assisted clients with printing and design requirements.",
    startYear: "2024",
    endYear: "2024",
    technologies: [
      "Hardware",
      "Troubleshooting",
      "Graphic Design",
      "Printing",
    ],
  },
];