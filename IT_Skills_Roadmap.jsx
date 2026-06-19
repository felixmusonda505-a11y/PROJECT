import { useState } from "react";

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
    id: "web",
    icon: "🌐",
    title: "Web Development",
    color: NAVY,
    accent: GOLD,
    why: "Highest demand on Fiverr/Upwork. You already have HTML/CSS — you're closer than you think. Every business needs a website.",
    earning: "$15–$150/gig",
    timeToFirstGig: "10–12 weeks",
    phases: [
      {
        phase: "Phase 1",
        weeks: "Weeks 1–3",
        title: "Strengthen Your Foundation",
        color: "#1B4F72",
        daily: "2–3 hrs/day",
        tasks: [
          { done: false, text: "Complete freeCodeCamp Responsive Web Design certification (free)", link: "https://freecodecamp.org", tag: "Free" },
          { done: false, text: "Build 3 static pages from scratch — no tutorials, just from memory", tag: "Practice" },
          { done: false, text: "Learn CSS Flexbox + Grid thoroughly (CSS Tricks guide)", tag: "Free" },
          { done: false, text: "Learn basic Git & GitHub — create your first repo", tag: "Free" },
          { done: false, text: "Study 5 real business websites and write down what you'd improve", tag: "Research" },
        ],
        milestone: "You can build any static website confidently",
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 4–7",
        title: "Learn JavaScript Properly",
        color: "#2874A6",
        daily: "3 hrs/day",
        tasks: [
          { done: false, text: "freeCodeCamp JavaScript Algorithms & Data Structures (first 4 sections)", tag: "Free" },
          { done: false, text: "Learn DOM manipulation — make your pages interactive", tag: "Free" },
          { done: false, text: "Build a working contact form, image slider, and mobile nav menu", tag: "Project" },
          { done: false, text: "Learn basic WordPress — install, customise a theme, add plugins", tag: "Free" },
          { done: false, text: "Build 2 fake business sites (give names, invent the brand) for your portfolio", tag: "Portfolio" },
        ],
        milestone: "You can build interactive websites and basic WordPress sites",
      },
      {
        phase: "Phase 3",
        weeks: "Weeks 8–10",
        title: "Learn One Framework + Portfolio",
        color: "#2980B9",
        daily: "3–4 hrs/day",
        tasks: [
          { done: false, text: "Learn React basics — components, props, state (official React docs are free)", tag: "Free" },
          { done: false, text: "OR learn to customize WooCommerce / Shopify themes instead (more immediate gigs)", tag: "Alt" },
          { done: false, text: "Build your own portfolio site and deploy it on GitHub Pages or Netlify (free hosting)", tag: "Portfolio" },
          { done: false, text: "Do 2 free projects for real local businesses — salons, shops, churches", tag: "Real work" },
          { done: false, text: "Write down every project with: what the problem was, what you built, result", tag: "Docs" },
        ],
        milestone: "You have 4–5 real portfolio pieces and a live personal site",
      },
      {
        phase: "Phase 4",
        weeks: "Weeks 11–12",
        title: "Set Up & Land First Gigs",
        color: GOLD,
        daily: "2 hrs skill + 2 hrs outreach",
        tasks: [
          { done: false, text: "Create Fiverr profile: professional photo, clear bio, 3 gig packages (starter/standard/premium)", tag: "Fiverr" },
          { done: false, text: "Create Upwork profile: fill every section, take the English test, apply to 10 jobs/week", tag: "Upwork" },
          { done: false, text: "Message 10 local Copperbelt businesses on Facebook offering a free audit", tag: "Local" },
          { done: false, text: "Price your first gigs lower to get reviews — K500 locally, $15–25 globally", tag: "Pricing" },
          { done: false, text: "Screenshot and share every positive client message — social proof is everything", tag: "Growth" },
        ],
        milestone: "First paying gig landed ✓",
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
        title: "Design Fundamentals",
        color: "#6C1F7A",
        daily: "2 hrs/day",
        tasks: [
          { done: false, text: "Study design principles: typography, colour theory, hierarchy, whitespace (free YouTube — The Futur)", tag: "Free" },
          { done: false, text: "Learn Canva Pro deeply — every feature (free at canva.com for students)", tag: "Free" },
          { done: false, text: "Recreate 10 logos you admire from scratch in Canva — don't use templates", tag: "Practice" },
          { done: false, text: "Study Behance and Dribbble daily — save work you love and analyse WHY it works", tag: "Research" },
        ],
        milestone: "You understand design principles and can use Canva professionally",
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 3–5",
        title: "Learn Figma (Industry Standard)",
        color: "#8E44AD",
        daily: "3 hrs/day",
        tasks: [
          { done: false, text: "Complete the free Figma beginner course on YouTube (DesignCourse or Figma's own tutorials)", tag: "Free" },
          { done: false, text: "Design 3 full brand identities: logo, business card, letterhead, social media kit", tag: "Project" },
          { done: false, text: "Design a mobile app UI for a fake business — 5 screens minimum", tag: "Project" },
          { done: false, text: "Learn basic photo editing and compositing in GIMP (free Photoshop alternative)", tag: "Free" },
        ],
        milestone: "You have a design portfolio with real, diverse pieces",
      },
      {
        phase: "Phase 3",
        weeks: "Weeks 6–8",
        title: "Build Portfolio + First Clients",
        color: COPPER,
        daily: "2 hrs skill + 2 hrs outreach",
        tasks: [
          { done: false, text: "Do 3 free logo/brand designs for real local businesses — get written testimonials", tag: "Portfolio" },
          { done: false, text: "Build a Behance profile with all your work presented professionally", tag: "Portfolio" },
          { done: false, text: "Create Fiverr gigs: logo design, social media kit, flyer design (3 separate gigs)", tag: "Fiverr" },
          { done: false, text: "Offer social media post packages to local businesses (10 posts/K800)", tag: "Local" },
        ],
        milestone: "First paying design client landed ✓",
      },
    ],
  },
  {
    id: "data",
    icon: "📊",
    title: "Data & Automation",
    color: "#1A6B3A",
    accent: GREEN,
    why: "Lower competition than web dev. Businesses pay well for Excel automation, dashboards, and data cleanup. Very learnable from basics.",
    earning: "$20–$80/task",
    timeToFirstGig: "8–10 weeks",
    phases: [
      {
        phase: "Phase 1",
        weeks: "Weeks 1–3",
        title: "Excel & Data Fundamentals",
        color: "#1A6B3A",
        daily: "2 hrs/day",
        tasks: [
          { done: false, text: "Complete ExcelJet or Chandoo.org free Excel tutorials — learn every formula", tag: "Free" },
          { done: false, text: "Master PivotTables, VLOOKUP, INDEX/MATCH, conditional formatting", tag: "Free" },
          { done: false, text: "Build 3 real Excel tools: budget tracker, sales dashboard, inventory sheet", tag: "Project" },
          { done: false, text: "Learn Google Sheets — almost identical to Excel, used more by small businesses", tag: "Free" },
        ],
        milestone: "You can build professional spreadsheet tools",
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 4–7",
        title: "Python for Automation",
        color: "#27AE60",
        daily: "3 hrs/day",
        tasks: [
          { done: false, text: "Complete freeCodeCamp Python for Everybody or Automate the Boring Stuff (free online book)", tag: "Free" },
          { done: false, text: "Learn pandas library — read, clean, and analyse CSV data files", tag: "Free" },
          { done: false, text: "Build a script that automates a real boring task: rename files, clean a spreadsheet, scrape prices", tag: "Project" },
          { done: false, text: "Learn to create charts and reports in Python (matplotlib/seaborn)", tag: "Free" },
        ],
        milestone: "You can automate repetitive data tasks with Python",
      },
      {
        phase: "Phase 3",
        weeks: "Weeks 8–10",
        title: "Dashboards + First Gigs",
        color: GREEN,
        daily: "2 hrs skill + 2 hrs outreach",
        tasks: [
          { done: false, text: "Learn Google Looker Studio or Power BI (both free) — build visual dashboards", tag: "Free" },
          { done: false, text: "Offer free data cleanup + dashboard to 2 local businesses (a shop or school is perfect)", tag: "Portfolio" },
          { done: false, text: "Create Upwork profile targeting: data entry, Excel automation, data cleaning gigs", tag: "Upwork" },
          { done: false, text: "Apply to 15+ data entry / Excel jobs on Upwork weekly — write custom proposals", tag: "Outreach" },
        ],
        milestone: "First paying data client landed ✓",
      },
    ],
  },
];

const resources = [
  { icon: "💻", name: "freeCodeCamp", desc: "Full web dev + Python certifications. 100% free. Download lessons on campus Wi-Fi.", url: "freecodecamp.org", tag: "Web / Python" },
  { icon: "🎨", name: "The Futur (YouTube)", desc: "Best free design thinking and branding education available anywhere.", url: "youtube.com/@thefutur", tag: "Design" },
  { icon: "📐", name: "Figma", desc: "Free for students. Industry standard UI/UX tool. Browser-based — no install needed.", url: "figma.com", tag: "UI/UX" },
  { icon: "📊", name: "Chandoo.org", desc: "Excel and data visualisation tutorials. Free beginner to advanced.", url: "chandoo.org", tag: "Data" },
  { icon: "🤖", name: "Automate the Boring Stuff", desc: "Free Python book online. Perfect for automation freelance gigs.", url: "automatetheboringstuff.com", tag: "Python" },
  { icon: "🌐", name: "The Odin Project", desc: "Free, structured full-stack web dev curriculum. Better than most paid courses.", url: "theodinproject.com", tag: "Web Dev" },
  { icon: "💼", name: "Upwork / Fiverr", desc: "Your main global gig platforms. Create profiles on both. Apply weekly.", url: "upwork.com", tag: "Freelance" },
  { icon: "🎯", name: "Behance / Dribbble", desc: "Study top designers daily. Your design portfolio lives here.", url: "behance.net", tag: "Design" },
];

const dailyPlan = [
  { time: "6:00–7:00am", activity: "Learning (tutorials / reading)", color: NAVY },
  { time: "7:00–8:00am", activity: "Practical building (actual project work)", color: COPPER },
  { time: "After lectures", activity: "2hrs: client outreach + Upwork proposals", color: GREEN },
  { time: "Evening", activity: "1hr: review what you built, fix errors, commit to GitHub", color: PURPLE },
  { time: "Weekend", activity: "Deep project work — build full portfolio pieces", color: GOLD },
];

export default function Roadmap() {
  const [activePath, setActivePath] = useState("web");
  const [checkedTasks, setCheckedTasks] = useState({});
  const [activeTab, setActiveTab] = useState("roadmap");

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
      <div style={{ background: NAVY, padding: "24px 24px 16px", borderBottom: `4px solid ${GOLD}` }}>
        <div style={{ fontSize: 11, color: GOLD, letterSpacing: 2, marginBottom: 4 }}>
          COPPERBELT UNIVERSITY · 2026
        </div>
        <h1 style={{ color: "white", margin: 0, fontSize: 22, fontWeight: 800 }}>
          IT Skills → Freelance Gigs
        </h1>
        <p style={{ color: "#aaa", margin: "6px 0 0", fontSize: 13 }}>
          Your step-by-step plan from HTML/CSS basics to landing paying clients
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          {[["roadmap", "📍 Roadmap"], ["resources", "📚 Resources"], ["daily", "🕐 Daily Schedule"]].map(([id, label]) => (
            <button key={id} onClick={() => setActiveTab(id)}
              style={{
                padding: "6px 14px", borderRadius: 20, border: "none", cursor: "pointer",
                fontSize: 12, fontWeight: 600,
                background: activeTab === id ? GOLD : "rgba(255,255,255,0.1)",
                color: activeTab === id ? NAVY : "white",
              }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px 20px 0" }}>

        {activeTab === "roadmap" && (
          <>
            {/* Path selector */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: MGRAY, marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
                CHOOSE YOUR TRACK
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {paths.map(p => (
                  <button key={p.id} onClick={() => setActivePath(p.id)}
                    style={{
                      padding: "10px 16px", borderRadius: 10, border: "2px solid",
                      borderColor: activePath === p.id ? p.accent : "#ddd",
                      background: activePath === p.id ? p.color : "white",
                      color: activePath === p.id ? "white" : NAVY,
                      cursor: "pointer", fontSize: 13, fontWeight: 700,
                    }}>
                    {p.icon} {p.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Path summary */}
            <div style={{
              background: path.color, borderRadius: 12, padding: 16, marginBottom: 16,
              borderLeft: `5px solid ${path.accent}`
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ color: path.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>WHY THIS TRACK</div>
                  <div style={{ color: "white", fontSize: 13, marginTop: 4, maxWidth: 340, lineHeight: 1.5 }}>{path.why}</div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "8px 12px", textAlign: "center" }}>
                    <div style={{ color: path.accent, fontSize: 16, fontWeight: 800 }}>{path.earning}</div>
                    <div style={{ color: "#ccc", fontSize: 10 }}>per gig</div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "8px 12px", textAlign: "center" }}>
                    <div style={{ color: path.accent, fontSize: 16, fontWeight: 800 }}>{path.timeToFirstGig}</div>
                    <div style={{ color: "#ccc", fontSize: 10 }}>to first gig</div>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div style={{ marginTop: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ color: "#ccc", fontSize: 11 }}>Your progress</span>
                  <span style={{ color: path.accent, fontSize: 11, fontWeight: 700 }}>{completedTasks}/{totalTasks} tasks · {progress}%</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 99, height: 8 }}>
                  <div style={{ width: `${progress}%`, height: 8, background: path.accent, borderRadius: 99, transition: "width 0.3s" }} />
                </div>
              </div>
            </div>

            {/* Phases */}
            {path.phases.map((phase, pi) => {
              const phaseDone = phase.tasks.filter((_, ti) => checkedTasks[`${activePath}-${pi}-${ti}`]).length;
              return (
                <div key={pi} style={{ marginBottom: 14, background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  {/* Phase header */}
                  <div style={{ background: phase.color, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>
                        {phase.phase} · {phase.weeks} · {phase.daily}
                      </div>
                      <div style={{ color: "white", fontSize: 14, fontWeight: 800, marginTop: 2 }}>{phase.title}</div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 20, padding: "4px 10px", fontSize: 11, color: "white", fontWeight: 700 }}>
                      {phaseDone}/{phase.tasks.length}
                    </div>
                  </div>

                  {/* Tasks */}
                  <div style={{ padding: "8px 0" }}>
                    {phase.tasks.map((task, ti) => {
                      const key = `${activePath}-${pi}-${ti}`;
                      const done = checkedTasks[key];
                      return (
                        <div key={ti} onClick={() => toggleTask(key)}
                          style={{
                            padding: "10px 16px", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 12,
                            background: done ? "#f0fdf4" : "white",
                            borderBottom: ti < phase.tasks.length - 1 ? "1px solid #f5f5f5" : "none",
                          }}>
                          <div style={{
                            width: 20, height: 20, borderRadius: 6, border: `2px solid ${done ? GREEN : "#ddd"}`,
                            background: done ? GREEN : "white", flexShrink: 0, marginTop: 1,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            {done && <span style={{ color: "white", fontSize: 12, fontWeight: 900 }}>✓</span>}
                          </div>
                          <div style={{ flex: 1 }}>
                            <span style={{ fontSize: 13, color: done ? MGRAY : NAVY, textDecoration: done ? "line-through" : "none", lineHeight: 1.4 }}>
                              {task.text}
                            </span>
                            <span style={{
                              marginLeft: 8, fontSize: 10, fontWeight: 700, padding: "1px 7px", borderRadius: 10,
                              background: task.tag === "Free" ? "#e8f5e9" : task.tag === "Portfolio" ? "#fff3e0" : task.tag === "Project" ? "#e3f2fd" : "#f3e5f5",
                              color: task.tag === "Free" ? GREEN : task.tag === "Portfolio" ? COPPER : task.tag === "Project" ? "#1565C0" : PURPLE,
                            }}>
                              {task.tag}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Milestone */}
                  <div style={{ background: "#fffbea", padding: "10px 16px", borderTop: `2px solid ${GOLD}`, display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 16 }}>🎯</span>
                    <div>
                      <span style={{ fontSize: 10, color: GOLD, fontWeight: 700, display: "block" }}>PHASE MILESTONE</span>
                      <span style={{ fontSize: 12, color: NAVY, fontWeight: 600 }}>{phase.milestone}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Critical rules */}
            <div style={{ background: NAVY, borderRadius: 12, padding: 16, marginTop: 4 }}>
              <div style={{ color: GOLD, fontSize: 11, fontWeight: 800, letterSpacing: 1, marginBottom: 10 }}>⚡ RULES THAT DETERMINE IF THIS WORKS</div>
              {[
                ["Build, don't just watch.", "For every 1hr of tutorial, spend 2hrs actually building something. Watching is not learning."],
                ["Start ugly, ship it.", "Your first portfolio pieces don't have to be perfect — they have to exist. Launch them."],
                ["GitHub every day.", "Push something to GitHub every single day. Clients and employers look at your commit history."],
                ["Apply before you feel ready.", "You will never feel fully ready. Start applying at Week 8 even if you feel like a beginner."],
              ].map(([rule, desc], i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                  <div style={{ background: GOLD, color: NAVY, borderRadius: 6, width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11, flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ color: "white", fontWeight: 700, fontSize: 13 }}>{rule}</div>
                    <div style={{ color: "#aaa", fontSize: 12, lineHeight: 1.4 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "resources" && (
          <div>
            <div style={{ fontSize: 11, color: MGRAY, fontWeight: 700, letterSpacing: 1, marginBottom: 14 }}>ALL FREE. ALL YOU NEED.</div>
            {resources.map((r, i) => (
              <div key={i} style={{ background: "white", borderRadius: 12, padding: 14, marginBottom: 10, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ fontSize: 26, flexShrink: 0 }}>{r.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 800, fontSize: 14, color: NAVY }}>{r.name}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", background: "#e8f5e9", color: GREEN, borderRadius: 10 }}>{r.tag}</span>
                  </div>
                  <div style={{ color: MGRAY, fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>{r.desc}</div>
                  <div style={{ color: COPPER, fontSize: 11, fontWeight: 600, marginTop: 4 }}>🔗 {r.url}</div>
                </div>
              </div>
            ))}

            <div style={{ background: "#fff8e1", borderRadius: 12, padding: 14, border: `2px solid ${GOLD}`, marginTop: 4 }}>
              <div style={{ fontWeight: 800, fontSize: 13, color: NAVY, marginBottom: 6 }}>💡 Zambia Data Tip</div>
              <p style={{ fontSize: 12, color: NAVY, margin: 0, lineHeight: 1.6 }}>
                Download tutorials on campus Wi-Fi, then study offline. YouTube Premium (if you can access it)
                lets you download videos. freeCodeCamp can be used mostly offline once loaded.
                Prioritize text-based resources (MDN docs, Odin Project) over video when data is low.
              </p>
            </div>
          </div>
        )}

        {activeTab === "daily" && (
          <div>
            <div style={{ fontSize: 11, color: MGRAY, fontWeight: 700, letterSpacing: 1, marginBottom: 14 }}>
              YOUR IDEAL DAILY SCHEDULE (ALONGSIDE CBU LECTURES)
            </div>

            {dailyPlan.map((slot, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "stretch" }}>
                <div style={{ background: slot.color, color: "white", borderRadius: 8, padding: "10px 12px", fontSize: 11, fontWeight: 700, minWidth: 100, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", lineHeight: 1.4 }}>
                  {slot.time}
                </div>
                <div style={{ background: "white", flex: 1, borderRadius: 8, padding: "10px 14px", fontSize: 13, color: NAVY, display: "flex", alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", borderLeft: `3px solid ${slot.color}` }}>
                  {slot.activity}
                </div>
              </div>
            ))}

            <div style={{ background: NAVY, borderRadius: 12, padding: 16, marginTop: 8 }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 13, marginBottom: 12 }}>📅 WEEKLY TARGETS</div>
              {[
                { day: "Mon–Fri", task: "1 tutorial lesson + 1 small build per day", color: NAVY },
                { day: "Saturday", task: "Full portfolio project day (4–6 hrs deep work)", color: COPPER },
                { day: "Sunday", task: "Review week, push to GitHub, send 5 outreach messages, plan next week", color: GREEN },
              ].map((w, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                  <div style={{ background: w.color, color: "white", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 800, flexShrink: 0, display: "flex", alignItems: "center" }}>
                    {w.day}
                  </div>
                  <div style={{ color: "#ccc", fontSize: 12, display: "flex", alignItems: "center", lineHeight: 1.4 }}>{w.task}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "#fff3e0", borderRadius: 12, padding: 14, border: `2px solid ${COPPER}`, marginTop: 10 }}>
              <div style={{ fontWeight: 800, fontSize: 13, color: NAVY, marginBottom: 6 }}>🔑 The One Habit That Changes Everything</div>
              <p style={{ fontSize: 13, color: NAVY, margin: 0, lineHeight: 1.6 }}>
                <strong>Build something every single day</strong> — even if it's just fixing one bug or
                adding one feature. Consistency over intensity. Someone who builds for 1 hour every day
                for 12 weeks will outperform someone who pulls two all-nighters a month.
                The daily reps are how skills actually form.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
