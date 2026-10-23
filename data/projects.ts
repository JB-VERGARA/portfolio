export type ProjectCategory =
  | "IT"
  | "Development"
  | "Design"
  | "Automation"
  | "AI"
  ;

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  year: string;
  categories: ProjectCategory[];
  technologies: string[];
  featured?: boolean;
  image: string;

  // Links
  github?: string;
  live?: string;
  youtube?: string;

  // Case study
  role?: string;
  overview?: string;
  process?: string;
  challenges?: string;
  outcome?: string;

  // Additional media
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "aristelle-fashion",
    title: "Aristelle Fashion",
    description:
      "A responsive fashion e-commerce website built to showcase handcrafted bracelets and provide customers with a direct way to connect with the brand.",
    year: "2024",
    categories: ["Development", "Design"],
    technologies: ["Next.js", "TypeScript", "Node.js", "Contentful"],
    featured: true,
    image: "/projects/aristelle.webp",
    live: "https://aristelle-fashion.vercel.app/",

    role: "Developer",

    overview:
      "A digital storefront for Aristelle Fashion, a fashion and accessories brand specializing in handcrafted bracelets designed to be timeless, versatile, and customizable.",

    process:
      "Built the website around a product-focused interface, integrating Contentful as a headless CMS so product information and content could be updated independently from the application.",

    challenges:
      "Creating a polished shopping experience that works consistently across desktop, tablet, and mobile while keeping product presentation, content management, and SEO in balance.",

    outcome:
      "A responsive online presence that allows customers to explore Aristelle Fashion's products and connect directly with the brand.",

    gallery: [],
  },

  {
  slug: "ats-resume-checker",
  title: "ATS Resume Checker",
  description:
    "An AI-assisted resume analysis tool that evaluates resumes against job descriptions, identifies missing keywords, and provides actionable suggestions for improving ATS compatibility.",
  year: "2026",
  categories: ["Development", "AI", "Design"],
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
  featured: true,
  image: "/projects/ats-resume-checker.png",

  role: "Developer & Designer",

  overview:
    "An AI-assisted resume checker built to help job seekers understand how well their resume matches a target job description and identify areas that could be improved.",

  process:
    "Designed the user flow and interface, then implemented resume and job description analysis, keyword matching, compatibility scoring, and actionable feedback using AI-assisted processing.",

  challenges:
    "Turning unstructured resume and job description content into useful, understandable feedback while keeping the experience simple enough for users to quickly identify what needs improvement.",

  outcome:
    "A practical AI-assisted tool that provides resume analysis, matching insights, missing keywords, and improvement suggestions in a simple, user-friendly interface.",

  gallery: [],
},

  {
    slug: "three-j-print-center",
    title: "Three J Print Center",
    description:
      "A responsive business website designed to showcase printing products and services while making information easier for customers to discover.",
    year: "2024",
    categories: ["Development", "Design"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    featured: true,
    image: "/projects/3jprintcenter.webp",

    live: "https://3jprintcenter.vercel.app/",

    role: "UX-Designer & Developer",

    overview:
      "A business website developed for Three J Print Center to establish a stronger online presence and present its printing products and services clearly.",

    process:
      "Designed and developed a responsive interface using Next.js and Tailwind CSS, with Node.js-powered functionality supporting dynamic content and customer interactions.",

    challenges:
      "Balancing performance, responsive design, and search visibility for a business website serving a broad audience.",

    outcome:
      "A responsive business platform that gives Three J Print Center a dedicated online presence and makes its services easier for customers to explore.",

    gallery: [],
  },

  {
    slug: "bryan-assistant",
    title: "Bryan Assistant",
    description:
      "A Windows desktop voice-controlled script launcher built to automate everyday tasks through custom voice commands.",
    year: "2026",
    categories: ["IT", "Development", "Automation"],
    technologies: ["Python", "PySide6", "PyAutoGUI"],
    featured: true,
    image: "/projects/bryan-assistant.jpg",

    github:
      "https://github.com/JB-VERGARA/Python-Windows-Voice-Assistant",

    role: "Developer",

    overview:
      "A personal Windows desktop assistant designed around custom voice commands and script-based automation.",

    process:
      "Built the application incrementally with Python, PySide6, and reusable scripts so new commands and automations can be added without rebuilding the core interface.",

    challenges:
      "Designing a voice-controlled workflow that remains predictable and command-driven while keeping the desktop interface simple.",

    outcome:
      "A working desktop automation tool that can launch scripts and perform custom actions through voice commands.",
  },

    {
    slug: "python-json-task-manager",
    title: "Python JSON Task Manager",
    description:
      "An offline desktop task manager built with Python and PySide6, featuring calendar-based task management and local JSON storage.",
    year: "2026",
    categories: ["IT", "Development", "Automation"],
    technologies: ["Python 3.13", "PySide6", "JSON", "UUID"],
    featured: true,
    image: "/projects/taskmanager.png",

    github:
      "https://github.com/JB-VERGARA/Python-JSON-Task-Manager",

    role: "Developer",

    overview:
      "A personal desktop task manager designed around simplicity, portability, and local-first data storage without requiring an account, database, or internet connection.",

    process:
      "Built the application with Python and PySide6, using structured JSON files for task storage and a versioned schema to keep the data format flexible for future projects.",

    challenges:
      "Designing a complete task management workflow around local storage while supporting calendar views, task priorities, recurring backups, and portable data.",

    outcome:
      "A fully offline desktop task manager with calendar-based organization, automatic daily backups, and portable JSON data that can be moved or reused across systems.",

    gallery: [],
  },

  {
    slug: "personal-reviewer",
    title: "Personal Reviewer",
    description:
      "A responsive study and review platform with flashcards, multiple-choice questions, randomized reviews, and automatic scoring.",
    year: "2026",
    categories: ["Development", "Design"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    image: "/projects/reviewer.jpg",

    role: "Developer & Designer",

    overview:
      "A responsive review platform designed to make studying through flashcards and randomized questions more interactive.",

    process:
      "Designed the interface and implemented the review flow, question handling, randomized questions, scoring, and responsive layouts.",

    challenges:
      "Creating a review experience that works naturally across different question types while keeping the interface simple and easy to navigate.",

    outcome:
      "A responsive study application with multiple review modes and automatic results.",

    gallery: [],
  },

];