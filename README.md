# JeongHo Park's Portfolio & Blog

This is a modern portfolio website built with **Astro**, **Tailwind CSS**, and **Three.js**.

## Features
- 🚀 **High Performance**: Static Site Generation (SSG) by Astro.
- 🎨 **Modern Design**: Minimalist monochrome theme with clean typography.
- 🧊 **Interactive 3D**: Integrated Three.js for creative coding showcases.
- 📝 **MDX Support**: Write blog posts with interactive components.
- 📱 **Responsive**: Optimized for mobile and desktop.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) to view the site.

3. **Build for production:**
   ```bash
   npm run build
   ```
   The static files will be generated in the `dist/` directory.

## Deployment

This project is configured to deploy automatically to **GitHub Pages** using **GitHub Actions**.
On every push to the `main` branch, the site will look for the `.github/workflows/deploy.yml` configuration and build/deploy the site.

## Project Structure
- `src/content/blog`: Blog posts (Markdown/MDX).
- `src/components`: Reusable components (Header, Footer, ThreeCanvas, etc).
- `src/pages`: Website pages (`index.astro`, `blog/[...slug].astro`).
- `src/styles`: Global CSS and Tailwind configuration.
