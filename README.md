# CS 344 Web Development — Website Team Project

A team web project built with React and Vite.

## Team Guides

Full documentation for the project is in the `docs/` folder:

- `docs/vite-project-structure.pdf` — Vite commands, folder structure, where to create pages, where to put images, and recommended team ownership split
- `docs/github-and-deployment.pdf` — GitHub workflow, branching, building for production, and uploading to the professor's server via FTP

**Read these before writing any code.**

## Getting Started

Make sure you have [Node.js](https://nodejs.org) installed, then:

```bash
git clone https://github.com/jegboose/web-programming-website-project.git
cd web-programming-website-project
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page live-reloads on every save.

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at localhost:5173 |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check code for errors |

## Project Structure

```
src/
├── main.jsx          # Entry point — do not edit
├── App.jsx           # Root component — replace with your layout
├── index.css         # Global styles
├── assets/           # Images and SVGs imported in components
├── components/       # Reusable UI (Navbar, Footer, etc.)
├── pages/            # One file per page (Home, About, Contact, etc.)
└── styles/           # CSS files scoped to each component or page

docs/                 # Team guides (PDFs)
public/               # Static files served as-is
```

## Deploying to the Professor's Server

1. Run `npm run build` to generate the `dist/` folder
2. Open FileZilla and connect with the server credentials from your professor
3. Upload the contents of `dist/` to the server's web folder (`public_html`, `www`, or `htdocs`)

See `docs/github-and-deployment.pdf` for the full step-by-step walkthrough.
