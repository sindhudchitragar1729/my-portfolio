import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12"
    >
      <p className="text-primary font-mono text-sm tracking-wider mb-3">
        <span className="opacity-50">{index}.</span> <span className="opacity-50">/</span>{" "}
        <span>{typeof title === "string" ? title.toLowerCase() : ""}</span>
      </p>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground/95">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
      ) : null}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-6 h-px w-24 bg-gradient-to-r from-primary to-transparent origin-left"
      />
    </motion.div>
  );
}
