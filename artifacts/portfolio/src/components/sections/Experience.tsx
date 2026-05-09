import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { experience as data } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

type Entry = {
  id: number;
  kind: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  highlights: string[];
};

function formatDate(d: string) {
  const [y, m] = d.split("-");
  if (!m) return y;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const idx = parseInt(m, 10) - 1;
  return `${months[idx] ?? m} ${y}`;
}

export function Experience() {
  const isLoading = false;
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");

  const filtered = (data as Entry[] | undefined)?.filter(
    (e) => filter === "all" || e.kind === filter,
  );

  return (
    <section id="experience" className="w-full py-24 scroll-mt-20">
      <SectionHeader
        index="04"
        title="Path"
        subtitle="Where I've been studying, building, and breaking things."
      />

      <div className="flex gap-2 mb-10 font-mono text-xs">
        {(["all", "work", "education"] as const).map((opt) => (
          <button
            key={opt}
            onClick={() => setFilter(opt)}
            className={`px-3 py-1.5 rounded-full border transition-colors ${
              filter === opt
                ? "border-primary text-primary bg-primary/10"
                : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/40"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
        <AnimatePresence mode="popLayout">
          {isLoading || !data ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="ml-10 md:ml-14 mb-8 h-32 bg-muted/30 rounded animate-pulse"
              />
            ))
          ) : (
            (filtered ?? []).map((entry, i) => (
              <motion.div
                key={entry.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative pl-10 md:pl-14 pb-10 group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute left-0 md:left-2 top-1 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </motion.div>

                <div className="flex flex-col gap-3 rounded-lg border border-card-border bg-card/40 hover:bg-card/70 transition-colors p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary">
                      {entry.kind === "education" ? (
                        <GraduationCap size={14} />
                      ) : (
                        <Briefcase size={14} />
                      )}
                      {entry.kind}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {formatDate(entry.startDate)} —{" "}
                      {entry.endDate ? formatDate(entry.endDate) : "present"}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground/60">
                      · {entry.location}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground/95">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-primary/90 mt-0.5">
                      {entry.organization}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {entry.description}
                  </p>
                  {entry.highlights.length > 0 ? (
                    <ul className="mt-2 space-y-1.5">
                      {entry.highlights.map((h, hi) => (
                        <motion.li
                          key={hi}
                          initial={{ opacity: 0, x: -4 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + hi * 0.05 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5 text-[8px]">▸</span>
                          <span>{h}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
