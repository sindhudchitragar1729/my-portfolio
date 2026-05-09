import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "@/components/Typewriter";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { LucideMail } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] w-full flex flex-col justify-center py-20 overflow-hidden group">
      
      {/* Background Image Layer */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        <motion.img
          src="/hero-bg.jpg"
          alt="Sindhu Background"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 0.85,
            filter: ["blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)", "blur(0px)"]
          }}
          transition={{ 
            scale: { duration: 1.5, ease: "easeOut" },
            opacity: { duration: 1.5, ease: "easeOut" },
            filter: { 
              duration: 35, 
              times: [0, 0.85, 0.88, 0.97, 1], 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="w-full h-full object-cover object-[center_15%]"
        />
        {/* Gradient overlays for text readability: darker on the left where text is, clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Main Content Layer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10"
      >
        <p className="text-primary font-mono mb-4 tracking-wider text-sm drop-shadow-sm">
          &gt; init user
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-white drop-shadow-xl">
          Sindhu D Chitragar.
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white/80 mb-8 drop-shadow-md">
          <Typewriter 
            texts={[
              "I build interfaces.",
              "I ship products.",
              "I obsess over details."
            ]} 
          />
        </h2>
        
        <div className="flex flex-wrap items-center gap-6 mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Say Hello
          </motion.a>
          
          <div className="flex gap-4">
            <SocialLink href="https://github.com/sindhudchitragar1729" icon={<FiGithub />} />
            <SocialLink href="https://linkedin.com/in/sindhu-d-c" icon={<FiLinkedin />} />
            <SocialLink href="https://instagram.com/sindhu.d.c7" icon={<FiInstagram />} />
            <SocialLink href="mailto:sindhu.d.chitragar1729@gmail.com" icon={<LucideMail size={20} />} />
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 gap-2 font-mono text-sm z-10 drop-shadow-md"
      >
        <span>scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/80 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, color: "hsl(var(--primary))" }}
      className="text-white/70 hover:text-white text-xl p-2 transition-colors drop-shadow"
    >
      {icon}
    </motion.a>
  );
}
