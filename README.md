# David A Gould - Professional Portfolio Website

A clean, modern, dark-themed portfolio website showcasing professional experience, portfolio projects, and expertise in Product Management.

## 🚀 Quick Start

### View Locally
1. Open `index.html` in any web browser
2. No build process or dependencies needed!

### Deploy to GitHub Pages (FREE)
1. Create a new repository on GitHub (e.g., `your-username.github.io`)
2. Upload these files: `index.html`, `style.css`, `script.js`
3. Go to Settings → Pages
4. Select `main` branch as source
5. Your site will be live at: `https://your-username.github.io`

## ✅ What's Been Implemented

### High-Impact Content Upgrades:
- ✅ **Hero specificity**: Added clear positioning line about building customer-facing experiences across devices, cloud, and apps
- ✅ **$5M+ proof**: Added validation story (secured funding → validated outcomes → influenced adoption)
- ✅ **Outcome bullets**: Added 2 bullet points per major role (Amazon, Kaon, Hitachi, Monotype, ATI)
- ✅ **Evidence links**: USA Today, Ergonomics journal, Wired, MIT whitepaper, Google Patents
- ✅ **"What I'm known for"**: New section highlighting key strengths (roadmaps, cross-functional work, thought leadership)
- ✅ **Copy tightening**: "Leading" vs "driving", "Exit Value" vs "Business Unit Valuation", "Trusted by teams at" vs "Global Customers"

### Design Enhancements:
- ✅ Professional Inter font
- ✅ No emojis - clean typography
- ✅ Refined dark color palette
- ✅ Clickable patents with hover effects
- ✅ Work cards with evidence links
- ✅ Better spacing and visual hierarchy

## 📝 Still Need to Customize

### Required Updates (3 items):

1. **Line 362** - Contact Form:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Get a free Formspree account at: https://formspree.io

2. **Line 376** - LinkedIn URL:
```html
<a href="https://www.linkedin.com/in/YOURLINKEDINURL" target="_blank">LinkedIn →</a>
```
Replace `YOURLINKEDINURL` with your actual LinkedIn username

3. **Line 377** - Resume PDF:
```html
<a href="/path/to/your/resume.pdf" target="_blank">Download Resume (1 page) →</a>
```
Upload your resume PDF and update the path

## 🌐 Hosting Options

### GitHub Pages (Recommended - Free)
```bash
cd /Users/home/Documents/JoyRoyale/FunFinder/portfolio-website
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
Then: Settings → Pages → Select "main" branch

### Netlify (Alternative - Free)
1. Drag and drop the folder at: https://app.netlify.com/drop
2. Done!

### Squarespace
1. Copy content from `index.html`
2. Use Code Block in Squarespace
3. May need to adapt CSS/JS

## 📱 Features

✅ Fully responsive (mobile, tablet, desktop)
✅ Dark theme with professional design
✅ Smooth scrolling navigation
✅ Fade-in animations
✅ Evidence-backed claims with external links
✅ Clickable patents (Google Patents)
✅ "What I'm known for" section
✅ Outcome-focused experience bullets
✅ No dependencies - pure HTML/CSS/JS

## 📋 Content Checklist

- [x] Hero with specific positioning
- [x] Metrics with proof/context
- [x] "What I'm known for" section
- [x] Experience with outcome bullets
- [x] Work portfolio with evidence links
- [x] Patents linked to Google Patents
- [x] Expertise section
- [ ] Formspree form ID (your action required)
- [ ] Real LinkedIn URL (your action required)
- [ ] Resume PDF link (your action required)

## 🎨 Color Customization (Optional)

Edit `style.css` lines 9-15 to change colors:
```css
:root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #111111;
    --bg-tertiary: #1a1a1a;
    --text-primary: #ffffff;
    --text-secondary: #a3a3a3;
    --text-muted: #737373;
    --accent: #3b82f6;  /* Change for different accent */
    --accent-hover: #2563eb;
}
```

## 📧 Support

For questions or issues, update your contact information in the HTML!
