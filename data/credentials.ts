export type Credential = {
  slug: string;
  title: string;
  issuer: string;
  year: string;
  type:
    | "Certification"
    | "Training"
    | "Examination"
    | "Education"
    | "Other";
  description?: string;
  link?: string;
};

export const credentials: Credential[] = [
  {
    slug: "career-service-examination",
    title: "Career Service Examination",
    issuer: "Civil Service Commission",
    year: "2024",
    type: "Examination",
    description:
      "Professional Level Career Service Examination conducted by the Civil Service Commission for eligibility for appointment to positions in the Philippine government service. Passed the examination through the Pen and Paper Test.",
  },

  {
    slug: "bs-information-technology",
    title: "Bachelor of Science in Information Technology",
    issuer: "Cavite State University – Imus Campus",
    year: "2024",
    type: "Education",
    description:
      "Bachelor’s degree in Information Technology with academic training in software development, information systems, web technologies, database management, and related computing disciplines. Graduated Magna Cum Laude.",
  },

  {
    slug: "duda-platform-certified-specialist",
    title: "Duda Platform Certified Specialist",
    issuer: "Duda",
    year: "2025",
    type: "Certification",
    description:
      "Certification demonstrating proficiency with the Duda website builder and platform for professional website development and management.",

  },

  {
    slug: "skill-of-the-year-2025-generative-ai",
    title: "Skill of the Year 2025 on Generative AI",
    issuer: "Technical University of Munich",
    year: "2025",
    type: "Certification",
    description:
      "Credential recognizing training in Generative AI for Web Developers, with a focus on applying generative AI concepts and tools to web development.",
  },

  {
    slug: "tvl-information-and-communication-technology",
    title: "TVL – Information and Communication Technology",
    issuer: "International Electronics and Technical Institute, Inc.",
    year: "2018",
    type: "Education",
    description:
      "Technical-vocational education focused on Information and Communication Technology, providing foundational training in computer systems, digital technologies, and practical technical skills.",
  },
];