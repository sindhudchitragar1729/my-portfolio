import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 mt-12 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
        <div>
          <span className="text-primary">$</span> built with care · {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-4">
          {/* TODO: swap with real URLs */}
          <motion.a
            whileHover={{ y: -2, color: "hsl(var(--primary))" }}
            href="https://github.com/sindhudchitragar1729"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2, color: "hsl(var(--primary))" }}
            href="https://linkedin.com/in/sindhu-d-c"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={16} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2, color: "hsl(var(--primary))" }}
            href="https://instagram.com/sindhu.d.c7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram size={16} />
          </motion.a>
        </div>
        <div className="opacity-60">
          designed & built — not a template.
        </div>
      </div>
    </footer>
  );
}
