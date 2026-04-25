import { useEffect } from "react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { CurrentlyWorking } from "@/components/sections/CurrentlyWorking";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    document.title = "Alex Carter · Software Engineer & Builder";
  }, []);

  return (
    <div
      id="top"
      className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary"
    >
      <CustomCursor />
      <ParticleBackground />
      <Nav />

      <main className="relative z-10 flex flex-col w-full max-w-6xl mx-auto px-6 pt-14">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <CurrentlyWorking />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
