# Piyush Wagh — Personal Portfolio Website

A modern, professional, and fully responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features dark/light mode, smooth animations, a typewriter effect, and a clean recruiter-ready design.

---

## 🚀 Live Demo

> **GitHub Pages:** `https://YOUR_GITHUB_USERNAME.github.io/PerWeb`
> _(Update this URL after you push to GitHub and enable GitHub Pages)_

---

## ✨ Features

- 🌗 **Dark / Light Mode** — Toggle with localStorage persistence
- ⌨️ **Typewriter Animation** — Dynamic role titles in the hero section
- 📜 **Scroll Progress Bar** — Animated top progress indicator
- 🔗 **Active Nav Highlighting** — Current section shown in navbar
- 📱 **Fully Responsive** — Mobile-first design for all screen sizes
- ✨ **Smooth AOS Animations** — Animate-on-scroll using IntersectionObserver
- 📄 **Resume View & Download** — Wired to a PDF in `assets/resume/`
- ♿ **Accessible** — ARIA labels, semantic HTML, keyboard navigation
- 🔍 **SEO Ready** — Meta tags, Open Graph, Twitter Card, structured HTML

---

## 📁 Project Structure

```
PerWeb/
├── index.html                  # Main HTML file (all sections)
├── assets/
│   ├── css/
│   │   └── styles.css          # Design system, dark/light mode, all styles
│   ├── js/
│   │   └── script.js           # Theme toggle, typewriter, AOS, scroll, menu
│   ├── images/
│   │   ├── favicon.svg         # Site favicon (PW monogram)
│   │   └── README_PHOTO.txt    # Instructions for adding profile photo
│   └── resume/
│       ├── Piyush_Wagh_Resume.pdf  ← ADD YOUR RESUME HERE
│       └── README_RESUME.txt   # Instructions for resume placement
└── README.md
```

---

## ⚙️ Setup & Customization

### 1. Add Your Resume PDF
- Export your resume as a PDF
- Rename it to `Piyush_Wagh_Resume.pdf`
- Place it in `assets/resume/`
- Both "View Resume" and "Download Resume" buttons will work automatically

### 2. Add Your Profile Photo
- Add your photo to `assets/images/profile.jpg`
- Open `index.html` and find `hero-image-inner`
- Replace the `<div class="hero-avatar-placeholder">` block with:
```html
<img src="assets/images/profile.jpg" alt="Piyush Wagh"
     style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />
```

### 3. Update GitHub Username
- Search for `YOUR_GITHUB_USERNAME` in `index.html`
- Replace all occurrences with your actual GitHub username

### 4. Customize Content
All content is in `index.html` — directly edit names, descriptions, links, and projects.

---

## 📦 Running Locally

No build tools needed! Just:
1. Open `index.html` in any modern browser, or
2. Use VS Code Live Server extension for best experience

---

## 🌐 Deploying to GitHub Pages

### Method 1: GitHub Pages (Easiest)
1. Push your project to a GitHub repository
2. Go to **Repository → Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Click **Save** — your site will be live in ~2 minutes!

> Add a `.nojekyll` file in the root (already created) to prevent GitHub's Jekyll processing.

### Method 2: Netlify / Vercel
1. Drag & drop the `PerWeb` folder into [netlify.com/drop](https://netlify.com/drop), or
2. Connect your GitHub repo to Netlify/Vercel for automatic deploys

---

## 🎨 Customizing the Design

All design tokens are CSS custom properties at the top of `styles.css`:

```css
:root {
  --accent: hsl(250, 84%, 65%);   /* Primary purple accent */
  --accent-2: hsl(190, 90%, 50%); /* Teal secondary accent */
}
```
Change these values to restyle the entire site instantly.

---

## 📝 SEO Checklist

- [x] `<title>` and `<meta description>` set
- [x] Open Graph tags (og:title, og:description, og:image)
- [x] Twitter Card meta tags
- [x] Semantic HTML5 elements (header, main, section, article, footer)
- [x] ARIA labels on interactive elements
- [x] favicon.svg linked

---

## 📄 License

© 2024 Piyush Wagh. All rights reserved.
