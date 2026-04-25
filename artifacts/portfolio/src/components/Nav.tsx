import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "about", label: "about" },
  { id: "projects", label: "work" },
  { id: "skills", label: "toolkit" },
  { id: "experience", label: "path" },
  { id: "now", label: "now" },
  { id: "contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0);

      let current = "";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = s.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-40 transition-colors ${
          scrolled
            ? "backdrop-blur-md bg-background/70 border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-wider text-foreground"
          >
            <span className="text-primary">~/</span>alex<span className="text-primary">.dev</span>
          </a>
          <ul className="hidden md:flex items-center gap-1 font-mono text-xs">
            {SECTIONS.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    active === s.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="text-primary/50 mr-1">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-block font-mono text-xs px-3 py-1.5 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
          >
            say hello
          </a>
        </nav>
        <motion.div
          style={{ scaleX: progress }}
          className="h-px bg-primary origin-left"
        />
      </motion.header>

      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            className="group flex items-center gap-2 justify-end"
          >
            <span
              className={`font-mono text-xs transition-opacity ${
                active === s.id
                  ? "opacity-100 text-primary"
                  : "opacity-0 group-hover:opacity-60 text-muted-foreground"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block h-px transition-all ${
                active === s.id
                  ? "w-8 bg-primary"
                  : "w-4 bg-muted-foreground/40 group-hover:w-6 group-hover:bg-foreground"
              }`}
            />
          </a>
        ))}
      </div>
    </>
  );
}
