# Mohamed Elshenawy — Portfolio

A responsive personal portfolio for mobile development, backend APIs, and enterprise integration.

**Live website:** https://melshenawyarabapps.github.io/portfolio/

## What's included

- Eight mobile application projects with Google Play / App Store links
- Two IBM ACE and IBM MQ integration projects
- Engineering experience, technical expertise, and education
- LinkedIn, GitHub, email, and phone contact links
- Responsive navigation and accessible project filters
- Search and social sharing metadata

## Local preview

This is a static website with no build step or package dependencies. From the repository directory, run:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Content, semantic markup, project links, and metadata |
| `styles.css` | Visual design, responsive layouts, and reduced-motion support |
| `script.js` | Mobile navigation, project filters, and footer year |
| `images/image.PNG` | Original profile portrait; filename is case-sensitive on GitHub Pages |

Project cards are authored in HTML so their content is available with JavaScript disabled. Filters are progressively enabled by JavaScript.

## Updating content

Edit the corresponding section in `index.html`. Add a `data-category="mobile"` or `data-category="integration"` attribute to new project cards. Filter counts update automatically. Store URLs and professional details should be reviewed when projects or experience change.
