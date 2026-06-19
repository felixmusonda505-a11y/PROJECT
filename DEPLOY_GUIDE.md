# 🚀 DEPLOY YOUR IT SKILLS ROADMAP IN 15 MINUTES

This guide walks you through uploading your app to GitHub and making it live on your phone.

---

## STEP 1: Create a GitHub Account (3 minutes)

1. Go to **github.com**
2. Click **Sign up**
3. Use your CBU email (optional but recommended)
4. Verify your email
5. Done ✓

---

## STEP 2: Create Your Repo (2 minutes)

1. On GitHub, click the **+** icon (top right) → **New repository**
2. Name it: `it-skills-roadmap` (exactly this)
3. Add a description: "My interactive IT skills learning roadmap"
4. Click **Create repository**
5. Copy the URL they give you (looks like: `https://github.com/YOUR_USERNAME/it-skills-roadmap.git`)

---

## STEP 3: Set Up Your Project Locally (5 minutes)

### If you use Windows/Mac with a code editor:

```bash
# Open your terminal/command prompt and run:

# 1. Clone (download) the repo
git clone https://github.com/YOUR_USERNAME/it-skills-roadmap.git
cd it-skills-roadmap

# 2. Copy these files into the folder:
# - package.json (root)
# - public/index.html
# - public/manifest.json
# - src/App.jsx
# - src/index.js
# - .gitignore

# 3. Install dependencies (takes ~2 min)
npm install

# 4. Test it locally (opens at http://localhost:3000)
npm start

# Press Ctrl+C when done testing
```

### Can't use terminal?

**Use GitHub's web interface instead:**
1. Go to your repo on github.com
2. Click **Add file** → **Create new file**
3. Name: `package.json`
4. Paste the package.json content
5. Repeat for each file (create public/, src/ folders inside the web interface)
6. It's slower but works

---

## STEP 4: Deploy to GitHub Pages (3 minutes)

**Important:** Before this step, edit `package.json`:

Find this line:
```json
"homepage": "https://YOUR_USERNAME.github.io/it-skills-roadmap",
```

Replace `YOUR_USERNAME` with your actual GitHub username (e.g., `jsmith` → `https://jsmith.github.io/it-skills-roadmap`)

Then run:

```bash
npm run deploy
```

This builds your app and uploads it automatically. Takes ~1–2 minutes.

**That's it!** Your app is now live at:
```
https://YOUR_USERNAME.github.io/it-skills-roadmap
```

---

## STEP 5: Install on Your Phone (2 minutes)

### Android (Chrome):
1. Open the link in Chrome: `https://your-username.github.io/it-skills-roadmap`
2. Tap **⋮** (three dots) → **Add to Home Screen**
3. Tap **Install**
4. Your app is now on your home screen

### iPhone (Safari):
1. Open the link in Safari: `https://your-username.github.io/it-skills-roadmap`
2. Tap **Share** (↗️) → **Add to Home Screen**
3. Tap **Add**
4. Your app is now on your home screen

---

## TROUBLESHOOTING

### "npm command not found"
- Download and install Node.js from nodejs.org (includes npm)
- Restart your terminal after installing

### "Module not found" errors during `npm install`
- Delete `node_modules` folder and `package-lock.json` file
- Run `npm install` again

### App shows blank page or 404 error
- Did you edit `package.json` with your username? This is required
- Check GitHub Pages settings: Settings → Pages → Branch should be `gh-pages`
- Clear your browser cache and refresh

### Progress not saving on phone
- Make sure you're using the GitHub Pages URL (not localhost)
- Check that your browser allows localStorage (usually enabled by default)
- Try a different browser if it still doesn't work

---

## What Your Team Will See

When you share your GitHub Pages link with others:
- They can use the roadmap on any phone/laptop
- No login required
- Their progress saves locally on their device
- They can optionally install it as an app

---

## Next: Make It Your Own

Once deployed, you can:
- **Edit tasks** in `src/App.jsx` — changes live after `npm run deploy`
- **Add your own track** — duplicate a tracks object and customize
- **Change colors** — edit the hex values at the top of `src/App.jsx`
- **Share your code** on GitHub — other students can fork your version

---

## After Deployment

You now have:
✓ A live web app on GitHub Pages (free hosting)
✓ An installable phone app (no App Store needed)
✓ Your code backed up on GitHub
✓ A project to show employers

This entire project is your **first portfolio piece** as a developer.

---

## Questions?

- GitHub Pages not working? Check: https://pages.github.com
- React issues? Check: https://react.dev/learn
- Deploy issues? Check GitHub Pages settings in your repo

---

**You've got this. 15 minutes and you're live.** ⚡
