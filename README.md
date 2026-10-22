# John Bryan Vergara — Portfolio

Personal portfolio website of **John Bryan Vergara**, showcasing my projects, technical work, visual work, and professional background.

🌐 **Live Site:** https://johnbryanvergara.vercel.app/  
💻 **GitHub:** https://github.com/JB-VERGARA

## About

This portfolio was designed and developed from the ground up to serve as a central place for my work and professional presence.

It focuses on:

- Software and web development projects
- Technical skills and experience
- Visual and creative work
- Professional background
- Search engine optimization and discoverability
- Responsive and accessible design

The goal was to keep the experience **clean, fast, personal, and easy to maintain** while still demonstrating how I approach real-world development.

## Built With

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **MDX**
- **Vercel**
- **Git & GitHub**

## Features

- Responsive design for desktop and mobile
- Project showcase with individual project pages
- **MDX-based content integration** for easier project/content management
- Reusable components for project pages and content
- Visual work gallery
- Interactive image viewer
- YouTube project integration
- SEO metadata
- Open Graph metadata
- Structured data using Schema.org
- Sitemap
- Robots.txt
- Static generation where appropriate
- Accessible semantic HTML
- Optimized images and assets
- Custom animations and UI interactions

## Content Architecture

The portfolio separates **content from presentation** as much as practical.

Using MDX allows project and content pages to contain Markdown-style content while still supporting React components when needed.

This makes it easier to:

- Add new projects without rebuilding page layouts
- Keep project content organized
- Reuse the same page structure across projects
- Mix written content with interactive React components
- Update portfolio content without modifying the core UI

## Project Structure

```text
app/
├── page.tsx
├── work/
│   └── [slug]/
├── visual-work/
├── layout.tsx
├── robots.ts
└── sitemap.ts

components/
├── Reveal.tsx
├── VisualWorkGallery.tsx
├── VisualWorkViewer.tsx
└── YouTubeEmbed.tsx

content/
└── projects/
    └── *.mdx

data/
├── projects.ts
└── visual-work.ts

public/
└── assets/
```

## Development

Clone the repository:

```bash
git clone https://github.com/JB-VERGARA/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

Run the production build locally:

```bash
npm start
```

## Deployment

The portfolio is deployed using **Vercel**.

Changes pushed to the production branch can be deployed through the connected Vercel project.

## Why This Repository Is Public

This repository is intentionally public so that recruiters, employers, collaborators, and other developers can see how the portfolio is structured and built.

The deployed website demonstrates the final product, while the repository provides a closer look at the implementation behind it.

## License

This project is primarily a personal portfolio.

You are welcome to use the code as a reference or for learning, but please do not present the portfolio, branding, content, photography, or personal work as your own.

---

**Designed and developed by John Bryan Vergara.**
