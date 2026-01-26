# API Documentation

This repository contains a mini documentation site for the API at https://api.nivmizz7.fr

## How to edit the documentation
- Edit the files in the `docs/` folder (Markdown format)
- The site updates automatically after you rebuild with `mkdocs build`

## Preview documentation locally
```bash
mkdocs serve
```
Then open http://127.0.0.1:8000

## Build static site
```bash
mkdocs build
```
The static site will be in the `site/` folder.

## Serve with Node.js
```bash
npm install
npm start
```
Then open http://localhost:3000

## Deploy
You can deploy the `site/` folder to GitHub Pages or any static host.

---
More info: https://www.mkdocs.org/