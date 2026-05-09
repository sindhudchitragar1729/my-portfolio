import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Camera } from "lucide-react";

export function Photos() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the image inside the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Moves the image slightly up and down as you scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // Subtle scale effect on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section id="photos" className="w-full py-24 scroll-mt-20">
      <SectionHeader 
        index="06" 
        title="Gallery" 
        subtitle="A glimpse of the person behind the keyboard." 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mt-10 relative"
      >
        <div 
          ref={containerRef}
          className="relative w-full rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[4/3] md:aspect-[21/9] border border-card-border shadow-2xl group"
        >
          {/* Main Parallax Image */}
          <motion.div 
            style={{ y, scale }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <img 
              src="/developer.jpg" 
              alt="Developer" 
              className="w-full h-full object-cover object-center filter grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </motion.div>
          
          {/* Vignette & Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 pointer-events-none" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />

          {/* Floating content on top */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary backdrop-blur-md border border-primary/30">
                <Camera size={14} />
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-primary/90 drop-shadow-sm">
                Captured Moments
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
              Sindhu D Chitragar
            </h3>
            <p className="mt-2 text-sm md:text-base text-white/80 max-w-md font-medium drop-shadow">
              Building things, exploring the world, and constantly learning.
            </p>
          </motion.div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20 rounded-tl-lg transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20 rounded-tr-lg transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20 rounded-br-lg transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
        </div>
      </motion.div>
    </section>
  );
}
