import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const codeLines: { tokens: { t: string; c: string }[] }[] = [
  {
    tokens: [
      { t: "const", c: "text-violet-400" },
      { t: " developer", c: "text-cyan-300" },
      { t: " = ", c: "text-foreground/70" },
      { t: "{", c: "text-foreground/80" },
    ],
  },
  {
    tokens: [
      { t: "  name", c: "text-sky-300" },
      { t: ": ", c: "text-foreground/70" },
      { t: "'Sindhu D Chitragar'", c: "text-emerald-300" },
      { t: ",", c: "text-foreground/70" },
    ],
  },
  {
    tokens: [
      { t: "  obsessions", c: "text-sky-300" },
      { t: ": [", c: "text-foreground/70" },
      { t: "'typography'", c: "text-emerald-300" },
      { t: ", ", c: "text-foreground/70" },
      { t: "'motion'", c: "text-emerald-300" },
      { t: ", ", c: "text-foreground/70" },
      { t: "'edge cases'", c: "text-emerald-300" },
      { t: "],", c: "text-foreground/70" },
    ],
  },
  {
    tokens: [
      { t: "  craft", c: "text-sky-300" },
      { t: ": ", c: "text-foreground/70" },
      { t: "'I sweat the 4am details'", c: "text-emerald-300" },
      { t: ",", c: "text-foreground/70" },
    ],
  },
  {
    tokens: [
      { t: "  available", c: "text-sky-300" },
      { t: ": ", c: "text-foreground/70" },
      { t: "true", c: "text-orange-300" },
      { t: ",", c: "text-foreground/70" },
    ],
  },
  {
    tokens: [
      { t: "};", c: "text-foreground/80" },
    ],
  },
];

function CodeBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setVisibleLines(current);
      if (current >= codeLines.length) clearInterval(interval);
    }, 220);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="rounded-md border border-card-border bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/5"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-background/40">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          ~/about/me.ts
        </span>
      </div>
      <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{
              opacity: i < visibleLines ? 1 : 0,
              x: i < visibleLines ? 0 : -8,
            }}
            transition={{ duration: 0.3 }}
            className="flex gap-4"
          >
            <span className="text-muted-foreground/40 select-none w-6 text-right">
              {i + 1}
            </span>
            <span>
              {line.tokens.map((tok, j) => (
                <span key={j} className={tok.c}>
                  {tok.t}
                </span>
              ))}
            </span>
          </motion.div>
        ))}
        {visibleLines >= codeLines.length ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-4 mt-2"
          >
            <span className="text-muted-foreground/40 select-none w-6 text-right">
              {codeLines.length + 1}
            </span>
            <span className="text-foreground/60">
              {">"}{" "}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-primary align-middle"
              />
            </span>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="w-full py-24 scroll-mt-20">
      <SectionHeader index="01" title="About" />
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          <p>
            I’m a 3rd-year Electronics and Communication Engineering student at GM Institute of Technology, driven by an intense curiosity for technology and an obsession with building things through code. What started as simple curiosity quickly turned into countless hours of learning, experimenting, debugging, and pushing myself deeper into the world of software development and AI.
          </p>
          <p>
            I’m deeply passionate about{" "}
            <span className="text-foreground">Artificial Intelligence</span>,{" "}
            <span className="text-foreground">Machine Learning</span>,{" "}
            <span className="text-foreground">Full-Stack Development</span>, and problem-solving. For me, coding is not just a skill — it’s a mindset. I genuinely enjoy breaking down complex problems, understanding how systems work internally, and creating solutions that feel meaningful and impactful.
          </p>
          <p>
            My goal is to become a developer and AI engineer capable of creating intelligent systems that solve real-world problems and leave a lasting impact. Every project I build, every bug I fix, and every concept I learn is one more step toward that vision.
          </p>
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-6 font-mono text-sm">
            {[
              "JavaScript / TypeScript",
              "React",
              "Node.js & Express",
              "Machine Learning",
              "PostgreSQL / MySQL",
              "Python & C++",
            ].map((s) => (
              <div key={s} className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">▹</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <CodeBlock />
        </motion.div>
      </div>
    </section>
  );
}
