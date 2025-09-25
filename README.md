## angxddeep.github.io

Personal site powered by Hugo with custom layouts and assets.

### Stack
- Hugo (extended)
- Local layouts in `layouts/` and assets in `assets/`
- GitHub Pages deploy via `.github/workflows/hugo.yml`

### Local development
```bash
# install Hugo (extended) if needed
# https://gohugo.io/installation/

# run dev server with live reload
hugo server -D
# visit http://localhost:1313/
```

### Build
```bash
hugo --minify
# output is generated to ./public
```

### Configuration
- `hugo.toml`:
  - `baseURL = 'https://angxddeep.github.io/'`
  - `title = 'Angaddeep Singh'`


