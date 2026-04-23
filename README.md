# Nuruzzaman Shawon — Personal Portfolio Website

A fully responsive, GitHub Pages-ready personal portfolio website for **Nuruzzaman Shawon**, Cybersecurity & Network Security Specialist, Adjunct Instructor, and Academic Researcher at Pacific States University.

---

## 🚀 Features

- **Fully Responsive** — Mobile, tablet, and desktop optimized
- **Dark Cyber-Academic Theme** — Professional cybersecurity/AI aesthetic
- **Animated Terminal** — Live typing terminal on the hero section
- **Scroll Animations** — Reveal effects on all sections
- **Sticky Navbar** — With active section tracking
- **Skill Progress Bars** — Animated on scroll
- **SEO Optimized** — Meta tags, OG tags, semantic HTML
- **Zero Dependencies** — Pure HTML, CSS, JavaScript (Font Awesome via CDN)

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # All JavaScript
└── README.md           # This file
```

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it: `nuruzzamanshawon.github.io` (for a root domain) OR any name like `portfolio`
4. Set to **Public**
5. Click **Create repository**

### Step 2 — Upload Files
**Option A — GitHub Web UI:**
1. Click **Add file → Upload files**
2. Upload `index.html`, and the `css/` and `js/` folders
3. Commit changes

**Option B — Git CLI:**
```bash
git init
git add .
git commit -m "Initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to repository **Settings**
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch → **/ (root)**
5. Click **Save**

### Step 4 — Access Your Site
- If repo is named `username.github.io` → site is at `https://username.github.io`
- Otherwise → `https://username.github.io/repo-name`

GitHub Pages typically goes live within **1–3 minutes**.

---

## 🖼️ Adding Real Photos

### Profile Photo
Replace the placeholder in `index.html`:
```html
<!-- Find this in #about section: -->
<div class="about-img-placeholder">
  <i class="fas fa-user-tie"></i>
</div>

<!-- Replace with: -->
<img src="images/profile.jpg" alt="Nuruzzaman Shawon" style="width:100%;height:100%;object-fit:cover;" />
```

### Award Images (Picture 2 & 3)
Replace placeholder divs in `#awards` section with:
```html
<img src="images/award1.jpg" alt="Award Name" style="width:100%;height:200px;object-fit:cover;" />
```

---

## ✏️ Customization

| What to change | Where |
|---|---|
| Name / title | `index.html` — hero section |
| Email address | `index.html` — contact section |
| LinkedIn / GitHub URLs | `index.html` — contact & footer |
| Publications | `index.html` — `#research` section |
| Projects | `index.html` — `#projects` section |
| Skills percentages | `index.html` — `data-width` attributes |
| Colors | `css/style.css` — `:root` variables |

---

## 📬 Contact Form

The form currently shows a success toast on submit. To make it functional, integrate with one of these free services:

- **[Formspree](https://formspree.io)** — Add `action="https://formspree.io/f/YOUR_ID"` to the form
- **[Web3Forms](https://web3forms.com)** — Free, no backend needed
- **EmailJS** — Send emails directly from JavaScript

---

## 📄 License

This website template was created for **Nuruzzaman Shawon**. All rights reserved.
