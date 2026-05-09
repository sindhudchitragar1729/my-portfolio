import { motion } from "framer-motion";
import { Sparkles, BookOpen, Radio } from "lucide-react";
import { currentlyWorking as data } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

function formatRelative(iso: string) {
  const date = new Date(iso);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function CurrentlyWorking() {
  const isLoading = false;

  return (
    <section id="now" className="w-full py-24 scroll-mt-20">
      <SectionHeader
        index="05"
        title="Now"
        subtitle="What I'm building, learning, and available for — right this minute."
      />

      {isLoading || !data ? (
        <div className="h-64 rounded-xl border border-card-border bg-card/40 animate-pulse" />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl border border-card-border bg-card/60 backdrop-blur-sm p-8 md:p-10 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none opacity-50">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl" />
          </div>

          <div className="relative space-y-8">
            <div className="flex items-start gap-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground/95">
                  {data.headline}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl">
                  {data.summary}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border/40">
              <div>
                <div className="flex items-center gap-2 mb-3 text-sm font-mono uppercase tracking-widest text-primary">
                  <Sparkles size={14} /> building
                </div>
                <ul className="space-y-2">
                  {data.focusAreas.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -4 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="text-sm text-foreground/90 flex items-center gap-2"
                    >
                      <span className="text-primary">▹</span>
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3 text-sm font-mono uppercase tracking-widest text-primary">
                  <BookOpen size={14} /> learning
                </div>
                <ul className="space-y-2">
                  {data.learning.map((l, i) => (
                    <motion.li
                      key={l}
                      initial={{ opacity: 0, x: -4 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="text-sm text-foreground/90 flex items-center gap-2"
                    >
                      <span className="text-primary">▹</span>
                      {l}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40">
              <div className="flex items-center gap-2 mb-2 text-sm font-mono uppercase tracking-widest text-primary">
                <Radio size={14} /> availability
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                {data.availability}
              </p>
            </div>

            <div className="text-xs font-mono text-muted-foreground/50 pt-2">
              last updated {formatRelative(data.lastUpdated)}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
