import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Typewriter({ texts, delay = 100 }: { texts: string[]; delay?: number }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (!isDeleting && currentText === texts[currentIndex]) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) => 
          isDeleting 
            ? prev.slice(0, -1) 
            : texts[currentIndex].slice(0, prev.length + 1)
        );
      }, isDeleting ? delay / 2 : delay);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts, delay]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "steps(2)" }}
        className="ml-1 w-[2px] h-[1em] bg-primary inline-block align-middle"
      />
    </span>
  );
}
