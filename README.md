## angxddeep.github.io

React + Vite + TypeScript personal site with a bluish-cyan gradient and a Markdown blog.

### Local dev

```bash
npm install
npm run dev
```

### Writing posts

- Add Markdown files to `public/posts/*.md` with frontmatter `title`, `date`, `description`.
- Add a record to `public/posts/index.json` with the `slug` (filename without `.md`).

### Deploy to GitHub Pages
 
Push to `main`. The workflow builds and publishes `dist` to Pages. Ensure repository is named `angxddeep.github.io` and Pages is enabled (Source: GitHub Actions).


