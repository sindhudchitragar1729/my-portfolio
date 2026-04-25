import { MouseEvent, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useListProjects } from "@workspace/api-client-react";
import { SectionHeader } from "@/components/SectionHeader";

type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  role: string;
  year: number;
  status: string;
  repoUrl?: string | null;
  liveUrl?: string | null;
  accentColor: string;
  featured: boolean;
};

function StatusPill({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    shipped: { label: "shipped", cls: "text-emerald-300 border-emerald-400/30" },
    beta: { label: "beta", cls: "text-amber-300 border-amber-400/30" },
    in_progress: {
      label: "in progress",
      cls: "text-cyan-300 border-cyan-400/30",
    },
    archived: { label: "archived", cls: "text-muted-foreground border-border" },
  };
  const v = map[status] ?? map.shipped;
  return (
    <span
      className={`text-[10px] uppercase tracking-widest font-mono px-2 py-0.5 border rounded-full ${v.cls}`}
    >
      ● {v.label}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const glowX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);
  const background = useMotionTemplate`radial-gradient(400px circle at ${glowX} ${glowY}, ${project.accentColor}22, transparent 60%)`;

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="relative group rounded-xl border border-card-border bg-card/60 backdrop-blur-sm p-7 overflow-hidden"
    >
      <motion.div
        style={{ background }}
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <div
        className="absolute top-0 left-0 h-px w-full opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
        }}
      />

      <div className="relative flex flex-col gap-5 h-full" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="font-mono text-xs"
                style={{ color: project.accentColor }}
              >
                /{String(project.id).padStart(2, "0")}
              </span>
              <StatusPill status={project.status} />
              <span className="text-xs font-mono text-muted-foreground">
                {project.year}
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {project.tagline}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {project.repoUrl ? (
              <motion.a
                whileHover={{ y: -2 }}
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} repository`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={18} />
              </motion.a>
            ) : null}
            {project.liveUrl ? (
              <motion.a
                whileHover={{ y: -2 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink size={18} />
              </motion.a>
            ) : null}
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-0.5 rounded-sm text-muted-foreground bg-muted/40 border border-border/50"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground/70 pt-2 border-t border-border/40">
          <span>{project.role}</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-1 group-hover:text-primary transition-colors"
          >
            view <ArrowUpRight size={12} />
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { data, isLoading } = useListProjects();

  return (
    <section id="projects" className="w-full py-24 scroll-mt-20">
      <SectionHeader
        index="02"
        title="Selected Work"
        subtitle="A few of the things I've shipped — and a few that are still becoming themselves."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading || !data
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-72 rounded-xl border border-card-border bg-card/40 animate-pulse"
              />
            ))
          : (data as Project[]).map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
      </div>
    </section>
  );
}
