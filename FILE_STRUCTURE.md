# 📁 FILE ORGANIZATION GUIDE

Your app needs these exact files in these exact locations. Copy them into your project folder.

---

## Folder Structure

```
it-skills-roadmap/           ← Your main project folder
│
├── public/                   ← Static files (put in public/ folder)
│   ├── index.html           ← Main HTML file
│   ├── manifest.json        ← App settings (for phone installation)
│   └── favicon.ico          ← App icon (optional, but nice to have)
│
├── src/                      ← React code (put in src/ folder)
│   ├── App.jsx              ← Main app component (YOUR SCHEDULE IS HERE)
│   └── index.js             ← React entry point
│
├── package.json             ← Dependencies & scripts (root level)
├── .gitignore              ← Git settings (root level)
├── README.md               ← Instructions (root level)
└── DEPLOY_GUIDE.md         ← Deployment steps (root level)
```

---

## File Locations When You Upload

### At the **root** level (top folder):
- `package.json` ← Copy the content from outputs
- `.gitignore` ← Copy the content from outputs
- `README.md` ← Copy the content from outputs
- `DEPLOY_GUIDE.md` ← Copy the content from outputs

### Inside **public/** folder:
- `index.html` ← Copy the content from `public_index.html`
- `manifest.json` ← Copy the content from `public_manifest.json`
- (Optional) `favicon.ico` ← You can download a cool icon and add it here

### Inside **src/** folder:
- `App.jsx` ← Copy the content from `src_App.jsx`
- `index.js` ← Copy the content from `src_index.js`

---

## How to Create the Folders

### Using Terminal/Command Prompt:
```bash
mkdir it-skills-roadmap
cd it-skills-roadmap
mkdir public
mkdir src
# Then copy files into each folder
```

### Using GitHub Web Interface:
1. In your repo, click **Add file** → **Create new file**
2. Type: `public/index.html` (creates public folder + file)
3. Paste the content
4. Click **Commit**
5. Repeat for each file

---

## File Names (Must Be Exact)

These names are case-sensitive on GitHub:
- `App.jsx` (capital A, capital J)
- `index.js` (lowercase i)
- `index.html` (lowercase i and h)
- `manifest.json` (lowercase m)
- `package.json` (lowercase p)

---

## What Each File Does

| File | Purpose |
|------|---------|
| `package.json` | Lists dependencies (React, scripts) |
| `public/index.html` | Main HTML entry point |
| `public/manifest.json` | Tells phones how to install as app |
| `src/App.jsx` | **Your roadmap component** — edit this for schedule changes |
| `src/index.js` | Links React to the HTML |
| `.gitignore` | Tells Git what to ignore (node_modules, etc) |

---

## Your Schedule Is Inside `src/App.jsx`

Find this section to customize:

```javascript
const dailyPlan = [
  { time: "06:00–07:00", activity: "Learning (tutorials / reading documentation)", color: NAVY },
  { time: "17:00–19:00", activity: "Deep building (projects, code, portfolio work) + client outreach", color: COPPER },
];
```

Change the times/activities to match your real schedule.

---

## Common Mistakes to Avoid

❌ Don't do this:
- `App.js` (wrong — must be `.jsx`)
- `PUBLIC/index.html` (wrong — must be lowercase `public/`)
- Putting `index.html` at root level (must be in `public/`)
- Forgetting to update `homepage` in `package.json`

✓ Do this:
- `App.jsx` (correct)
- `public/index.html` (correct)
- Update your GitHub username in `package.json`
- Run `npm install` before `npm start`

---

## Quick Copy-Paste Commands

If using terminal:

```bash
# After creating folders, this creates the files:
touch public/index.html
touch public/manifest.json
touch src/App.jsx
touch src/index.js
touch package.json
touch .gitignore
touch README.md
```

Then paste the content into each file.

---

## After Organizing Files

1. Run: `npm install` (installs React and dependencies)
2. Run: `npm start` (tests locally at http://localhost:3000)
3. When ready: `npm run deploy` (goes live on GitHub Pages)

---

That's it! Once files are organized, everything else is automated. 🚀
