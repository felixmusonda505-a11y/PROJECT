import { useState, useEffect } from "react";

const NAVY = "#0B1F3A";
const GOLD = "#D4A017";
const COPPER = "#B87333";
const GREEN = "#27AE60";
const PURPLE = "#8E44AD";
const CREAM = "#FAF7F0";
const LGRAY = "#F0EDE6";
const MGRAY = "#888";

const paths = [
  {
    id: "excel",
    icon: "📊",
    title: "Excel & Analytics",
    color: "#1A6B3A",
    accent: GREEN,
    why: "Lowest barrier to entry. Every business needs data cleaned, analyzed, and visualized. High demand, less competition than coding. Perfect first freelance skill.",
    earning: "$20–$100/task",
    timeToFirstGig: "6–8 weeks",
    phases: [
      {
        phase: "Phase 1",
        weeks: "Weeks 1–3",
        title: "Excel Fundamentals & Business Math",
        color: "#1A6B3A",
        daily: "2–3 hrs/day",
        tasks: [
          { done: false, text: "Complete ExcelJet or Chandoo.org free Excel course — every formula explained", tag: "Free" },
          { done: false, text: "Master formulas: SUM, AVERAGE, VLOOKUP, INDEX/MATCH, IF, SUMIF, COUNTIF", tag: "Practice" },
          { done: false, text: "Master formatting: Conditional formatting, data validation, number formats, freezing panes", tag: "Practice" },
          { done: false, text: "Learn PivotTables deeply — the most requested skill. Do 5 practice PivotTables", tag: "Free" },
          { done: false, text: "Build Project 1: Invoice tracking spreadsheet (formulas, automatic totals, formatting)", tag: "Project" },
          { done: false, text: "Build Project 2: Expense tracker (auto-calculations, monthly summaries, status indicators)", tag: "Project" },
          { done: false, text: "Build Project 3: Sales dashboard (charts, PivotTable, KPIs, professional layout)", tag: "Project" },
          { done: false, text: "Learn Google Sheets — used by more small businesses. Learn same functions as Excel", tag: "Free" },
          { done: false, text: "Practice: Find messy CSV files online, clean them (remove duplicates, fix formats, handle errors)", tag: "Practice" },
        ],
        milestone: "You can build professional spreadsheets and understand business math",
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 4–6",
        title: "Data Analysis & Visualization",
        color: "#27AE60",
        daily: "3 hrs/day",
        tasks: [
          { done: false, text: "Learn Excel charting: line, bar, pie, combo charts. Make charts that tell stories, not just numbers", tag: "Free" },
          { done: false, text: "Build Dashboard 1: Sales dashboard (revenue by product, monthly trends, top clients, year-to-date)", tag: "Project" },
          { done: false, text: "Build Dashboard 2: Inventory tracker (low stock alerts, product performance, stock value analysis)", tag: "Project" },
          { done: false, text: "Build Dashboard 3: Budget analyzer (budget vs actual, variance analysis, category breakdown)", tag: "Project" },
          { done: false, text: "Build Dashboard 4: KPI tracker (key metrics, targets, progress, visual indicators)", tag: "Project" },
          { done: false, text: "Learn Google Looker Studio (free) — professional dashboard tool. Build one Looker dashboard", tag: "Free" },
          { done: false, text: "Learn basic data analysis: sorting, grouping, filtering, subtotals like a pro", tag: "Practice" },
          { done: false, text: "Optional: Learn Python pandas (5 hours) — for automating data cleaning", tag: "Free" },
          { done: false, text: "Real analysis project: Download real data (business data, public datasets), clean it, analyze, write insights", tag: "Project" },
        ],
        milestone: "You can analyze data and create dashboards that actually get used",
      },
      {
        phase: "Phase 3",
        weeks: "Weeks 7–8",
        title: "Automation & Portfolio",
        color: colors.HexColor("#1E8449"),
        daily: "2–3 hrs/day",
        tasks: [
          { done: false, text: "Learn Excel macros basics (record macros to automate repetitive tasks) — game changer for freelancing", tag: "Free" },
          { done: false, text: "Build Portfolio Project 1: Data cleanup service package (messy → clean → analyzed → dashboard)", tag: "Portfolio" },
          { done: false, text: "Build Portfolio Project 2: Automated invoicing system (template, formulas, validation, client tracking)", tag: "Portfolio" },
          { done: false, text: "Build Portfolio Project 3: Real business case (use realistic company scenario, show before/after)", tag: "Portfolio" },
          { done: false, text: "Document each project: Problem statement, solution, results, file organization, ease of use", tag: "Docs" },
          { done: false, text: "Create before/after visual showing messy data transforming into clean, analyzed data", tag: "Portfolio" },
          { done: false, text: "Package your work: Clean file names, clear instructions, professional layout, no junk", tag: "Docs" },
          { done: false, text: "Create a portfolio PDF: Screenshots of dashboards, explanations, client testimonials", tag: "Portfolio" },
        ],
        milestone: "You have 3 professional portfolio pieces that wow clients",
      },
      {
        phase: "Phase 4",
        weeks: "Weeks 9–10",
        title: "Land Clients & Earn",
        color: GOLD,
        daily: "2 hrs skill + 2 hrs outreach",
        tasks: [
          { done: false, text: "Find 3 local businesses that need help: shops with sales data, salons with client tracking, schools with student records", tag: "Real work" },
          { done: false, text: "Offer: Free data audit (point out their problems, show solutions you can provide)", tag: "Real work" },
          { done: false, text: "Complete 1-2 free projects to get testimonials and portfolio pieces", tag: "Portfolio" },
          { done: false, text: "Create Upwork profile: Fill every section, take English test, write 5 custom proposals to jobs", tag: "Upwork" },
          { done: false, text: "Create Fiverr with 3 gigs: 'Excel data cleanup', 'Build Excel dashboard', 'Data analysis & insights'", tag: "Fiverr" },
          { done: false, text: "Apply to 15+ data/Excel jobs on Upwork weekly — custom proposals, mention your portfolio", tag: "Outreach" },
          { done: false, text: "Message 10 local businesses with specific data problems you can solve (not generic pitches)", tag: "Local" },
          { done: false, text: "Price strategy: Free → K800–1,200 local → $25–40 global → K2K+ local once you have reviews", tag: "Pricing" },
          { done: false, text: "Collect written testimonials from every client — this is your best marketing", tag: "Growth" },
        ],
        milestone: "First paying data analysis client ✓",
      },
    ],
  },
  {
    id: "web",
    icon: "🌐",
    title: "Web Development",
    color: NAVY,
    accent: GOLD,
    why: "Highest demand on Fiverr/Upwork. You already have HTML/CSS — you're closer than you think. Every business needs a website.",
    earning: "$15–$150/gig",
    timeToFirstGig: "8–10 weeks",
    phases: [
      {
        phase: "Phase 1",
        weeks: "Weeks 1–3",
        title: "Strengthen Foundation + Business Skills",
        color: "#1B4F72",
        daily: "2–3 hrs/day",
        tasks: [
          { done: false, text: "Complete freeCodeCamp Responsive Web Design certification (free)", tag: "Free" },
          { done: false, text: "Build 3 static pages from scratch — no tutorials, just from memory", tag: "Practice" },
          { done: false, text: "Master CSS Flexbox + Grid (CSS Tricks guide) — essential for every layout", tag: "Free" },
          { done: false, text: "Learn basic Git & GitHub — create your first repo", tag: "Free" },
          { done: false, text: "Business skill: Learn invoicing — create a simple invoice template for yourself", tag: "Business" },
          { done: false, text: "Business skill: Research local businesses' websites — note what's missing (no contact form, slow, ugly)", tag: "Research" },
          { done: false, text: "Study 5 professional business websites — what makes them work?", tag: "Research" },
        ],
        milestone: "You can build any static website confidently",
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 4–7",
        title: "JavaScript + Client Management Basics",
        color: "#2874A6",
        daily: "3 hrs/day",
        tasks: [
          { done: false, text: "freeCodeCamp JavaScript Algorithms & Data Structures (first 4 sections)", tag: "Free" },
          { done: false, text: "Learn DOM manipulation — make your pages interactive", tag: "Free" },
          { done: false, text: "Build working components: Contact form, image slider, mobile nav menu, dropdown menus", tag: "Project" },
          { done: false, text: "Learn WordPress basics — install, use a theme, customize, add plugins", tag: "Free" },
          { done: false, text: "Business skill: Learn to quote websites (pricing, timeline, features)", tag: "Business" },
          { done: false, text: "Business skill: Create a project template (what info do you need from clients before starting?)", tag: "Business" },
          { done: false, text: "Build 2 fake business sites with realistic scenarios (give them names, backstories)", tag: "Portfolio" },
          { done: false, text: "Learn responsive design testing (test on actual phones, tablets, different browsers)", tag: "Practice" },
        ],
        milestone: "You can build interactive websites and manage client expectations",
      },
      {
        phase: "Phase 3",
        weeks: "Weeks 8–10",
        title: "Portfolio + First Projects",
        color: "#2980B9",
        daily: "3–4 hrs/day",
        tasks: [
          { done: false, text: "Learn React basics OR become WordPress expert (pick one path based on what you enjoy)", tag: "Free" },
          { done: false, text: "Build your own portfolio site and deploy on GitHub Pages or Netlify (free hosting)", tag: "Portfolio" },
          { done: false, text: "Portfolio must show: 3-5 projects, clear description, testimonials, contact form, GitHub link", tag: "Portfolio" },
          { done: false, text: "Do 2 free projects for real local businesses — salons, shops, churches, community groups", tag: "Real work" },
          { done: false, text: "Business skill: Take screenshots of before and after for each portfolio project", tag: "Docs" },
          { done: false, text: "Business skill: Write case studies (problem, solution, results) for your portfolio", tag: "Docs" },
          { done: false, text: "Document code clearly — future clients may want to maintain sites themselves", tag: "Docs" },
        ],
        milestone: "You have 4–5 portfolio pieces and a professional personal site",
      },
      {
        phase: "Phase 4",
        weeks: "Weeks 11–12",
        title: "Go Freelance",
        color: GOLD,
        daily: "2 hrs skill + 2 hrs outreach",
        tasks: [
          { done: false, text: "Create Fiverr: Pro photo, clear bio, 3 packages (basic/standard/premium), detailed descriptions", tag: "Fiverr" },
          { done: false, text: "Create Upwork: Complete profile, take English test, apply to 10 jobs/week with custom proposals", tag: "Upwork" },
          { done: false, text: "Message 10 local businesses: 'I can redesign/fix/speed up your website'", tag: "Local" },
          { done: false, text: "Join web dev Facebook groups in your area — post your portfolio, offer help", tag: "Local" },
          { done: false, text: "Pricing: K500–1,000 free → K2,500–6,000 locally → $25–60 global", tag: "Pricing" },
          { done: false, text: "Get testimonials from every client — quote them on your site and freelance profiles", tag: "Growth" },
          { done: false, text: "Keep GitHub updated with all your projects — employers/clients check this", tag: "Growth" },
        ],
        milestone: "First paying web design/development client ✓",
      },
    ],
  },
  {
    id: "design",
    icon: "🎨",
    title: "Graphic Design & UI/UX",
    color: "#6C1F7A",
    accent: COPPER,
    why: "Every business needs logos, social posts, and flyers. Canva gigs are booming. UI/UX pays premium rates once you have a portfolio.",
    earning: "$10–$100/gig",
    timeToFirstGig: "6–8 weeks",
    phases: [
      {
        phase: "Phase 1",
        weeks: "Weeks 1–2",
        title: "Design Fundamentals + Business Basics",
        color: "#6C1F7A",
        daily: "2 hrs/day",
        tasks: [
          { done: false, text: "Study design principles: typography, colour theory, hierarchy, whitespace, contrast (The Futur YouTube)", tag: "Free" },
          { done: false, text: "Learn Canva Pro deeply — every feature, template, design system (free for students)", tag: "Free" },
          { done: false, text: "Recreate 10 logos you admire from scratch in Canva — don't use templates", tag: "Practice" },
          { done: false, text: "Study Behance and Dribbble daily — save work you love and analyse WHY", tag: "Research" },
          { done: false, text: "Business skill: Understand design pricing (time-based vs value-based)", tag: "Business" },
          { done: false, text: "Business skill: Create a brand questionnaire (what info do you ask clients?)", tag: "Business" },
          { done: false, text: "Business skill: Learn basic Photoshop (free GIMP alternative) for advanced editing", tag: "Free" },
        ],
        milestone: "You understand design principles and can use Canva professionally",
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 3–5",
        title: "Figma + Professional Portfolio",
        color: "#8E44AD",
        daily: "3 hrs/day",
        tasks: [
          { done: false, text: "Complete free Figma beginner course (DesignCourse or Figma's official tutorials)", tag: "Free" },
          { done: false, text: "Design Brand Identity 1: Logo, business card, letterhead, envelope, social kit (complete package)", tag: "Project" },
          { done: false, text: "Design Brand Identity 2: Full brand identity for another fake business (be detailed)", tag: "Project" },
          { done: false, text: "Design Brand Identity 3: Third complete brand package showing range (different style/industry)", tag: "Project" },
          { done: false, text: "Design a mobile app UI: 5+ screens (home, details, settings, profile, checkout)", tag: "Project" },
          { done: false, text: "Learn basic photo editing in GIMP (color correction, cropping, compositing, retouching)", tag: "Free" },
          { done: false, text: "Business skill: Create a design process document (discovery → concepts → revisions → delivery)", tag: "Business" },
          { done: false, text: "Business skill: Learn revision policy (how many free revisions? What costs extra?)", tag: "Business" },
        ],
        milestone: "You have a strong design portfolio with diverse work",
      },
      {
        phase: "Phase 3",
        weeks: "Weeks 6–8",
        title: "Real Clients + Platform Profiles",
        color: COPPER,
        daily: "2 hrs skill + 2 hrs outreach",
        tasks: [
          { done: false, text: "Do 3 free logo/brand designs for real local businesses — get written testimonials", tag: "Portfolio" },
          { done: false, text: "Build a Behance portfolio with 6-8 pieces professionally presented", tag: "Portfolio" },
          { done: false, text: "Create a personal portfolio website (show your work, services, testimonials, contact form)", tag: "Portfolio" },
          { done: false, text: "Create Fiverr with 3 gigs: Logo design, Social media kit, Flyer/poster design", tag: "Fiverr" },
          { done: false, text: "Create Upwork targeting: Logo design, Brand identity, Social media graphics", tag: "Upwork" },
          { done: false, text: "Offer monthly social media packages to local businesses (10 posts/month for K800–1,500)", tag: "Local" },
          { done: false, text: "Message 10 local businesses: 'I can redesign your logo and branding'", tag: "Local" },
          { done: false, text: "Get testimonials from every client — use on all platforms", tag: "Growth" },
        ],
        milestone: "First paying design client landed ✓",
      },
    ],
  },
];

const resources = [
  { icon: "💻", name: "ExcelJet / Chandoo.org", desc: "Best Excel tutorials. Free, clear, practical. Start here for data skills.", url: "exceljet.net / chandoo.org", tag: "Excel" },
  { icon: "📊", name: "Google Looker Studio", desc: "Free dashboard tool. Professional dashboards without coding.", url: "looker.com/studio", tag: "Data" },
  { icon: "💻", name: "freeCodeCamp", desc: "Full web dev + Python certifications. 100% free.", url: "freecodecamp.org", tag: "Web / Python" },
  { icon: "🎨", name: "The Futur (YouTube)", desc: "Best free design education available anywhere.", url: "youtube.com/@thefutur", tag: "Design" },
  { icon: "📐", name: "Figma", desc: "Free for students. Industry standard UI/UX tool.", url: "figma.com", tag: "UI/UX" },
  { icon: "🤖", name: "Automate the Boring Stuff", desc: "Free Python book for automation and data cleaning.", url: "automatetheboringstuff.com", tag: "Python" },
  { icon: "🌐", name: "The Odin Project", desc: "Free full-stack web dev curriculum. Better than most paid courses.", url: "theodinproject.com", tag: "Web Dev" },
  { icon: "💼", name: "Upwork / Fiverr", desc: "Your main global platforms. Create profiles on both. Apply weekly.", url: "upwork.com", tag: "Freelance" },
];

const dailyPlan = [
  { time: "06:00–07:00", activity: "Learning (tutorials / reading documentation)", color: NAVY },
  { time: "17:00–19:00", activity: "Deep building (projects, code, portfolio work) + client outreach", color: COPPER },
];

const weeklySchedule = [
  { day: "Mon–Fri", task: "1 tutorial lesson + 1 small build per day", color: NAVY },
  { day: "Saturday", task: "Full portfolio project day (4–6 hrs deep work)", color: COPPER },
  { day: "Sunday", task: "Review week, push to GitHub, send 5 outreach messages, plan next week", color: GREEN },
];

export default function Roadmap() {
  const [activePath, setActivePath] = useState("excel");
  const [checkedTasks, setCheckedTasks] = useState({});
  const [activeTab, setActiveTab] = useState("roadmap");

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("roadmapProgress");
    if (saved) {
      setCheckedTasks(JSON.parse(saved));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem("roadmapProgress", JSON.stringify(checkedTasks));
  }, [checkedTasks]);

  const path = paths.find(p => p.id === activePath);

  const toggleTask = (key) => {
    setCheckedTasks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalTasks = path.phases.reduce((a, p) => a + p.tasks.length, 0);
  const completedTasks = path.phases.reduce((a, p, pi) =>
    a + p.tasks.filter((_, ti) => checkedTasks[`${activePath}-${pi}-${ti}`]).length, 0);
  const progress = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: CREAM, minHeight: "100vh", paddingBottom: 40 }}>
      {/* Header */}
      <div style={{ background: NAVY, padding: "24px 20px 16px", borderBottom: `4px solid ${GOLD}` }}>
        <div style={{ fontSize: 10, color: GOLD, letterSpacing: 2, marginBottom: 4 }}>
          COPPERBELT UNIVERSITY · 2026
        </div>
        <h1 style={{ color: "white", margin: 0, fontSize: 22, fontWeight: 800 }}>
          IT Skills Roadmap
        </h1>
        <p style={{ color: "#aaa", margin: "6px 0 0", fontSize: 12 }}>
          From zero to your first freelance gig in 6–10 weeks
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginTop: 14, flexWrap: "wrap" }}>
          {[["roadmap", "📍 Roadmap"], ["resources", "📚 Resources"], ["daily", "🕐 Schedule"]].map(([id, label]) => (
            <button key={id} onClick={() => setActiveTab(id)}
              style={{
                padding: "6px 12px", borderRadius: 18, border: "none", cursor: "pointer",
                fontSize: 11, fontWeight: 600,
                background: activeTab === id ? GOLD : "rgba(255,255,255,0.1)",
                color: activeTab === id ? NAVY : "white",
              }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "16px 16px 0" }}>

        {activeTab === "roadmap" && (
          <>
            {/* Path selector */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 10, color: MGRAY, marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
                CHOOSE YOUR TRACK
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {paths.map(p => (
                  <button key={p.id} onClick={() => setActivePath(p.id)}
                    style={{
                      padding: "10px 14px", borderRadius: 8, border: "2px solid",
                      borderColor: activePath === p.id ? p.accent : "#ddd",
                      background: activePath === p.id ? p.color : "white",
                      color: activePath === p.id ? "white" : NAVY,
                      cursor: "pointer", fontSize: 12, fontWeight: 700,
                    }}>
                    {p.icon} {p.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Path summary */}
            <div style={{
              background: path.color, borderRadius: 10, padding: 14, marginBottom: 14,
              borderLeft: `5px solid ${path.accent}`
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ color: path.accent, fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>WHY THIS TRACK</div>
                  <div style={{ color: "white", fontSize: 12, marginTop: 3, maxWidth: 300, lineHeight: 1.5 }}>{path.why}</div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "6px 10px", textAlign: "center" }}>
                    <div style={{ color: path.accent, fontSize: 14, fontWeight: 800 }}>{path.earning}</div>
                    <div style={{ color: "#ccc", fontSize: 9 }}>per gig</div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "6px 10px", textAlign: "center" }}>
                    <div style={{ color: path.accent, fontSize: 14, fontWeight: 800 }}>{path.timeToFirstGig}</div>
                    <div style={{ color: "#ccc", fontSize: 9 }}>to 1st gig</div>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div style={{ marginTop: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ color: "#ccc", fontSize: 10 }}>Your progress</span>
                  <span style={{ color: path.accent, fontSize: 10, fontWeight: 700 }}>{completedTasks}/{totalTasks} · {progress}%</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 99, height: 6 }}>
                  <div style={{ width: `${progress}%`, height: 6, background: path.accent, borderRadius: 99, transition: "width 0.3s" }} />
                </div>
              </div>
            </div>

            {/* Phases */}
            {path.phases.map((phase, pi) => {
              const phaseDone = phase.tasks.filter((_, ti) => checkedTasks[`${activePath}-${pi}-${ti}`]).length;
              return (
                <div key={pi} style={{ marginBottom: 12, background: "white", borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                  {/* Phase header */}
                  <div style={{ background: phase.color, padding: "11px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 9, fontWeight: 700, letterSpacing: 0.5 }}>
                        {phase.phase} · {phase.weeks} · {phase.daily}
                      </div>
                      <div style={{ color: "white", fontSize: 13, fontWeight: 800, marginTop: 1 }}>{phase.title}</div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 18, padding: "3px 9px", fontSize: 10, color: "white", fontWeight: 700 }}>
                      {phaseDone}/{phase.tasks.length}
                    </div>
                  </div>

                  {/* Tasks */}
                  <div style={{ padding: "6px 0" }}>
                    {phase.tasks.map((task, ti) => {
                      const key = `${activePath}-${pi}-${ti}`;
                      const done = checkedTasks[key];
                      return (
                        <div key={ti} onClick={() => toggleTask(key)}
                          style={{
                            padding: "9px 14px", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 10,
                            background: done ? "#f0fdf4" : "white",
                            borderBottom: ti < phase.tasks.length - 1 ? "1px solid #f5f5f5" : "none",
                          }}>
                          <div style={{
                            width: 18, height: 18, borderRadius: 4, border: `2px solid ${done ? GREEN : "#ddd"}`,
                            background: done ? GREEN : "white", flexShrink: 0, marginTop: 1,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            {done && <span style={{ color: "white", fontSize: 11, fontWeight: 900 }}>✓</span>}
                          </div>
                          <div style={{ flex: 1 }}>
                            <span style={{ fontSize: 12, color: done ? MGRAY : NAVY, textDecoration: done ? "line-through" : "none", lineHeight: 1.5 }}>
                              {task.text}
                            </span>
                            <span style={{
                              marginLeft: 8, fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 8,
                              background: task.tag === "Free" ? "#e8f5e9" : task.tag === "Portfolio" ? "#fff3e0" : task.tag === "Project" ? "#e3f2fd" : task.tag === "Business" ? "#f3e5f5" : "#f0f0f0",
                              color: task.tag === "Free" ? GREEN : task.tag === "Portfolio" ? COPPER : task.tag === "Project" ? "#1565C0" : task.tag === "Business" ? PURPLE : MGRAY,
                            }}>
                              {task.tag}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Milestone */}
                  <div style={{ background: "#fffbea", padding: "9px 14px", borderTop: `2px solid ${GOLD}`, display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 14 }}>🎯</span>
                    <div>
                      <span style={{ fontSize: 9, color: GOLD, fontWeight: 700, display: "block" }}>MILESTONE</span>
                      <span style={{ fontSize: 11, color: NAVY, fontWeight: 600 }}>{phase.milestone}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Critical rules */}
            <div style={{ background: NAVY, borderRadius: 10, padding: 14, marginTop: 4 }}>
              <div style={{ color: GOLD, fontSize: 10, fontWeight: 800, letterSpacing: 1, marginBottom: 10 }}>⚡ WHAT DETERMINES SUCCESS</div>
              {[
                ["Build, don't watch.", "For every 1hr tutorial, spend 2hrs building. Watching is not learning."],
                ["Ship it", "Your first pieces don't have to be perfect — they have to exist."],
                ["GitHub/Behance daily", "One commit or upload every day. Employers look at your history."],
                ["Apply before ready", "You'll never feel ready. Start applying at Week 6-8."],
              ].map(([rule, desc], i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 9 }}>
                  <div style={{ background: GOLD, color: NAVY, borderRadius: 6, width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 10, flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ color: "white", fontWeight: 700, fontSize: 12 }}>{rule}</div>
                    <div style={{ color: "#aaa", fontSize: 11, lineHeight: 1.4 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "resources" && (
          <div>
            <div style={{ fontSize: 10, color: MGRAY, fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>ALL FREE. ALL YOU NEED.</div>
            {resources.map((r, i) => (
              <div key={i} style={{ background: "white", borderRadius: 10, padding: 12, marginBottom: 8, boxShadow: "0 1px 3px rgba(0,0,0,0.06)", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ fontSize: 24, flexShrink: 0 }}>{r.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 800, fontSize: 13, color: NAVY }}>{r.name}</span>
                    <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 8px", background: "#e8f5e9", color: GREEN, borderRadius: 8 }}>{r.tag}</span>
                  </div>
                  <div style={{ color: MGRAY, fontSize: 11, marginTop: 3, lineHeight: 1.5 }}>{r.desc}</div>
                  <div style={{ color: COPPER, fontSize: 10, fontWeight: 600, marginTop: 3 }}>🔗 {r.url}</div>
                </div>
              </div>
            ))}

            <div style={{ background: "#fff8e1", borderRadius: 10, padding: 12, border: `2px solid ${GOLD}`, marginTop: 4 }}>
              <div style={{ fontWeight: 800, fontSize: 12, color: NAVY, marginBottom: 6 }}>💡 Zambia Data Hack</div>
              <p style={{ fontSize: 11, color: NAVY, margin: 0, lineHeight: 1.5 }}>
                Download tutorials on campus Wi-Fi for offline study. freeCodeCamp works mostly offline once loaded. Text-based resources (ExcelJet, MDN docs, Odin Project) are best for low-data situations.
              </p>
            </div>
          </div>
        )}

        {activeTab === "daily" && (
          <div>
            <div style={{ fontSize: 10, color: MGRAY, fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>
              YOUR DAILY + WEEKLY SCHEDULE
            </div>

            <h3 style={{ color: NAVY, fontSize: 13, fontWeight: 700, marginBottom: 10, marginTop: 0 }}>Daily Routine</h3>
            {dailyPlan.map((slot, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "stretch" }}>
                <div style={{ background: slot.color, color: "white", borderRadius: 8, padding: "9px 10px", fontSize: 10, fontWeight: 700, minWidth: 90, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", lineHeight: 1.3 }}>
                  {slot.time}
                </div>
                <div style={{ background: "white", flex: 1, borderRadius: 8, padding: "9px 12px", fontSize: 12, color: NAVY, display: "flex", alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", borderLeft: `3px solid ${slot.color}` }}>
                  {slot.activity}
                </div>
              </div>
            ))}

            <h3 style={{ color: NAVY, fontSize: 13, fontWeight: 700, marginBottom: 10, marginTop: 16 }}>Weekly Targets</h3>
            <div style={{ background: NAVY, borderRadius: 10, padding: 12 }}>
              {weeklySchedule.map((w, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < weeklySchedule.length - 1 ? 10 : 0 }}>
                  <div style={{ background: w.color, color: "white", borderRadius: 6, padding: "4px 9px", fontSize: 10, fontWeight: 800, flexShrink: 0, display: "flex", alignItems: "center" }}>
                    {w.day}
                  </div>
                  <div style={{ color: "#ccc", fontSize: 11, display: "flex", alignItems: "center", lineHeight: 1.5 }}>{w.task}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "#fff3e0", borderRadius: 10, padding: 12, border: `2px solid ${COPPER}`, marginTop: 10 }}>
              <div style={{ fontWeight: 800, fontSize: 12, color: NAVY, marginBottom: 6 }}>🔑 The Habit That Changes Everything</div>
              <p style={{ fontSize: 12, color: NAVY, margin: 0, lineHeight: 1.6 }}>
                <strong>Build something every single day</strong> — even if it's just one small feature or one bug fix. 
                Consistency beats intensity. Daily reps are how actual skills form.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
