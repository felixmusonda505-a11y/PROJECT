# IT Skills Roadmap — CBU 2026

Your interactive, step-by-step guide from HTML/CSS basics to landing your first freelance gigs in 8–12 weeks.

**Try it:** [View Live Demo](https://yourusername.github.io/it-skills-roadmap)

---

## What's Inside

- **3 Career Tracks:** Web Development · Graphic Design · Data & Automation
- **4 Phases Each:** Clearly structured, week-by-week breakdown
- **Task Checklists:** Track your progress as you learn
- **Free Resources:** Every tool, tutorial, and platform you need
- **Daily Schedule:** Tailored for CBU student life (06:00–07:00 + 17:00–19:00)
- **Offline Progress Saving:** Your checked tasks are saved to your phone locally
- **Install as App:** Add it to your home screen on Android or iPhone

---

## Quick Start

### Option 1: Run Locally (Recommended for Development)

```bash
# 1. Clone this repo
git clone https://github.com/YOUR_USERNAME/it-skills-roadmap.git
cd it-skills-roadmap

# 2. Install dependencies
npm install

# 3. Start the development server
npm start

# Your app opens at http://localhost:3000
```

### Option 2: Deploy to GitHub Pages (Free Hosting)

```bash
# After cloning and installing dependencies:

# 1. Edit package.json — change homepage to your repo URL:
"homepage": "https://YOUR_USERNAME.github.io/it-skills-roadmap"

# 2. Deploy with one command:
npm run deploy

# Your app is now live at:
# https://YOUR_USERNAME.github.io/it-skills-roadmap
```

---

## File Structure

```
it-skills-roadmap/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA settings (allows app installation)
│   └── favicon.ico         # App icon
├── src/
│   ├── App.jsx             # Main React component
│   └── index.js            # React entry point
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

---

## Installation on Your Phone

### Android (Chrome)
1. Open the live app in Chrome: `https://yourusername.github.io/it-skills-roadmap`
2. Tap the 3-dot menu (⋮) → **"Add to Home Screen"**
3. Choose a name (e.g., "IT Roadmap") and tap **Install**
4. The app appears on your home screen like any other app

### iPhone (Safari)
1. Open the live app in Safari
2. Tap the Share button (↗️) → **"Add to Home Screen"**
3. Choose a name and tap **Add**
4. The app appears on your home screen with your own icon

Once installed, it works **offline** — your progress is saved on your phone.

---

## How to Use

1. **Pick Your Track:** Choose Web Development, Design, or Data & Automation
2. **Follow the Phases:** Each phase has specific tasks and a time commitment
3. **Check Off Tasks:** Tap tasks as you complete them (saved automatically to your phone)
4. **Track Progress:** See your progress bar fill as you advance
5. **Hit Milestones:** Each phase has a clear milestone so you know when you're ready to move on

---

## Customization

### Change the Schedule

Edit `src/App.jsx`, find the `dailyPlan` array:

```javascript
const dailyPlan = [
  { time: "06:00–07:00", activity: "Learning (tutorials / reading documentation)", color: NAVY },
  { time: "17:00–19:00", activity: "Deep building (projects, code, portfolio work) + client outreach", color: COPPER },
];
```

Change times as needed — your changes appear instantly when you save.

### Add New Tracks

In `src/App.jsx`, duplicate a `paths` object and edit. Each track has phases with tasks.

### Change Colors

Edit the hex color constants at the top of `src/App.jsx`:

```javascript
const NAVY = "#0B1F3A";
const GOLD = "#D4A017";
// ... etc
```

---

## Technical Stack

- **React 18** — Interactive UI
- **localStorage** — Saves your progress on your phone automatically
- **PWA (Progressive Web App)** — Installable on phones, works offline
- **Free Hosting** — Runs on GitHub Pages (no cost)

---

## Deployment Checklist

Before your first push:

- [ ] Create a GitHub account (free at github.com)
- [ ] Create a new repo called `it-skills-roadmap`
- [ ] Clone this repo to your computer: `git clone <repo-url>`
- [ ] Edit `package.json` — change `homepage` to your GitHub Pages URL
- [ ] Run `npm install` to install dependencies
- [ ] Test locally: `npm start`
- [ ] Deploy: `npm run deploy`
- [ ] Your app goes live in ~2 minutes at your GitHub Pages URL

---

## Troubleshooting

### App won't install on my phone
- Make sure you're viewing the **deployed version** (GitHub Pages URL), not localhost
- Clear your browser cache and try again
- The manifest.json must be properly linked in public/index.html

### My progress isn't saving
- Check your phone's browser permissions — localStorage must be enabled
- Try a different browser if it still doesn't work
- Progress is saved per phone/browser, not synced across devices

### Deploying to GitHub Pages shows a blank page
- Did you update the `homepage` in package.json? This is required
- Run `npm run build` to check for build errors
- Check GitHub Pages settings in your repo (Settings → Pages → Source)

---

## Next Steps After Deployment

1. **Share Your Roadmap:** Send the GitHub Pages URL to friends learning to code
2. **Make It Yours:** Add your own branding, custom tasks, or additional resources
3. **Port to Mobile:** Once you're skilled enough (Phase 3+), turn this into a React Native app for iOS/Android
4. **Build a Community:** Host this as a study resource for other CBU students

---

## Learn More

- [React Documentation](https://react.dev)
- [GitHub Pages Guide](https://pages.github.com)
- [Progressive Web Apps](https://web.dev/progressive-web-apps/)

---

## Feedback & Contributions

Found a typo? Want to add a track or resource? Issues and pull requests welcome!

---

**Built for Copperbelt University students. 2026.**

*Wealth is built on consistent daily habits. This roadmap is designed for exactly that.*
