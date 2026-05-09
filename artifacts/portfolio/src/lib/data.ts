export const projects = [
  {
    id: 1,
    title: "Travelyt",
    tagline: "AI travel planner",
    description:
      "An AI travel planner built using JavaScript, React, MySQL, Node.js, and Express.js.",
    tech: ["JavaScript", "React", "MySQL", "Node.js", "Express"],
    role: "Creator",
    year: 2024,
    status: "shipped",
    repoUrl: "https://github.com/sindhudchitragar1729/Travelyt",
    liveUrl: null,
    accentColor: "#3B82F6",
    featured: true,
  },
  {
    id: 2,
    title: "finance-dashboard",
    tagline: "Finance dashboard for users",
    description:
      "A comprehensive finance dashboard built using Node.js, PostgreSQL, Express, and JavaScript.",
    tech: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
    role: "Creator",
    year: 2024,
    status: "shipped",
    repoUrl: "https://github.com/sindhudchitragar1729/finance-dashboard",
    liveUrl: null,
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

export const skillGroups = [
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

export const experience = [
  {
    id: 1,
    kind: "work",
    title: "Project Developer",
    organization: "Independent",
    location: "Remote",
    startDate: "2023-01",
    endDate: null,
    description:
      "Actively building and learning through hands-on full-stack and AI projects.",
    highlights: [
      "Built and deployed Travelyt, an AI travel planner.",
      "Developed a comprehensive Finance Dashboard.",
    ],
  },
  {
    id: 2,
    kind: "education",
    title: "Bachelor of Engineering in ECE",
    organization: "GM Institute of Technology",
    location: "Davanagere, Karnataka",
    startDate: "2022-08",
    endDate: "2026-05",
    description:
      "Electronics and Communication Engineering. Currently in my 3rd year.",
    highlights: [],
  },
  {
    id: 3,
    kind: "education",
    title: "Pre-University Education (PCMB)",
    organization: "Jnana Bandhu PU College",
    location: "Koppal, Karnataka",
    startDate: "2020-06",
    endDate: "2022-05",
    description:
      "Specialization in Physics, Chemistry, Mathematics, and Biology.",
    highlights: [],
  },
  {
    id: 4,
    kind: "education",
    title: "Primary Schooling",
    organization: "Sewa Vidyalaya Kinnal",
    location: "Koppal District, Karnataka",
    startDate: "2010-06",
    endDate: "2020-05",
    description:
      "Early education.",
    highlights: [],
  },
];

export const currentlyWorking = {
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

export const stats = {
  yearsCoding: 2,
  projectsShipped: 6,
  technologiesUsed: 12,
  coffeesConsumed: 482,
  commitsThisYear: 60,
};
