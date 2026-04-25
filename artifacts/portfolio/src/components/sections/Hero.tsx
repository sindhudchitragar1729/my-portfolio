import { motion } from "framer-motion";
import { Typewriter } from "@/components/Typewriter";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { LucideMail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[100dvh] w-full flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-primary font-mono mb-4 tracking-wider text-sm">
          &gt; init user
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-foreground/90">
          Alex Carter.
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-muted-foreground mb-8">
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
            className="px-6 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            Say Hello
          </motion.a>
          
          <div className="flex gap-4">
            {/* TODO: swap with real URLs */}
            <SocialLink href="https://github.com/yourhandle" icon={<FiGithub />} />
            <SocialLink href="https://linkedin.com/in/yourhandle" icon={<FiLinkedin />} />
            <SocialLink href="https://instagram.com/yourhandle" icon={<FiInstagram />} />
            <SocialLink href="mailto:hello@example.com" icon={<LucideMail size={20} />} />
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground gap-2 font-mono text-sm"
      >
        <span>scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"
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
      className="text-muted-foreground text-xl p-2 transition-colors"
    >
      {icon}
    </motion.a>
  );
}
