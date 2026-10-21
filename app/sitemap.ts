import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://johnbryanvergara.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },

    {
      url: `${baseUrl}/visual-work`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...projects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}