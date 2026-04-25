import { motion } from "framer-motion";
import { useListSkills } from "@workspace/api-client-react";
import { SectionHeader } from "@/components/SectionHeader";

type SkillGroup = {
  category: string;
  skills: { name: string; level: number }[];
};

function SkillBar({
  name,
  level,
  index,
}: {
  name: string;
  level: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2 font-mono text-sm">
        <span className="text-foreground/90">{name}</span>
        <span className="text-muted-foreground/60 text-xs tabular-nums">
          {level.toString().padStart(3, "0")}
          <span className="text-muted-foreground/40">/100</span>
        </span>
      </div>
      <div className="relative h-1 w-full bg-muted/40 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.4, delay: 0.2 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-cyan-300 rounded-full"
        />
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.6, delay: 0.4 + index * 0.05, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const { data, isLoading } = useListSkills();

  return (
    <section id="skills" className="w-full py-24 scroll-mt-20">
      <SectionHeader
        index="03"
        title="Toolkit"
        subtitle="A non-exhaustive list of the things I reach for. The bars are honest, not aspirational."
      />
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
        {isLoading || !data
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-5 w-32 bg-muted/40 rounded animate-pulse" />
                {Array.from({ length: 5 }).map((__, j) => (
                  <div key={j} className="h-4 bg-muted/30 rounded animate-pulse" />
                ))}
              </div>
            ))
          : (data as SkillGroup[]).map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-primary opacity-70">
                    /{String(gi + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm uppercase tracking-[0.2em] text-foreground/80">
                    {group.category}
                  </h3>
                  <div className="flex-1 h-px bg-border/50" />
                </div>
                <div className="space-y-4">
                  {group.skills.map((s, i) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
                  ))}
                </div>
              </motion.div>
            ))}
      </div>
    </section>
  );
}
