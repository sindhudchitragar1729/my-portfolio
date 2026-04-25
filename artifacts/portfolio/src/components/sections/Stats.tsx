import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useGetStats } from "@workspace/api-client-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2200, bounce: 0 });
  const display = useTransform(spring, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return display.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
  }, [display, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const items = (data: {
  yearsCoding: number;
  projectsShipped: number;
  technologiesUsed: number;
  coffeesConsumed: number;
  commitsThisYear: number;
}) => [
  { label: "years coding", value: data.yearsCoding, hint: "since middle school" },
  { label: "projects shipped", value: data.projectsShipped, hint: "and counting" },
  { label: "technologies used", value: data.technologiesUsed, hint: "in production" },
  { label: "commits this year", value: data.commitsThisYear, hint: "as of today" },
  { label: "coffees consumed", value: data.coffeesConsumed, hint: "approximate" },
];

export function Stats() {
  const { data, isLoading } = useGetStats();

  return (
    <section className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border/50 rounded-md overflow-hidden border border-border/50"
      >
        {(isLoading || !data ? Array.from({ length: 5 }) : items(data)).map(
          (item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ backgroundColor: "hsl(var(--card))" }}
              className="bg-background p-6 flex flex-col justify-between min-h-[140px] group"
            >
              {item ? (
                <>
                  <div className="text-3xl md:text-4xl font-bold text-foreground/95 font-mono">
                    <Counter value={(item as { value: number }).value} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                      {(item as { label: string }).label}
                    </div>
                    <div className="text-xs text-muted-foreground/60 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      // {(item as { hint: string }).hint}
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-8 bg-muted/40 rounded animate-pulse" />
              )}
            </motion.div>
          ),
        )}
      </motion.div>
    </section>
  );
}
