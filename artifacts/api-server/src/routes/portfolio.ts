import { Router, type IRouter } from "express";

const router: IRouter = Router();

const projects = [
  {
    id: 1,
    title: "Helix",
    tagline: "Real-time collaborative code editor",
    description:
      "A web-based pair-programming environment with CRDT-backed editing, ambient cursors, and a built-in voice channel. Designed for the moments when a Zoom screenshare just isn't enough.",
    tech: ["TypeScript", "Yjs", "WebRTC", "Rust", "Postgres"],
    role: "Creator & sole engineer",
    year: 2025,
    status: "shipped",
    repoUrl: "https://github.com/yourhandle/helix",
    liveUrl: "https://helix.dev",
    accentColor: "#7C5CFF",
    featured: true,
  },
  {
    id: 2,
    title: "Glyph",
    tagline: "A typography-obsessed design system",
    description:
      "An open-source component library built around variable fonts, optical sizing, and density tokens. Used in production at three startups I'd rather not name.",
    tech: ["React", "Radix UI", "CSS Houdini", "Storybook"],
    role: "Lead engineer",
    year: 2024,
    status: "shipped",
    repoUrl: "https://github.com/yourhandle/glyph",
    liveUrl: "https://glyph.design",
    accentColor: "#10B981",
    featured: true,
  },
  {
    id: 3,
    title: "lattice",
    tagline: "Generative art exploring cellular automata",
    description:
      "A WebGL playground that grows organic-looking patterns from simple rules. Built as a side quest while reading Wolfram's A New Kind of Science. Yes, I finished it.",
    tech: ["WebGL", "GLSL", "Canvas", "Web Workers"],
    role: "Creator",
    year: 2024,
    status: "shipped",
    repoUrl: "https://github.com/yourhandle/lattice",
    liveUrl: "https://lattice.art",
    accentColor: "#F59E0B",
    featured: false,
  },
  {
    id: 4,
    title: "rune",
    tagline: "A terminal task runner with personality",
    description:
      "A Go-based CLI that replaces my tangled Makefiles with declarative YAML pipelines, parallel execution, and animated TUI output. Won a small but loud audience on Hacker News.",
    tech: ["Go", "Bubble Tea", "Cobra", "YAML"],
    role: "Creator & maintainer",
    year: 2024,
    status: "shipped",
    repoUrl: "https://github.com/yourhandle/rune",
    liveUrl: null,
    accentColor: "#EF4444",
    featured: false,
  },
  {
    id: 5,
    title: "drift",
    tagline: "An ambient focus timer for deep work",
    description:
      "A minimal Pomodoro alternative that fades in generative soundscapes synced to your breath cadence. Currently in private beta with about 200 users who complain when it crashes.",
    tech: ["React Native", "Web Audio API", "Expo", "Supabase"],
    role: "Solo founder",
    year: 2026,
    status: "beta",
    repoUrl: null,
    liveUrl: "https://drift.app",
    accentColor: "#06B6D4",
    featured: true,
  },
  {
    id: 6,
    title: "monorail",
    tagline: "Self-hosted CI for indie projects",
    description:
      "A lightweight CI/CD platform that runs on a single $5 VPS. Born out of frustration with the GitHub Actions free tier. Used internally for everything I ship.",
    tech: ["Rust", "Docker", "SQLite", "HTMX"],
    role: "Creator",
    year: 2025,
    status: "in_progress",
    repoUrl: "https://github.com/yourhandle/monorail",
    liveUrl: null,
    accentColor: "#A855F7",
    featured: false,
  },
];

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "Rust", level: 78 },
      { name: "Go", level: 80 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Framer Motion", level: 88 },
      { name: "WebGL / GLSL", level: 70 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    category: "Backend & Infra",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Postgres", level: 85 },
      { name: "Docker", level: 82 },
      { name: "AWS", level: 75 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    category: "Craft",
    skills: [
      { name: "Type & Layout", level: 90 },
      { name: "Motion Design", level: 85 },
      { name: "API Design", level: 88 },
      { name: "Performance", level: 87 },
      { name: "Writing", level: 80 },
    ],
  },
];

const experience = [
  {
    id: 1,
    kind: "work",
    title: "Senior Software Engineer",
    organization: "Vellum Labs",
    location: "Remote",
    startDate: "2024-03",
    endDate: null,
    description:
      "Leading the platform team building real-time collaboration primitives for a design tooling startup.",
    highlights: [
      "Designed the CRDT sync layer powering 30k+ daily active rooms.",
      "Cut p95 cold-start latency from 1.4s to 220ms by rewriting the document loader.",
      "Mentored 4 engineers, ran weekly architecture reviews.",
    ],
  },
  {
    id: 2,
    kind: "work",
    title: "Software Engineer",
    organization: "Northwind",
    location: "Brooklyn, NY",
    startDate: "2021-06",
    endDate: "2024-02",
    description:
      "Full-stack engineer on the growth team at a Series B fintech. Owned the signup funnel end-to-end.",
    highlights: [
      "Rebuilt the onboarding flow, lifting completion rate from 41% to 67%.",
      "Shipped the public API used by 1,200+ partner integrations.",
      "Wrote the internal style guide that the design system was eventually built on.",
    ],
  },
  {
    id: 3,
    kind: "work",
    title: "Engineering Intern",
    organization: "Studio Plat",
    location: "San Francisco, CA",
    startDate: "2020-05",
    endDate: "2020-08",
    description:
      "Summer internship at a small product studio. Worked on a tablet drawing app with WebGL.",
    highlights: [
      "Implemented pressure-sensitive ink rendering with custom shaders.",
      "Built the asset pipeline that's still in use today.",
    ],
  },
  {
    id: 4,
    kind: "education",
    title: "B.S. Computer Science",
    organization: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    startDate: "2017-09",
    endDate: "2021-05",
    description:
      "Concentration in Human-Computer Interaction. Minor in Design.",
    highlights: [
      "Teaching assistant for 15-462 Computer Graphics.",
      "Capstone project: a haptic interface for blind musicians, advised by Prof. Tovar.",
      "Graduated with University Honors, GPA 3.84.",
    ],
  },
  {
    id: 5,
    kind: "education",
    title: "Recurse Center, Spring '23",
    organization: "The Recurse Center",
    location: "New York, NY",
    startDate: "2023-01",
    endDate: "2023-03",
    description:
      "12-week self-directed retreat focused on systems programming and language design.",
    highlights: [
      "Wrote a toy compiler for a typed Lisp.",
      "Implemented Raft from scratch in Rust.",
    ],
  },
];

const currentlyWorking = {
  headline: "Building drift in public, learning rendering in private.",
  summary:
    "Most of my time right now is split between shipping the public beta of drift and going deep on real-time rendering — specifically the kind of WebGPU work that makes you re-learn linear algebra at 2am. I'm also writing more, which has been the single best thing I've done for my engineering brain in years.",
  focusAreas: [
    "drift v1 launch (March)",
    "WebGPU experiments",
    "Open source maintenance: rune, glyph",
    "Writing essays on craft",
  ],
  learning: [
    "Real-time rendering (Akenine-Möller, 4th ed.)",
    "Distributed systems patterns",
    "Italian (slowly, badly)",
  ],
  availability:
    "Open to interesting freelance and advisory work, especially with small product teams who care about motion, type, and performance. Not looking for full-time roles right now.",
  lastUpdated: new Date("2026-04-15T12:00:00Z").toISOString(),
};

const stats = {
  yearsCoding: 11,
  projectsShipped: 24,
  technologiesUsed: 38,
  coffeesConsumed: 4827,
  commitsThisYear: 612,
};

router.get("/portfolio/projects", (_req, res) => {
  res.json(projects);
});

router.get("/portfolio/skills", (_req, res) => {
  res.json(skillGroups);
});

router.get("/portfolio/experience", (_req, res) => {
  res.json(experience);
});

router.get("/portfolio/now", (_req, res) => {
  res.json(currentlyWorking);
});

router.get("/portfolio/stats", (_req, res) => {
  res.json(stats);
});

export default router;
